import { TestBed } from '@angular/core/testing';
import { ColumnComponent } from './column.component';
import { AppService } from '../_services/app.service';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ColumnComponent', function() {
  beforeEach(() => {
    @Component({
      template: `
          <column
            [column]="column"
            (editColumn)="editColumn()"
          >
          </column>`
    })
    class TestColumnComponent {
      column = {
        items: []
      };
      editColumn() {}
    }

    TestBed.configureTestingModule({
      declarations: [
        TestColumnComponent,
        ColumnComponent
      ],
      providers: [
        {
          provide: AppService,
          useValue: {
            editColumn: jasmine.createSpy().and.callThrough()
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    this.fixture = TestBed.createComponent(TestColumnComponent);
    this.testComponent = this.fixture.componentInstance;
    this.de = this.fixture.debugElement;
    this.component = this.de.query(By.css('column')).componentInstance;
    this.fixture.detectChanges();

    this.appService = TestBed.get(AppService);
  });

  it('должен добавлять карточку в колонку и вызывать функцию редактирования карточки', () => {
    this.component.addItem();

    expect(this.component.column.items.length).toBe(1);
    expect(this.appService.editColumn).toHaveBeenCalledWith(this.component.column);
  });

  it('должен заменять отредактированную карточку в массиве карточек и эмитить событие редактирования колонки', () => {
    spyOn(this.component.editColumn, 'emit').and.callThrough();

    const column = {
      items: [
        {
          id: 0,
          title: 'title'
        },
        {
          id: 1,
          title: 'title'
        }
      ]
    };
    const newItem = {
      id: 0,
      title: 'newTitle'
    };

    this.testComponent.column = column;
    this.fixture.detectChanges();
    this.component.editItem(newItem);

    expect(this.component.column.items[0]).toEqual(newItem);
    expect(this.component.editColumn.emit).toHaveBeenCalledWith(this.component.column);
  });

  it('должен удалять карточку из массива карточек и эмитить событие редактированиия колонки', () => {
    spyOn(this.component.editColumn, 'emit').and.callThrough();

    const column = {
      items: [
        {
          id: 0,
          title: 'title'
        },
        {
          id: 1,
          title: 'title'
        }
      ]
    };
    const itemForRemove = column.items[0];
    const columnWithoutItemForRemove = {
      items: [
        {
          id: 1,
          title: 'title'
        }
      ]
    };

    this.testComponent.column = column;
    this.fixture.detectChanges();
    this.component.removeItem(itemForRemove);

    expect(this.component.column).toEqual(columnWithoutItemForRemove);
    expect(this.component.editColumn.emit).toHaveBeenCalledWith(this.component.column);
  });
});
