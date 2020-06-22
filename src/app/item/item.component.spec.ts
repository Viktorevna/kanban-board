import { TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import locale from './item.i18n';

describe('ItemComponent', function() {
  beforeEach(() => {
    @Component({
      template: `
        <item
          [item]="item"
          (editItem)="editItem()"
          (removeItem)="removeItem()"
        >
        </item>`
    })
    class TestItemComponent {
      item = {
        isItemNew: false,
        title: 'title'
      };
      editItem() {}
      removeItem() {}
    }

    TestBed.configureTestingModule({
      declarations: [
        TestItemComponent,
        ItemComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    this.fixture = TestBed.createComponent(TestItemComponent);
    this.testComponent = this.fixture.componentInstance;
    this.de = this.fixture.debugElement;
    this.component = this.de.query(By.css('item')).componentInstance;
    this.fixture.detectChanges();
  });

  it('должен возвращать корректное наименование кнопки', () => {
    this.component.isEditable = false;

    expect(this.component.buttonName).toBe(locale.AddItem);

    this.component.isEditable = true;

    expect(this.component.buttonName).toBe(locale.ChangeItem);
  });

  it('должен корректно определять, должна ли отображаться форма редактирования', () => {
    this.component.isEditable = false;
    this.testComponent.item.isItemNew = false;
    this.fixture.detectChanges();

    expect(this.component.isEditFormVisible).toBeFalsy();

    this.component.isEditable = true;

    expect(this.component.isEditFormVisible).toBeTruthy();

    this.testComponent.item.isItemNew = true;
    this.fixture.detectChanges();

    expect(this.component.isEditFormVisible).toBeTruthy();

    this.component.isEditable = false;

    expect(this.component.isEditFormVisible).toBeTruthy();
  });

  it('должен эмитить событие удаления карточки или менять флаг isEditable при отмене редактирования карточки', () => {
    spyOn(this.component.removeItem, 'emit').and.callThrough();
    this.testComponent.item.isItemNew = true;
    this.fixture.detectChanges();
    this.component.inputItemCancel();

    expect(this.component.isEditable).toBeFalsy();
    expect(this.component.removeItem.emit).toHaveBeenCalledWith(this.component.item);

    this.testComponent.item.isItemNew = false;
    this.fixture.detectChanges();
    this.component.inputItemCancel();

    expect(this.component.isEditable).toBeFalsy();
  });

  it('должен менять флаг isEditable при клике на карточку', () => {
    expect(this.component.isEditable).toBeFalsy();

    this.component.onItemClick();

    expect(this.component.isEditable).toBeTruthy();
  });

  it('должен задавать заголовок карточки, менять флаг isItemNew и эмитить событие редатирования карточки', () => {
    spyOn(this.component.editItem, 'emit').and.callThrough();
    this.component.editColumnItem();

    expect(this.component.item.title).toBe(this.component.item.title);
    expect(this.component.item.isItemNew).toBeFalsy();
    expect(this.component.editItem.emit).toHaveBeenCalledWith(this.component.item);
  });
});
