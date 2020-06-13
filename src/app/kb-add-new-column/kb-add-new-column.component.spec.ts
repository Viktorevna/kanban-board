import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbAddNewColumnComponent } from './kb-add-new-column.component';

describe('KbAddNewColumnComponent', () => {
  let component: KbAddNewColumnComponent;
  let fixture: ComponentFixture<KbAddNewColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbAddNewColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbAddNewColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
