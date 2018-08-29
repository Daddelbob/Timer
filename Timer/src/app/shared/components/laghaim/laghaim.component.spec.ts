import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaghaimComponent } from './laghaim.component';

describe('LaghaimComponent', () => {
  let component: LaghaimComponent;
  let fixture: ComponentFixture<LaghaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaghaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaghaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
