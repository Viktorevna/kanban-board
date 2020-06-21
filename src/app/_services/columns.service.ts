import { Injectable } from '@angular/core';
import { Column } from 'src/app/_models/columns.models';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {
  columns: Array<Column> = [];

  getColumns(): Array<Column> {
    this.columns = JSON.parse(localStorage.getItem('columns')) || [];
    return this.columns;
  }

  addColumn(column: Column): void {
    this.columns.push(column);
    localStorage.setItem('columns', JSON.stringify(this.columns));
  }

  editColumn(column: Column): void {
    const columnForEdit = this.columns.find(c => {
      return c.id === column.id;
    });
    const columnForEditIndex = this.columns.indexOf(columnForEdit);

    this.columns[columnForEditIndex] = column;
    localStorage.setItem('columns', JSON.stringify(this.columns));
  }

  removeColumn() {
    this.columns.pop();
    localStorage.setItem('columns', JSON.stringify(this.columns));
  }

  removeAll() {
    localStorage.clear();
  }
}
