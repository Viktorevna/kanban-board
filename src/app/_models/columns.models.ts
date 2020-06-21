/**
 * Наименования иконок
 */
export enum ICON_NAMES {
  ADD = 'add',
  CLEAR = 'clear',
  DELETE = 'delete'
}

/**
 * Класс карточки
 */
export class Item {
  constructor(
    public isItemNew = true,
    public title?: string,
    public description?: string,
    public id?: string
  ) {
    this.id = new Date().getTime().toString();
  }
}

/**
 * Класс колонки
 */
export class Column {
  constructor(
    public isColumnNew = true,
    public items: Array<Item> = [],
    public title?: string,
    public id?: string
  ) {
    this.id = new Date().getTime().toString();
  }
}
