/*
  Any events sent through the PubSub class should use
  use the EventNames enum instead of manually typing
  in the event name string.

  This should keep us from creating typos and hopefully,
  make it easier to maintain.

  We should also try to keep the event data sent with PubSub
  consistent per event.
*/

export enum EventNames {
  onUserOptionsUpdate = 'userOptionsUpdate',
  onInitRequest = 'initDataRequest',
  onInit = 'initData'
}
