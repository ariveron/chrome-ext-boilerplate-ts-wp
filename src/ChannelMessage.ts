export class ChannelMessage<T> {
  public channel: string;
  public message: T;

  public constructor(channel: string, message: T) {
    this.channel = channel;
    this.message = message;
  }
};
