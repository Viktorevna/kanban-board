import {Component, OnInit, Inject} from '@angular/core';
import locale from './app.i18n';
import {Column, ICON_NAMES} from './_models/columns.models';
import { ColumnsService } from 'src/app/_services/columns.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  locale = locale;
  iconNames = ICON_NAMES;
  columns: Array<Column> = [];

  constructor(
    @Inject(ColumnsService) private columnsService
  ) {
  }

  ngOnInit() {
    this.columns = this.columnsService.getColumns();
  }

  addNewColumn() {
    const column = new Column();
    column.isColumnNew = true;
    this.columnsService.addColumn(column);
  }

  addingColumnCancel() {
    this.columnsService.removeColumn();
  }

  editColumn(column: Column): void {

    this.columnsService.editColumn(column);
    this.columns = this.columnsService.getColumns();
  }

  removeAll() {
    this.columnsService.removeAll();
    this.columns = this.columnsService.getColumns();
  }
}
