/*
This psuedo-static class exposes the following methods:
  
  --  subscribe(eventName: string, callback: callback): void

        Allows the user to subcsribe to events that
        are emitted locally from the calling script, or
        emitted from a background, content, popup, or options
        page script.

  --  unsubscribe(eventName: string, callback: callback): void

        Allows the user to unsubcribe from an event they were
        previously subscribe to, by providing the event name and 
        a reference to the callback function originally used to
        subscribe to the event.

  --  emit(eventName: string, data: any): void

        Allows the user to emit event. The event will be sent
        to all subscribers, both locally within the calling
        scrip, as well as globally, to any other scripts subscribed
        to the event through this PubSub class.
*/

import { appConfig } from '../config/app.config';
import { IJSON } from '../libraries/CommonTypes';

export class PubSub {
  private static callbacksByEvents: { [eventName: string]: callback[] } = {};
  private static isContentPage: boolean = PubSub.init();

  private constructor() {}

  private static init(): boolean {
    chrome.runtime.onMessage.addListener((message: PubSubMessage) => {
      if (
        message.extensionName !== appConfig.general.extensionName ||
        message.extensionId !== appConfig.general.extensionId ||
        message.messageType !== appConfig.libraries.PubSub.portMessageType
      ) {
        return;
      }

      PubSub.emitLocal(message.eventName, message.data);
    });

    return PubSub.getIsContentPage();
  }

  private static getIsContentPage(): boolean {
    return location.protocol !== appConfig.general.chromeExtensionProtocol;
  }

  public static subscribe(eventName: string, callback: callback): void {
    PubSub.callbacksByEvents[eventName] =
      PubSub.callbacksByEvents[eventName] || [];
    PubSub.callbacksByEvents[eventName].push(callback);
  }

  public static unsubscribe(eventName: string, callback: callback): void {
    const eventCallbacks = PubSub.callbacksByEvents[eventName];

    if (!eventCallbacks) return;

    for (let i = 0; i < eventCallbacks.length; i++) {
      if (eventCallbacks[i] === callback) {
        eventCallbacks.splice(i, 1);
        break;
      }
    }
  }

  public static emit(eventName: string, data: IJSON): void {
    PubSub.emitGlobal(eventName, data);
    PubSub.emitLocal(eventName, data);
  }

  private static emitLocal(eventName: string, data: IJSON) {
    const eventCallbacks = PubSub.callbacksByEvents[eventName];

    if (!eventCallbacks) return;

    eventCallbacks.forEach((callback: callback) => {
      callback(data);
    });
  }

  private static emitGlobal(eventName: string, data: IJSON): void {
    if (!PubSub.isContentPage) {
      PubSub.sendMessageToContent(eventName, data);
    }

    PubSub.sendMessageToExtension(eventName, data);
  }

  private static sendMessageToExtension(eventName: string, data: IJSON): void {
    const message = new PubSubMessage(eventName, data);
    chrome.runtime.sendMessage(message);
  }

  private static sendMessageToContent(eventName: string, data: IJSON): void {
    const message = new PubSubMessage(eventName, data);

    chrome.tabs.query({ url: appConfig.libraries.PubSub.urlPattern }, tabs => {
      for (let i = 0; i < tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, message);
      }
    });
  }
}

type callback = (data: IJSON) => void;

class PubSubMessage {
  public extensionName: string;
  public extensionId: string;
  public messageType: string;
  public eventName: string;
  public data: IJSON;

  constructor(eventName: string, data: IJSON) {
    this.extensionName = appConfig.general.extensionName;
    this.extensionId = appConfig.general.extensionId;
    this.messageType = appConfig.libraries.PubSub.portMessageType;
    this.eventName = eventName;
    this.data = data;
  }
}
