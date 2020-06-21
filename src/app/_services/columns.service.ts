import { Injectable } from '@angular/core';
import { Column } from 'src/app/_models/columns.models';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {
  columns: Array<Column> = [];

  /**
   * Получение всех колонок
   */
  getColumns(): Array<Column> {
    this.columns = JSON.parse(localStorage.getItem('columns')) || [];

    return this.columns;
  }

  /**
   * Добавление колонки
   */
  addColumn(column: Column): void {
    this.columns.push(column);

    localStorage.setItem('columns', JSON.stringify(this.columns));
  }

  /**
   * Редактирование колонки
   */
  editColumn(column: Column): void {
    const columnForEdit = this.columns.find(c => {
      return c.id === column.id;
    });
    const columnForEditIndex = this.columns.indexOf(columnForEdit);

    this.columns[columnForEditIndex] = column;

    localStorage.setItem('columns', JSON.stringify(this.columns));
  }

  /**
   * Удаление колонки
   */
  removeColumn(column: Column): void {
    const columnForRemove = this.columns.find(c => {
      return c.id === column.id;
    });
    const columnForRemoveIndex = this.columns.indexOf(columnForRemove);

    this.columns.splice(columnForRemoveIndex, 1);

    localStorage.setItem('columns', JSON.stringify(this.columns));
  }

  removeAll() {
    localStorage.clear();
  }
}
