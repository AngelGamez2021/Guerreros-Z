import { Component } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  constructor(
    // private _DbzServices: DbzService
    )
   {
    // this.personajes = this._DbzServices.personajes;
  }

  // personajes: Personaje[] = []


  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }


  // agregarNuevoPersonaje(argumnto: Personaje) {
  //   this.personajes.push(argumnto)
  // }




}
