import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppService } from 'src/app/_services/app.service';

describe('AppComponent', function() {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: AppService,
          useValue: {
            getColumns: jasmine.createSpy().and.callFake(() => this.columns),
            getTemplates: jasmine.createSpy().and.callFake(() => this.templates),
            addColumn: jasmine.createSpy().and.callThrough(),
            editColumn: jasmine.createSpy().and.callThrough(),
            removeColumn: jasmine.createSpy().and.callThrough(),
            removeAllColumns: jasmine.createSpy().and.callThrough(),
            clearAll: jasmine.createSpy().and.callThrough(),
            saveTemplate: jasmine.createSpy().and.callThrough(),
            generateFromTemplate: jasmine.createSpy().and.callThrough()
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    this.columns = [
      {
        title: 'title'
      }
    ];
    this.templates = [
      this.columns
    ];

    this.fixture = TestBed.createComponent(AppComponent);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();

    this.appService = TestBed.get(AppService);
  });

  it('должен обновлять список колонок и шаблонов при иннициализации компонента', () => {
    expect(this.appService.getColumns).toHaveBeenCalled();
    expect(this.component.columns).toEqual(this.columns);
    expect(this.appService.getTemplates).toHaveBeenCalled();
    expect(this.component.templates).toEqual(this.templates);
  });

  it('должен вызывать функцию добавления колонки', () => {
    this.component.addNewColumn();

    expect(this.appService.addColumn).toHaveBeenCalled();
  });

  it('должен вызывать функцию редактирования колонки и обновлять список колонок', () => {
    const column = {
      title: 'title'
    };

    this.component.editColumn(column);

    expect(this.appService.editColumn).toHaveBeenCalledWith(column);
    expect(this.appService.getColumns).toHaveBeenCalled();
    expect(this.component.columns).toEqual(this.columns);
  });

  it('должен вызывать функцию удаления колонки и обновлять список колонок', () => {
    const column = {
      title: 'title'
    };

    this.component.removeColumn(column);

    expect(this.appService.removeColumn).toHaveBeenCalledWith(column);
    expect(this.appService.getColumns).toHaveBeenCalled();
    expect(this.component.columns).toEqual(this.columns);
  });

  it('должен вызывать функцию удаления всех колонок и обновлять список колонок', () => {
    this.component.removeAllColumns();

    expect(this.appService.removeAllColumns).toHaveBeenCalled();
    expect(this.appService.getColumns).toHaveBeenCalled();
    expect(this.component.columns).toEqual(this.columns);
  });

  it('должен вызывать функцию очистки localStorage, обновлять список колонок и обновлять список шаблонов', () => {
    this.component.clearAll();

    expect(this.appService.clearAll).toHaveBeenCalled();
    expect(this.appService.getColumns).toHaveBeenCalled();
    expect(this.component.columns).toEqual(this.columns);
    expect(this.appService.getTemplates).toHaveBeenCalled();
    expect(this.component.templates).toEqual(this.templates);
  });

  it('должен вызывать функцию сохранения шаблона и обновлять список шаблонов', () => {
    this.component.saveTemplate();

    expect(this.appService.saveTemplate).toHaveBeenCalled();
    expect(this.appService.getTemplates).toHaveBeenCalled();
    expect(this.component.templates).toEqual(this.templates);
  });

  it('должен вызывать функцию создания доски по шаблону и обновлять список колонок', () => {
    const templateId = 1;

    this.component.generateBoardFromTemplate(templateId);

    expect(this.appService.generateFromTemplate).toHaveBeenCalledWith(templateId);
    expect(this.appService.getColumns).toHaveBeenCalled();
    expect(this.component.columns).toEqual(this.columns);
  });
});
