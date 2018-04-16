import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolNavbarComponent } from './vol-navbar.component';

describe('VolNavbarComponent', () => {
  let component: VolNavbarComponent;
  let fixture: ComponentFixture<VolNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
