import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', function() {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });

    this.fixture = TestBed.createComponent(AppComponent);
    this.de = this.fixture.debugElement;
    this.component = this.fixture.componentInstance;
  });

  it('должен инициализировать приложение', () => {
    expect(this.component).toBeTruthy();
  });
});
