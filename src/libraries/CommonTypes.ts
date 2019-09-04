export interface IJSON {
  [key: string]: string | number | boolean | Date | IJSON | IJSONArray;
}

export interface IJSONArray
  extends Array<string | number | boolean | Date | IJSON | IJSONArray> {}
