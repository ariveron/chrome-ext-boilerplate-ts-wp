import { PubSub } from '../libraries/PubSub';
import { EventNames } from '../config/EventNames';
import { UserOptions } from '../models/UserOptions';
import { Popup } from '../models/Popup';

const state = new Popup();

PubSub.subscribe(EventNames.onInit, onInit);
PubSub.emit(EventNames.onInitRequest);
PubSub.subscribe(EventNames.onUserOptionsUpdate, onUserOptionsUpdate);

function onInit(userOptions: UserOptions): void {
  PubSub.unsubscribe(EventNames.onInit, onInit);
  state.userOptions = userOptions;

  console.log('on init complete');
  console.log(state.userOptions);

  // TODO
}

function onUserOptionsUpdate(userOptions: UserOptions): void {
  state.userOptions = userOptions;

  console.log('on user options update');
  console.log(state.userOptions);

  // TODO
}
