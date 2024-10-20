import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaEmpleadoComponent } from './modulo-empleado/pagina-empleado/pagina-empleado.component';
import { CompLoginComponent } from './comp-login/comp-login.component';
import { PaginaAdminComponent } from './modulo-admin/pagina-admin/pagina-admin.component';

const routes: Routes = [
  {path: 'gestionProductos', component: PaginaAdminComponent},
  {path: '', component: CompLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
