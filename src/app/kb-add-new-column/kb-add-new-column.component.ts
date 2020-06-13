import { Component } from '@angular/core';
import locale from './kb-add-new-column.i18n';
import { ICON_NAMES } from '../_models/app.models';

@Component({
  selector: 'app-kb-add-new-column',
  templateUrl: './kb-add-new-column.component.html',
  styleUrls: ['./kb-add-new-column.component.scss']
})
export class KbAddNewColumnComponent {
  locale = locale;
  iconNames = ICON_NAMES;

  constructor() { }
}

