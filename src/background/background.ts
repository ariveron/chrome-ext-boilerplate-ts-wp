import { PubSub } from '../libraries/PubSub';
import { EventNames } from '../config/EventNames';
import { UserOptions } from '../models/UserOptions';
import { StorageService } from '../services/StorageService';
import { Background } from '../models/Background';

const state = new Background();

StorageService.updateFromStorage<UserOptions>(
  state.userOptions,
  onUpdateFromStorage
);

function onUpdateFromStorage(userOptions: UserOptions) {
  state.userOptions = userOptions;
  PubSub.emit(EventNames.onUserOptionsUpdate, userOptions);

  init();

  console.log('updated from storage');
  console.log(state.userOptions);
}

function init() {
  // TODO
}

PubSub.subscribe(EventNames.onUserOptionsUpdate, onUserOptionsUpdate);
PubSub.subscribe(EventNames.onInitRequest, onInitRequest);

function onUserOptionsUpdate(userOptions: UserOptions) {
  state.userOptions = userOptions;
  StorageService.updateToStorage(userOptions);
}

function onInitRequest() {
  PubSub.emit(EventNames.onInit, state.userOptions);

  console.log('got an init request');
}
