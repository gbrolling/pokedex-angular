import { Component, Inject, Input} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonDescription } from 'src/app/models/pokemon.description.model';



@Component({
  selector: 'app-pokemon-popup',
  templateUrl: './pokemon-popup.component.html',
  styleUrls: ['./pokemon-popup.component.scss']
})
export class PokemonPopupComponent{


  constructor(
    public dialogRef: MatDialogRef<PokemonPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pokemon,
   ){}

   onNoClick(): void{
     this.dialogRef.close()
    }

}
