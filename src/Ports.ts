export class Ports {
  private ports: (chrome.runtime.Port)[];
  private listeners: ((message: any, port: chrome.runtime.Port) => void)[];

  public constructor() {
    this.ports = [];
    this.listeners = [];

    chrome.runtime.onConnect.addListener(port => {
      this.ports.push(port);

      port.onDisconnect.addListener(() => {
        const i = this.ports.findIndex(storedPort => storedPort === port);
        if (i === -1) return;
        this.ports.splice(i, 1);
      });

      this.listeners.forEach(listener => port.onMessage.addListener(listener));
    });
  }

  public addListener(
    callback: (message: any, port: chrome.runtime.Port) => void
  ): (message: any, port: chrome.runtime.Port) => void {
    this.ports.forEach(port => port.onMessage.addListener(callback));
    this.listeners.push(callback);
    return callback;
  }

  public removeListener(
    callback: (message: any, port: chrome.runtime.Port) => void
  ): void {
    this.ports.forEach(port => port.onMessage.removeListener(callback));

    const i = this.listeners.findIndex(listener => listener === callback);
    if (i === -1) return;
    this.listeners.splice(i, 1);
  }

  // todo: rename to broadcast
  public postMessage(message: any): boolean {
    let hasNoErrors = true;
    this.ports.forEach(port => {
      try {
        port.postMessage(message);
      } catch (err) {
        console.error(err);
        hasNoErrors = false;
      }
    });
    return hasNoErrors;
  }

  // todo: create postMessage(tabid: number, message: any)
}
