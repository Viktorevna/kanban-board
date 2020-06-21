export enum ICON_NAMES {
  ADD = 'add',
  CLEAR = 'clear'
}

export class Item {
  constructor(
    public isItemNew = true,
    public title?: string,
    public id?: string
  ) {
    this.id = '_' + Math.random().toString(36).substr(0, 4);
  }
}

export class Column {
  constructor(
    public isColumnNew = false,
    public items: Array<Item> = [],
    public title?: string,
    public id?: string
  ) {
    this.id = '_' + Math.random().toString(36).substr(0, 3);
  }
}
