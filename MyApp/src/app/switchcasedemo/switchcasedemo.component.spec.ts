import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcasedemoComponent } from './switchcasedemo.component';

describe('SwitchcasedemoComponent', () => {
  let component: SwitchcasedemoComponent;
  let fixture: ComponentFixture<SwitchcasedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchcasedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchcasedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
