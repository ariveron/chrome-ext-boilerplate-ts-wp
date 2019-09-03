import { IPageLink } from './IPageLink.interface';
import { config } from './config';

export class BackgroundPageLink implements IPageLink {
  private ports: chrome.runtime.Port[];
  private listeners: ((message: any) => void)[];

  public constructor() {
    this.ports = [];
    this.listeners = [];

    chrome.runtime.onConnect.addListener(this.onPortConnect);
  }

  private onPortConnect = (port: chrome.runtime.Port): void => {
    if (!this.verifyPortOrigin(port)) return;

    this.ports.push(port);
    port.onDisconnect.addListener(this.onPortDisconnect);
    port.onMessage.addListener(this.onPortMessage);
  };

  private verifyPortOrigin = (port: chrome.runtime.Port): boolean => {
    if (port.name !== config.pageLinkPortName) return false;
    return true;
  };

  private onPortDisconnect = (disconnectedPort: chrome.runtime.Port): void => {
    const index = this.ports.findIndex(port => port === disconnectedPort);
    if (index !== -1) {
      this.ports[index].onMessage.removeListener(this.onPortMessage);
      this.ports.splice(index, 1);
    }
  };

  private onPortMessage = (message: any, port: chrome.runtime.Port): void => {
    this.listeners.forEach(listener => {
      listener(message);
    });

    this.exclusiveBroadcast(message, port);
  };

  private exclusiveBroadcast = (
    message: any,
    excludedPort: chrome.runtime.Port | undefined
  ): void => {
    this.ports.forEach(port => {
      if (port !== excludedPort) {
        try {
          port.postMessage(message);
        } catch {
          this.onPortDisconnect(port);
        }
      }
    });

    this.listeners.forEach(listener => {
      listener(message);
    });
  };

  public broadcast = (message: any): void => {
    this.exclusiveBroadcast(message, undefined);
  };

  public addListener = (
    listener: (message: any) => void
  ): ((message: any) => void) => {
    this.listeners.push(listener);
    return listener;
  };

  public removeListener = (
    listener: (message: any) => void
  ): void => {
    const index = this.listeners.findIndex(
      storedListener => storedListener === listener
    );
    if (index !== -1) this.listeners.splice(index, 1);
  };
}
