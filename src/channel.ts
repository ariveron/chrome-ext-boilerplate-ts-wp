class Message {
  public channel: string;
  public event: any;

  constructor(channel: string, event: any) {
    this.channel = channel;
    this.event = event;
  }
}

class Publisher<T> {
  private port: chrome.runtime.Port;
  private channel: string;

  public constructor(port: chrome.runtime.Port, channel: string) {
    this.port = port;
    this.channel = channel;
  }

  public publish(event: T) {
    this.port.postMessage(new Message(this.channel, event));
  }
}

class Subscriber<T> {
  private portName: string;
  private channel: string;

  public constructor(portName: string, channel: string) {
    this.portName = portName;
    this.channel = channel;
  }

  public subscribe(callback: { (event: T): void }) {
    chrome.runtime.onConnect.addListener((port: chrome.runtime.Port) => {
      if (port.name !== this.portName) return;

      port.onMessage.addListener((message: Message) => {
        if (message.channel !== this.channel) return;

        callback(message.event);
      });
    });
  }
}

export class Channel<T> {
  private static port: chrome.runtime.Port;
  private publisher: Publisher<T>;
  private subscriber: Subscriber<T>;

  constructor(channel: string) {
    if (!Channel.port) {
      Channel.port = chrome.runtime.connect({ name: 'sfx' });
    }

    this.publisher = new Publisher<T>(Channel.port, channel);
    this.subscriber = new Subscriber<T>(Channel.port.name, channel);
  }

  subscribe(callback: { (event: T): void }) {
    this.subscriber.subscribe(callback);
  }

  publish(event: T) {
    this.publisher.publish(event);
  }
}
