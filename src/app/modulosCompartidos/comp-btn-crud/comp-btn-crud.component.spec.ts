import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBtnCRUDComponent } from './comp-btn-crud.component';

describe('CompBtnCRUDComponent', () => {
  let component: CompBtnCRUDComponent;
  let fixture: ComponentFixture<CompBtnCRUDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompBtnCRUDComponent]
    });
    fixture = TestBed.createComponent(CompBtnCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
