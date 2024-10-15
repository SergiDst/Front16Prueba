import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPrincipalComponent } from './comp-header-principal/header-principal.component';
import { SectionLogoComponent } from './comp-section-logo/section-logo.component';
import { AutenticacionModule } from './moduloAutenticacion/autenticacion.module';
import { ModuloEmpleadoModule } from './modulo-empleado/modulo-empleado.module';
import { CompLoginComponent } from './comp-login/comp-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPrincipalComponent,
    SectionLogoComponent,
    CompLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutenticacionModule,
    ModuloEmpleadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
