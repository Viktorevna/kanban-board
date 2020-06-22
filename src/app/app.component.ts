import { Component, OnInit, Inject } from '@angular/core';
import locale from './app.i18n';
import { Column, ICON_NAMES } from 'src/app/_models/columns.models';
import { ColumnsService } from 'src/app/_services/columns.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  locale = locale;
  iconNames = ICON_NAMES;
  columns: Array<Column> = [];
  templates: Array<Array<Column>>;

  constructor(
    @Inject(ColumnsService) private columnsService
  ) {
  }

  /**
   * Инициализация компонента
   */
  ngOnInit() {
    this.columns = this.columnsService.getColumns();
    this.templates = this.columnsService.getTemplates();
  }

  /**
   * Добавление колонки
   */
  addNewColumn() {
    const column = new Column();
    this.columnsService.addColumn(column);
  }

  /**
   * Редактирование колонки
   */
  editColumn(column: Column): void {
    this.columnsService.editColumn(column);
    this.columns = this.columnsService.getColumns();
  }

  /**
   * Удаление колонки
   */
  removeColumn(column: Column): void {
    this.columnsService.removeColumn(column);
    this.columns = this.columnsService.getColumns();
  }

  /**
   * Удаление всех колонок
   */
  removeAllColumns() {
    this.columnsService.removeAllColumns();
    this.columns = this.columnsService.getColumns();
  }

  /**
   * Очистить все
   */
  clearAll() {
    this.columnsService.clearAll();
    this.columns = this.columnsService.getColumns();
    this.templates = this.columnsService.getTemplates();
  }

  /**
   * Сохранить шаблон
   */
  saveTemplate() {
    this.columnsService.saveTemplate(this.columns);
    this.templates = this.columnsService.getTemplates();
  }

  /**
   * Создать доску по шаблону
   */
  generateBoardFromTemplate(templateId: number) {
    this.columnsService.generateFromTemplate(templateId);
    this.columns = this.columnsService.getColumns();
  }
}
