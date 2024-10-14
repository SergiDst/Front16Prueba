import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBarraBusquedaComponent } from './comp-barra-busqueda.component';

describe('CompBarraBusquedaComponent', () => {
  let component: CompBarraBusquedaComponent;
  let fixture: ComponentFixture<CompBarraBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompBarraBusquedaComponent]
    });
    fixture = TestBed.createComponent(CompBarraBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
