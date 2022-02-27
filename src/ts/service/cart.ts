import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getSumPrices(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  getSumPricesDiscount(discont: number): number {
    const sum = this.getSumPrices();

    return sum * (1 - discont / 100);
  }

  deleteItem(id: number): void {
    const index = this._items.findIndex((item) => item.id === id);
    this._items.splice(index, 1);
  }
}
