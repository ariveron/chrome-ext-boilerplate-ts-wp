import { config } from './config';
import { ChannelMessage } from './ChannelMessage';

export class BackgroundChannelFactory {
  private ports: chrome.runtime.Port[];

  public constructor() {
    this.ports = [];

    chrome.runtime.onConnect.addListener(this.onPortConnect);
  }

  private onPortConnect = (port: chrome.runtime.Port) => {
    if (port.name !== config.channelPortName) return;
    this.ports.push(port);
    port.onDisconnect.addListener(this.onPortDisconnect);
    port.onMessage.addListener(this.onPortMessage);
  };

  private onPortDisconnect = (disconnectedPort: chrome.runtime.Port) => {
    const index = this.ports.findIndex(port => port === disconnectedPort);
    if (index === -1) return;
    this.ports.splice(index, 1);
  };

  private onPortMessage = (message: any): void => {
    // todo
  };

  public openChannel = <T>(name: string): BackgroundChannel<T> => {
    const channel = new BackgroundChannel<T>(this.ports, name);
    
    return channel;
  }
}

export class BackgroundChannel<T> {
  private ports: chrome.runtime.Port[];
  private name: string;
  private subscribers: ((message: ChannelMessage<T>) => void)[];

  public constructor(ports: chrome.runtime.Port[], name: string) {
    this.ports = ports;
    this.name = name;
    this.subscribers = [];
  }

  public subscribe = (
    subscriber: (message: ChannelMessage<T>) => void
  ): ((message: ChannelMessage<T>) => void) => {
    this.subscribers.push(subscriber);
    return subscriber;
  };

  public unsubscribe = (
    unsubscriber: (message: ChannelMessage<T>) => void
  ): void => {
    const index = this.subscribers.findIndex(
      subscriber => subscriber === unsubscriber
    );
    if (index === -1) return;
    this.subscribers.splice(index, 1);
  };
}

// export class BackgroundChannelFactory {
//   private ports: chrome.runtime.Port[];
//   private subscribers: any[];

//   public constructor() {
//     this.ports = [];
//     this.subscribers = [];

//     chrome.runtime.onConnect.addListener(this.onConnectListener);
//   }

//   private onConnectListener = (port: chrome.runtime.Port) => {
//     if (port.name !== config.channelPortName) return;
//     this.ports.push(port);
//     port.onDisconnect.addListener(this.onDisconnectListener);
//     port.onMessage.addListener(this.onMessageListener);
//   };

//   private onDisconnectListener = (disconnectedPort: chrome.runtime.Port) => {
//     const index = this.ports.findIndex(port => port === disconnectedPort);
//     if (index === -1) return;
//     this.ports.splice(index, 1);
//   };

//   private onMessageListener = (message: any, port: chrome.runtime.Port) => {
//     this.publish(message);
//   };

//   public subscribe = (subscriber: any): any => {
//     this.subscribers.push(subscriber);
//     return subscriber;
//   };

//   public unsubscribe = (subscriber: any): void => {
//     // todo
//   };

//   public publish = (message: any): any => {
//     this.subscribers.forEach(subscriber => subscriber(message));
//     this.ports.forEach(port => port.postMessage(message));
//   };
// }
