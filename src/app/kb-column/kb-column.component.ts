import { Component, OnInit } from '@angular/core';
import locale from './kb-column.i18n';
import { ICON_NAMES } from 'src/app/_models/app.models';

@Component({
  selector: 'kb-column',
  templateUrl: './kb-column.component.html',
  styleUrls: ['./kb-column.component.scss']
})
export class KbColumnComponent implements OnInit {
  locale = locale;
  iconNames = ICON_NAMES;

  constructor() { }

  ngOnInit() {
  }
}
