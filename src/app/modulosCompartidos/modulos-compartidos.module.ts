import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import { CompHeaderGestionComponent } from './comp-header-gestion/comp-header-gestion.component';
import { CompBtnCRUDComponent } from './comp-btn-crud/comp-btn-crud.component';
import { CompCardStockComponent } from './comp-card-stock/comp-card-stock.component';
import { CompBarraBusquedaComponent } from './comp-barra-busqueda/comp-barra-busqueda.component';
import { CompBtnCodigoBarrasComponent } from './comp-btn-codigo-barras/comp-btn-codigo-barras.component';
import { CompSelectoresComponent } from './comp-selectores/comp-selectores.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    CompHeaderGestionComponent,
    CompBtnCRUDComponent,
    CompCardStockComponent,
    CompBarraBusquedaComponent,
    CompBtnCodigoBarrasComponent,
    CompSelectoresComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatBadgeModule,
    NgFor,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    CompHeaderGestionComponent,
    CompBarraBusquedaComponent,
    CompBtnCRUDComponent,
    CompBtnCodigoBarrasComponent,
    CompCardStockComponent,
    CompSelectoresComponent
  ]
})
export class ModulosCompartidosModule { }
