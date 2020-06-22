import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import locale from './column-title.i18n';
import { Column, ICON_NAMES } from 'src/app/_models/columns.models';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'column-title',
  templateUrl: './column-title.component.html',
  styleUrls: ['./column-title.component.scss']
})
export class ColumnTitleComponent implements OnInit {
  @Input()
  column: Column;

  @Output()
  editColumnTitle = new EventEmitter<Column>();
  @Output()
  removeColumn = new EventEmitter<Column>();

  locale = locale;
  iconNames = ICON_NAMES;
  isEditable = false;
  formGroup: FormGroup;

  /**
   * Инициализация компонента
   */
  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl(this.column.title)
    });
  }

  /**
   * Наименование кнопки в зависимости от режима редактирования
   */
  get buttonName(): string {
    return this.column.isColumnNew ? locale.AddColumn : locale.ChangeTitle;
  }

  /**
   * Отображается ли форма редактирования
   */
  get isEditFormVisible(): boolean {
    return this.isEditable || this.column.isColumnNew;
  }

  /**
   * Отмена редактирования заголовка колонки
   */
  inputTitleCancel(): void {
    if (this.column.isColumnNew) {
      this.removeColumn.emit(this.column);
    } else {
      this.isEditable = false;
    }
  }

  /**
   * Обработчик клика на заголовок колонки
   */
  onTitleClick(): void {
    this.isEditable = true;
  }

  /**
   * Редактирование заголовка колонки
   */
  editTitle(): void {
    this.column.title = this.formGroup.get('title').value ? this.formGroup.get('title').value : locale.WithoutTitle;
    this.column.isColumnNew = false;
    this.editColumnTitle.emit(this.column);
  }
}

