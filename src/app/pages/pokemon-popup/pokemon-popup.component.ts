import { Component, Inject, Input} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
/* import { Pokemon } from 'src/app/models/pokemon.model'; */



@Component({
  selector: 'app-pokemon-popup',
  templateUrl: './pokemon-popup.component.html',
  styleUrls: ['./pokemon-popup.component.scss']
})
export class PokemonPopupComponent{

  constructor(
    public dialogRef: MatDialogRef<PokemonPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
   ){}

   onNoClick(): void{
     this.dialogRef.close()
    }

    ngOnInit(){
    }

    upperCase(string){
      return string.charAt(0).toUpperCase(0) + string.slice(1);
    }

    returnImage(pokeImage){
      return pokeImage.image.other['official-artwork'].front_default;
    }

}
