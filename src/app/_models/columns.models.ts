/**
 * Наименования иконок
 */
export enum ICON_NAMES {
  ADD = 'add',
  CLEAR = 'clear',
  DELETE = 'delete',
  CREATE_BOARD = 'flip_to_front',
  SAVE_TEMPLATE = 'flip_to_back'
}

/**
 * Карточка
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
 * Колонка
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
