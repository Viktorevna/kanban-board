import { Component, OnInit, Inject } from '@angular/core';
import locale from './app.i18n';
import { Column, ICON_NAMES } from 'src/app/_models/app.models';
import { AppService } from 'src/app/_services/app.service';

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
    @Inject(AppService) private appService
  ) {
  }

  /**
   * Инициализация компонента
   */
  ngOnInit() {
    this.columns = this.appService.getColumns();
    this.templates = this.appService.getTemplates();
  }

  /**
   * Добавление колонки
   */
  addNewColumn() {
    const column = new Column();
    this.appService.addColumn(column);
  }

  /**
   * Редактирование колонки
   */
  editColumn(column: Column): void {
    this.appService.editColumn(column);
    this.columns = this.appService.getColumns();
  }

  /**
   * Удаление колонки
   */
  removeColumn(column: Column): void {
    this.appService.removeColumn(column);
    this.columns = this.appService.getColumns();
  }

  /**
   * Удаление всех колонок
   */
  removeAllColumns() {
    this.appService.removeAllColumns();
    this.columns = this.appService.getColumns();
  }

  /**
   * Очистить все
   */
  clearAll() {
    this.appService.clearAll();
    this.columns = this.appService.getColumns();
    this.templates = this.appService.getTemplates();
  }

  /**
   * Сохранить шаблон
   */
  saveTemplate() {
    this.appService.saveTemplate(this.columns);
    this.templates = this.appService.getTemplates();
  }

  /**
   * Создать доску по шаблону
   */
  generateBoardFromTemplate(templateId: number) {
    this.appService.generateFromTemplate(templateId);
    this.columns = this.appService.getColumns();
  }
}
