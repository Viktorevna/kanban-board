import { TestBed } from '@angular/core/testing';
import { ColumnTitleComponent } from './column-title.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import locale from './column-title.i18n';

describe('ColumnTitleComponent', function() {
  beforeEach(() => {
    @Component({
      template: `
        <column-title
          [column]="column"
        >
        </column-title>`
    })
    class TestColumnTitleComponent {
      column = {
        isColumnNew: false,
        items: []
      };
    }

    TestBed.configureTestingModule({
      declarations: [
        TestColumnTitleComponent,
        ColumnTitleComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    this.fixture = TestBed.createComponent(TestColumnTitleComponent);
    this.testComponent = this.fixture.componentInstance;
    this.de = this.fixture.debugElement;
    this.component = this.de.query(By.css('column-title')).componentInstance;
    this.fixture.detectChanges();
  });

  it('должен возвращать корректное наименование кнопки', () => {
    this.testComponent.column.isColumnNew = false;
    this.fixture.detectChanges();

    expect(this.component.buttonName).toBe(locale.ChangeTitle);

    this.testComponent.column.isColumnNew = true;
    this.fixture.detectChanges();

    expect(this.component.buttonName).toBe(locale.AddColumn);
  });

  it('должен корректно определять, должна ли отображаться форма редактирования', () => {
    this.component.isEditable = false;
    this.testComponent.column.isColumnNew = false;
    this.fixture.detectChanges();

    expect(this.component.isEditFormVisible).toBeFalsy();

    this.component.isEditable = true;

    expect(this.component.isEditFormVisible).toBeTruthy();

    this.testComponent.column.isColumnNew = true;
    this.fixture.detectChanges();

    expect(this.component.isEditFormVisible).toBeTruthy();

    this.component.isEditable = false;

    expect(this.component.isEditFormVisible).toBeTruthy();
  });

  it('должен эмитить событие удаления колонки или менять флаг isEditable при отмене редактирования заголовка колонки', () => {
    spyOn(this.component.removeColumn, 'emit').and.callThrough();
    this.testComponent.column.isColumnNew = true;
    this.fixture.detectChanges();
    this.component.inputTitleCancel();

    expect(this.component.isEditable).toBeFalsy();
    expect(this.component.removeColumn.emit).toHaveBeenCalledWith(this.component.column);

    this.testComponent.column.isColumnNew = false;
    this.fixture.detectChanges();
    this.component.inputTitleCancel();

    expect(this.component.isEditable).toBeFalsy();
  });

  it('должен менять флаг isEditable при клике на заголовок колонки', () => {
    expect(this.component.isEditable).toBeFalsy();

    this.component.onTitleClick();

    expect(this.component.isEditable).toBeTruthy();
  });

  it('должен задавать заголовок колонки, менять флаг isColumnNew и эмитить событие редатирования заголовка колонки', () => {
    spyOn(this.component.editColumnTitle, 'emit').and.callThrough();
    this.component.editTitle();

    expect(this.component.column.title).toBe(locale.WithoutTitle);
    expect(this.component.column.isColumnNew).toBeFalsy();
    expect(this.component.editColumnTitle.emit).toHaveBeenCalledWith(this.component.column);
  });
});
