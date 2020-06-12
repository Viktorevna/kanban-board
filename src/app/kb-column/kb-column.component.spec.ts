import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbColumnComponent } from './kb-column.component';

describe('KbColumnComponent', () => {
  let component: KbColumnComponent;
  let fixture: ComponentFixture<KbColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
