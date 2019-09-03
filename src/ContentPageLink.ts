import { config } from './config';
import { IPageLink } from './IPageLink.interface';

export class ContentPageLink implements IPageLink {
  private port: chrome.runtime.Port;

  constructor() {
    this.port = chrome.runtime.connect({ name: config.pageLinkPortName });
  }

  public broadcast = (message: any): void => {
    this.port.postMessage(message);
  };

  public addListener = (
    listener: (message: any, port: chrome.runtime.Port) => void
  ): ((message: any, port: chrome.runtime.Port) => void) => {
    this.port.onMessage.addListener(listener);
    return listener;
  };

  public removeListener = (
    listener: (message: any, port: chrome.runtime.Port) => void
  ): void => {
    this.port.onMessage.removeListener(listener);
  };
}
