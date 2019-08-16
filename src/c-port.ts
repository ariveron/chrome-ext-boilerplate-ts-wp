import { config } from './config';
import { Store } from './store';

export class CPort {
  private static port: chrome.runtime.Port;
  private static listeners: Store<
    (message: any, port: chrome.runtime.Port) => void
  >;

  constructor() {
    if (!CPort.port) {
      CPort.port = chrome.runtime.connect({ name: config.port });
    }
    if (!CPort.listeners) {
      CPort.listeners = new Store<
        (message: any, port: chrome.runtime.Port) => void
      >();
    }
  }

  public addListener(
    callback: (message: any, port: chrome.runtime.Port) => void
  ): number {
    CPort.port.onMessage.addListener(callback);
    const token = CPort.listeners.add(callback);
    return token;
  }

  public removeListener(token: number): void {
    const listener = CPort.listeners.remove(token);
    CPort.port.onMessage.removeListener(listener);
  }

  public sendMessage(message: any) {
    CPort.port.postMessage(message);
  }
}
