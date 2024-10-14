import { Component } from '@angular/core';

@Component({
  selector: 'header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.css']
})
export class HeaderPrincipalComponent {
  titulo: string = 'Stock Master Solutions';
  imagen: string = 'infoIcon.svg';
  nombreImagen: string = 'Informacion';
  textoBoton: string = '';
}
