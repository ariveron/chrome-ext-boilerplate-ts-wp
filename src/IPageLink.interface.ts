export interface IPageLink {
  broadcast(message: any): void;

  addListener(listener: (message: any) => void): (message: any) => void;

  removeListener(listner: (message: any) => void): void;
}
