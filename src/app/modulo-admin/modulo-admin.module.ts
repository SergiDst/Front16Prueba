import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaAdminComponent } from './pagina-admin/pagina-admin.component';
import { ModulosCompartidosModule } from '../modulosCompartidos/modulos-compartidos.module';



@NgModule({
  declarations: [
    PaginaAdminComponent
  ],
  imports: [
    CommonModule,
    ModulosCompartidosModule
  ]
})
export class ModuloAdminModule { }
