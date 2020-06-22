import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ICON_NAMES, Item } from 'src/app/_models/columns.models';
import locale from './item.i18n';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  item: Item;

  @Output()
  editColumnItem = new EventEmitter<Item>();
  @Output()
  removeItem = new EventEmitter<Item>();

  locale = locale;
  isEditable = false;
  iconNames = ICON_NAMES;
  formGroup: FormGroup;

  /**
   * Инициализация компонента
   */
  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl(this.item.title),
      description: new FormControl(this.item.description)
    });
  }

  /**
   * Наименования кнопки в зависимости от режима редактирования
   */
  get buttonName(): string {
    return this.isEditable ? locale.ChangeItem : locale.AddItem;
  }

  /**
   * Отображается ли форма редактирования
   */
  get isEditFormVisible(): boolean {
    return this.isEditable || this.item.isItemNew;
  }

  /**
   * Обработчик клика на карточку
   */
  onItemClick(): void {
    this.isEditable = true;
  }

  /**
   * Отмена редактирования карточки
   */
  inputItemCancel(): void {
    if (this.item.isItemNew) {
      this.removeItem.emit(this.item);
    } else {
      this.isEditable = false;
    }
  }

  /**
   * Редактирование карточки
   */
  editItem(): void {
    this.item.title = this.formGroup.get('title').value ? this.formGroup.get('title').value : locale.WithoutTitle;
    this.item.description = this.formGroup.get('description').value;
    this.item.isItemNew = false;
    this.editColumnItem.emit(this.item);
  }
}
