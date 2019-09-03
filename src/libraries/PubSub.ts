import { config } from '../config/config';

type pubSubCallback = (data: any) => any;
type pubSubEventsDictionary = { [eventName: string]: pubSubCallback[] };

class PubSubMessage {
  public extensionName: string;
  public extensionId: number;
  public messageType: string;
  public eventName: string;
  public data: any;

  constructor(eventName: string, data: any) {
    this.extensionName = config.extensionName;
    this.extensionId = config.extensionId;
    this.messageType = 'PubSub';
    this.eventName = eventName;
    this.data = data;
  }
}

export class PubSub {
  private static events: pubSubEventsDictionary = {};
  private static isContentPage: boolean = PubSub.getIsContentPage();

  private constructor() {}

  private static getIsContentPage(): boolean {
    return location.protocol !== 'chrome-extension';
  }

  public static subscribe(eventName: string, callback: pubSubCallback): void {
    PubSub.events[eventName] = PubSub.events[eventName] || [];
    PubSub.events[eventName].push(callback);
  }

  public static unsubscribe(eventName: string, callback: pubSubCallback): void {
    const eventCallbacks = PubSub.events[eventName];

    if (!eventCallbacks) return;

    for (let i = 0; i < eventCallbacks.length; i++) {
      if (eventCallbacks[i] === callback) {
        eventCallbacks.splice(i, 1);
        break;
      }
    }
  }

  public static emit(eventName: string, data: any): void {
    PubSub.emitGlobal(eventName, data);
    PubSub.emitLocal(eventName, data);
  }

  private static emitLocal(eventName: string, data: any) {
    const eventCallbacks = PubSub.events[eventName];

    if (!eventCallbacks) return;

    eventCallbacks.forEach((callback: pubSubCallback) => {
      callback(data);
    });
  }

  private static emitGlobal(eventName: string, data: any) {
    if (!PubSub.isContentPage) {
      PubSub.sendMessageToContent(eventName, data);
    }

    PubSub.sendMessageToExtension(eventName, data);
  }

  private static sendMessageToExtension(eventName: string, data: any): void {
    const message = new PubSubMessage(eventName, data);
    chrome.runtime.sendMessage(message);
  }

  private static sendMessageToContent(eventName: string, data: any): void {
    const message = new PubSubMessage(eventName, data);

    chrome.tabs.query({}, tabs => {
      for (let i = 0; i < tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, message);
      }
    });
  }
}
