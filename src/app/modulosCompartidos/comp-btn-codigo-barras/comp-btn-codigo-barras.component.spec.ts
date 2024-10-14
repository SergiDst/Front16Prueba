import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBtnCodigoBarrasComponent } from './comp-btn-codigo-barras.component';

describe('CompBtnCodigoBarrasComponent', () => {
  let component: CompBtnCodigoBarrasComponent;
  let fixture: ComponentFixture<CompBtnCodigoBarrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompBtnCodigoBarrasComponent]
    });
    fixture = TestBed.createComponent(CompBtnCodigoBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
