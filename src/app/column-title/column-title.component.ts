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
  @Input()
  isColumnNew = true;

  @Output()
  addingTitleCancel = new EventEmitter();
  @Output()
  editColumnTitle = new EventEmitter<Column>();

  locale = locale;
  iconNames = ICON_NAMES;
  isEditable = false;
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl(this.column.title)
    });
  }

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

  editTitle(): void {
    this.column.title = this.formGroup.get('title').value ?? locale.WithoutTitle;
    this.column.isColumnNew = false;
    this.editColumnTitle.emit(this.column);
  }
}

