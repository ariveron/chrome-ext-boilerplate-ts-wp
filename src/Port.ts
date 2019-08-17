export class Port {
  private port: chrome.runtime.Port;

  public constructor(name: string = '') {
    this.port = chrome.runtime.connect({ name: name });
  }

  public disconnect(): void {
    this.port.disconnect();
  }

  public addListener(
    callback: (message: any, port: chrome.runtime.Port) => void
  ): (message: any, port: chrome.runtime.Port) => void {
    this.port.onMessage.addListener(callback);
    return callback;
  }

  public removeListener(
    callback: (message: any, port: chrome.runtime.Port) => void
  ): void {
    this.port.onMessage.removeListener(callback);
  }

  public postMessage(message: any): boolean {
    let hasNoErrors = true;
    try {
      this.port.postMessage(message);
    } catch (err) {
      console.error(err);
    }
    return hasNoErrors;
  }
}
