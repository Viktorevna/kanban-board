import { Injectable } from '@angular/core';
import { Column } from 'src/app/_models/app.models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  columns: Array<Column> = [];
  templates: Array<Array<Column>> = [];

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
    console.log(this.columns);

    localStorage.setItem('columns', JSON.stringify(this.columns));
  }

  /**
   * Удаление всех колонок
   */
  removeAllColumns(): void {
    this.columns = [];

    localStorage.setItem('columns', JSON.stringify(this.columns));
  }

  /**
   * Очистить все
   */
  clearAll() {
    localStorage.clear();
  }

  /**
   * Получение всех шаблонов
   */
  getTemplates(): Array<Array<Column>> {
    this.templates = JSON.parse(localStorage.getItem('templates')) || [];

    return this.templates;
  }

  /**
   * Сохранение шаблона
   */
  saveTemplate(columns: Array<Column>): void {
    this.templates.push(columns);

    localStorage.setItem('templates', JSON.stringify(this.templates));
  }

  /**
   * Создание доски по шаблону
   */
  generateFromTemplate(templateId: number): void {
    this.templates = JSON.parse(localStorage.getItem('templates'));
    this.columns = this.templates[templateId];

    localStorage.setItem('columns', JSON.stringify(this.columns));
  }
}
