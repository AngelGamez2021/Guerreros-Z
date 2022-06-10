import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.css']
})
export class PersonajesListComponent {

  // @Input() guerreros: Personaje[] = []

  constructor(private _dbzService: DbzService) { }

  get personajes(){
    return this._dbzService.personajes;
  }

}
