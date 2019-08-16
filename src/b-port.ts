import { Store } from './store';

export class BPort {
  private static ports: chrome.runtime.Port[];
  private static listeners: ((
    message: any,
    port: chrome.runtime.Port
  ) => void)[];

  constructor() {
    if (!BPort.ports) {
      BPort.ports = [];
      chrome.runtime.onConnect.addListener((port: chrome.runtime.Port) => {
        BPort.ports.push(port);
        BPort.listeners.forEach(listener => {
          port.onMessage.addListener(listener);
        });
      });
    }

    if (!BPort.listeners) {
      BPort.listeners = [];
    }
  }

  public addListener(
    callback: (message: any, port: chrome.runtime.Port) => void
  ) {
    BPort.listeners.push(callback);

    BPort.ports.forEach(port => {
      port.onMessage.addListener(callback);
    });
  }

  public sendMessage(message: any) {
    BPort.ports.forEach(port => {
      port.postMessage(message);
    });
  }
}
