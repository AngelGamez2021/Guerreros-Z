import { Injectable } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { 
    console.log('Servicio de DBZ');
      }

     private  _personajes: Personaje[] = [
        {
          nombre: 'Gokú',
          poder: 20000
        },
        {
          nombre: 'Vegeta',
          poder: 18000
        }
      ]

      get personajes(): Personaje[] {
        return [...this._personajes]
      }


      agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje)
      }

       
    
}
