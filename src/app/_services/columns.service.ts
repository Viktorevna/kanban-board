import { Injectable } from '@angular/core';
import { IColumn } from 'src/app/_models/app.models';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {
  getColumns(): Array<IColumn> {
    return JSON.parse(localStorage.getItem('columns')) || [];
  }
}
