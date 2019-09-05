import { IStorable } from './IStorable';

export class StorageService {
  private constructor() {}

  public static sync<T extends IStorable>(model: T): void {
    StorageService.get<T>(model, (updatedModel: T) => {
      StorageService.set<T>(updatedModel);
    });
  }

  public static get<T extends IStorable>(
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

      callback(updatedModel);
    });
  }

  public static set<T extends IStorable>(model: T): void {
    chrome.storage.local.set({ [model.__key__]: model });
  }
}

type callback<T> = (updatedModel: T) => void;
