export enum ICON_NAMES {
  ADD = 'add',
  CLEAR = 'clear'
}

export interface IItem {
  title: string;
}

export interface IColumn {
  title: string;
  items: Array<IItem>;
}
