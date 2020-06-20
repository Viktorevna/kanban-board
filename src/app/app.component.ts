import { Component, OnInit } from '@angular/core';
import locale from './app.i18n';
import { IColumn, ICON_NAMES } from './_models/app.models';
import { ColumnsService } from 'src/app/_services/columns.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  locale = locale;
  iconNames = ICON_NAMES;
  isColumnNew = false;
  columns: Array<IColumn> = [];
  // columns: Array<IColumn> = [
  //   {
  //     title: 'to-do',
  //     items: [
  //       {
  //         title: 'to do sth'
  //       },
  //       {
  //         title: 'to do sth'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'doing',
  //     items: [
  //       {
  //         title: 'to do sth'
  //       },
  //       {
  //         title: 'to do sth'
  //       },
  //       {
  //         title: 'to do sth'
  //       }
  //     ]
  //   }
  // ];

  constructor(
    private columnsService = ColumnsService
  ) {
  }

  ngOnInit() {
    // this.columns = this.columnsService.getColumns();
  }

  addNewColumn() {
    this.isColumnNew = true;
  }

  addingColumnCancel() {
    this.isColumnNew = false;
  }
}
