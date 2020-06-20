import { Component, EventEmitter, Input, Output } from '@angular/core';
import locale from './column-title.i18n';
import { ICON_NAMES } from '../_models/app.models';

@Component({
  selector: 'column-title',
  templateUrl: './column-title.component.html',
  styleUrls: ['./column-title.component.scss']
})
export class ColumnTitleComponent {
  @Input()
  columnTitle: string;
  @Input()
  isColumnNew = true;

  @Output()
  addingTitleCancel = new EventEmitter();

  locale = locale;
  iconNames = ICON_NAMES;
  isEditable = false;

  get buttonName(): string {
    return this.isColumnNew ? locale.AddColumn : locale.ChangeTitle;
  }

  inputTitleCancel() {
    if (this.isColumnNew) {
      this.addingTitleCancel.emit();
    } else {
      this.isEditable = false;
    }
  }

  onTitleClick(): void {
    this.isEditable = true;
  }
}

