export class Store<T> {
  private store: Record<number, T | null | undefined>;

  constructor() {
    this.store = {};
  }

  public add(item: T): number {
    const token = this.generateToken();
    this.store[token] = item;
    return token;
  }

  public remove(token: number): T | null | undefined {
    const item: T = this.store[token];
    this.store[token] = null;
    return item;
  }

  public find(token: number): T | null | undefined {
    return this.store[token];
  }

  private generateToken(): number {
    const token = Math.random();

    if (this.store[token]) {
      return this.generateToken();
    }

    return token;
  }
}