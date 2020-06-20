import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICON_NAMES, IItem } from 'src/app/_models/app.models';
import locale from './item.i18n';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input()
  item: IItem;
  @Input()
  isItemNew: boolean;

  @Output()
  addingItemCancel = new EventEmitter();

  locale = locale;
  isEditable = false;
  iconNames = ICON_NAMES;

  get buttonName(): string {
    return this.isEditable ? locale.ChangeItem : locale.AddItem;
  }

  onItemClick(): void {
    this.isEditable = true;
  }

  inputItemCancel(): void {
    if (this.isItemNew) {
      this.addingItemCancel.emit();
    } else {
      this.isEditable = false;
    }
  }
}
