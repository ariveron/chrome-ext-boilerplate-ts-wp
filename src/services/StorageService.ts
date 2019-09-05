import { IStorable } from './IStorable';
import { UserOptions } from '../models/UserOptions';

export class StorageService {
  private constructor() {}

  public static updateFromStorage<T extends IStorable>(
    model: T,
    callback: callback<T>
  ): void {
    chrome.storage.local.get(model.__key__, result => {
      const storedModel: T = result[model.__key__] as T;
      const updatedModel: T = Object.assign({}, model) as T;

      if (storedModel !== undefined) {
        for (let property in updatedModel) {
          if (storedModel[property] !== undefined) {
            updatedModel[property] = storedModel[property];
          }
        }
      }

      StorageService.updateToStorage(updatedModel);

      callback(updatedModel);
    });
  }

  public static updateToStorage<T extends IStorable>(model: T): void {
    chrome.storage.local.set(model);
  }
}

type callback<T> = (updatedModel: T) => void;
