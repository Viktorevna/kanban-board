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
  @Input()
  isItemNew: boolean;

  @Output()
  addingItemCancel = new EventEmitter();
  @Output()
  editColumnItem = new EventEmitter<Item>();

  locale = locale;
  isEditable = false;
  iconNames = ICON_NAMES;
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl(this.item.title)
    });
  }

  get buttonName(): string {
    return this.isEditable ? locale.ChangeItem : locale.AddItem;
  }

  onItemClick(): void {
    this.isEditable = true;
  }

  inputItemCancel(): void {
    if (this.item.isItemNew) {
      this.addingItemCancel.emit();
    } else {
      this.isEditable = false;
    }
  }

  editItem(): void {
    this.item.title = this.formGroup.get('title').value ?? locale.WithoutTitle;
    this.item.isItemNew = false;
    this.editColumnItem.emit(this.item);
  }
}
