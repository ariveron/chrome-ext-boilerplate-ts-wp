import { PubSub } from '../libraries/PubSub';
import { EventNames } from '../config/EventNames';
import { UserOptions } from '../models/UserOptions';
import { StorageService } from '../services/StorageService';
import { domConfig } from '../config/dom.config';

const isUrlRewriterToggle = document.getElementById(
  domConfig.popup.ids.isUrlRewriterOn
) as HTMLInputElement;

StorageService.get<UserOptions>(new UserOptions(), (options: UserOptions) => {
  isUrlRewriterToggle.checked = options.isUrlRewriterOn;
});

isUrlRewriterToggle.addEventListener('click', (ev: MouseEvent) => {
  StorageService.get<UserOptions>(new UserOptions(), (options: UserOptions) => {
    options.isUrlRewriterOn = (ev.target as HTMLInputElement).checked;
    PubSub.emit(EventNames.onUserOptionsUpdate, options);
  });
});
