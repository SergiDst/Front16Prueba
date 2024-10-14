import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaEmpleadoComponent } from './modulo-empleado/pagina-empleado/pagina-empleado.component';

const routes: Routes = [
  {path: 'gestionProductos', component: PaginaEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
