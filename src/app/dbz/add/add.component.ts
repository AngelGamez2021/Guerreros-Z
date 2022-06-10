import { Input, EventEmitter, Component, Output } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {



  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private _dbzService: DbzService) { }


  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  // agregar() {

  //   if (this.nuevo.nombre.trim().length === 0) {return;}

  //   console.log(this.nuevo);
  //   this.onNuevoPersonaje.emit(this.nuevo)

  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0,
  //   }
  // }

  agregar() {

  if (this.nuevo.nombre.trim().length === 0) {return;}

    this._dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    }
  }

}
