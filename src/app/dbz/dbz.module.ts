import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PersonajesComponent } from './personajes/personajes.component';
import { FormsModule } from '@angular/forms';
import { PersonajesListComponent } from './personajes-list/personajes-list.component';
import { AddComponent } from './add/add.component'; 


import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    PersonajesComponent,
    PersonajesListComponent,
    AddComponent
  ],

  exports: [
    PersonajesComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
