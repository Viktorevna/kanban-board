import { Component } from '@angular/core';
import locale from './app.i18n';
import { IColumn, ICON_NAMES } from './_models/app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  locale = locale;
  iconNames = ICON_NAMES;
  isColumnNew = false;
  columns: Array<IColumn> = [
    {
      title: 'to-do',
      items: [
        {
          title: 'to do sth'
        },
        {
          title: 'to do sth'
        }
      ]
    },
    {
      title: 'doing',
      items: [
        {
          title: 'to do sth'
        },
        {
          title: 'to do sth'
        },
        {
          title: 'to do sth'
        }
      ]
    }
  ];

  addNewColumn() {
    this.isColumnNew = true;
  }

  addingColumnCancel() {
    this.isColumnNew = false;
  }
}
