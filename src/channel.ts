import { IPageLink } from './IPageLink.interface';
import { ChannelMessage } from './ChannelMessage';

export class Channel<T> {
  private pageLink: IPageLink;
  private name: string;
  private subscribers: ((message: T) => void)[];

  constructor(pageLink: IPageLink, name: string) {
    this.pageLink = pageLink;
    this.name = name;
    this.subscribers = [];
    this.pageLink.addListener(this.pageLinkListener);
  }

  public publish = (message: T): void => {
    const channelMessage = new ChannelMessage<T>(this.name, message);
    this.pageLink.broadcast(channelMessage);
  };

  public subscribe = (
    subscriber: (message: T) => void
  ): ((message: T) => void) => {
    this.subscribers.push(subscriber);
    return subscriber;
  };

  public unsubscribe = (subscriberToRemove: (message: T) => void): void => {
    const index = this.subscribers.findIndex(
      subscriber => subscriber === subscriberToRemove
    );
    if (index !== -1) this.subscribers.splice(index, 1);
  };

  private pageLinkListener = (
    channelMessage: ChannelMessage<T>,
    port: chrome.runtime.Port
  ): void => {
    if (channelMessage.channel === this.name) {
      this.subscribers.forEach(subscriber => {
        subscriber(channelMessage.message);
      });
    }
  };

  private onDestroy = () => {
    this.pageLink.removeListener(this.pageLinkListener);
  };
}