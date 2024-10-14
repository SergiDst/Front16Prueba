import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHeaderGestionComponent } from './comp-header-gestion.component';

describe('CompHeaderGestionComponent', () => {
  let component: CompHeaderGestionComponent;
  let fixture: ComponentFixture<CompHeaderGestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompHeaderGestionComponent]
    });
    fixture = TestBed.createComponent(CompHeaderGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
