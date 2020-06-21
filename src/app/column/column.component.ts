import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Column, ICON_NAMES, Item } from 'src/app/_models/columns.models';
import locale from './column.i18n';
import { ColumnsService } from 'src/app/_services/columns.service';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input()
  isColumnNew = false;
  @Input()
  column: Column;

  @Output()
  editColumn = new EventEmitter<Column>();
  @Output()
  removeColumn = new EventEmitter<Column>();

  locale = locale;
  iconNames = ICON_NAMES;

  constructor(
    @Inject(ColumnsService) private columnsService
  ) {
  }

  /**
   * Добавление карточки
   */
  addNewItem(): void {
    const item = new Item();
    this.column.items.push(item);
    this.columnsService.editColumn(this.column);
  }

  /**
   * Редактирование карточки
   */
  editColumnItem(item: Item): void {
    const itemForEdit = this.column.items.find(i => {
      return i.id === item.id;
    });
    const itemForEditIndex = this.column.items.indexOf(itemForEdit);

    this.column.items[itemForEditIndex] = item;
    this.editColumn.emit(this.column);
  }

  /**
   * Удаление карточки
   */
  removeItem(item: Item): void {
    const itemForRemove = this.column.items.find(i => {
      return i.id === item.id;
    });
    const itemForRemoveIndex = this.column.items.indexOf(itemForRemove);

    this.column.items.splice(itemForRemoveIndex, 1);
    this.editColumn.emit(this.column);
  }
}

