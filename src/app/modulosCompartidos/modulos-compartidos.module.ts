import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CompHeaderGestionComponent } from './comp-header-gestion/comp-header-gestion.component';
import { CompBtnCRUDComponent } from './comp-btn-crud/comp-btn-crud.component';
import { CompCardStockComponent } from './comp-card-stock/comp-card-stock.component';
import { CompBarraBusquedaComponent } from './comp-barra-busqueda/comp-barra-busqueda.component';
import { CompBtnCodigoBarrasComponent } from './comp-btn-codigo-barras/comp-btn-codigo-barras.component';



@NgModule({
  declarations: [
    CompHeaderGestionComponent,
    CompBtnCRUDComponent,
    CompCardStockComponent,
    CompBarraBusquedaComponent,
    CompBtnCodigoBarrasComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CompHeaderGestionComponent,
    CompBarraBusquedaComponent,
    CompBtnCRUDComponent,
    CompBtnCodigoBarrasComponent,
    CompCardStockComponent
  ]
})
export class ModulosCompartidosModule { }
