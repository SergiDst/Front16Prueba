import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCardStockComponent } from './comp-card-stock.component';

describe('CompCardStockComponent', () => {
  let component: CompCardStockComponent;
  let fixture: ComponentFixture<CompCardStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompCardStockComponent]
    });
    fixture = TestBed.createComponent(CompCardStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
