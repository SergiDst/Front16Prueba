import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaEmpleadoComponent } from './modulo-empleado/pagina-empleado/pagina-empleado.component';
import { CompLoginComponent } from './comp-login/comp-login.component';

const routes: Routes = [
  {path: 'gestionProductos', component: PaginaEmpleadoComponent},
  {path: '', component: CompLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
