import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFormLoginComponent } from './comp-form-login.component';

describe('CompFormLoginComponent', () => {
  let component: CompFormLoginComponent;
  let fixture: ComponentFixture<CompFormLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompFormLoginComponent]
    });
    fixture = TestBed.createComponent(CompFormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
