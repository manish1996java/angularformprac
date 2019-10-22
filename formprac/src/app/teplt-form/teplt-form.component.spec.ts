import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TepltFormComponent } from './teplt-form.component';

describe('TepltFormComponent', () => {
  let component: TepltFormComponent;
  let fixture: ComponentFixture<TepltFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TepltFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TepltFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
