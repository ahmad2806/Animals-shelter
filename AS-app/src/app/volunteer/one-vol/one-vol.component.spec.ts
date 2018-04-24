import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneVolComponent } from './one-vol.component';

describe('OneVolComponent', () => {
  let component: OneVolComponent;
  let fixture: ComponentFixture<OneVolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneVolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
