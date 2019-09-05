import { appConfig } from '../config/app.config';
import { IStorable } from '../services/IStorable';

const key = appConfig.models.UserOptions.storageKey;
const defaults = appConfig.models.UserOptions.defaults;

export class UserOptions implements IStorable {
  public __key__: string = key;
  public isUrlRewriterOn: boolean;

  constructor(isUrlRewriterOn: boolean = defaults.isUrlRewriterOn) {
    this.isUrlRewriterOn = isUrlRewriterOn;
  }
}
