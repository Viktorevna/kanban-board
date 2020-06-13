import { Component } from '@angular/core';
import locale from './column-title.i18n';
import { ICON_NAMES } from '../_models/app.models';

@Component({
  selector: 'column-title',
  templateUrl: './column-title.component.html',
  styleUrls: ['./column-title.component.scss']
})
export class ColumnTitleComponent {
  locale = locale;
  iconNames = ICON_NAMES;

  constructor() { }
}

