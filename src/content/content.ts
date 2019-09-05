import { PubSub } from '../libraries/PubSub';
import { EventNames } from '../config/EventNames';
import { UserOptions } from '../models/UserOptions';
import { StorageService } from '../services/StorageService';

PubSub.subscribe(EventNames.onUserOptionsUpdate, onUserOptionsUpdate);

function onUserOptionsUpdate(options: UserOptions): void {
  console.log(options);
}

StorageService.get<UserOptions>(new UserOptions(), (options: UserOptions) => {
  console.log(options);
});
