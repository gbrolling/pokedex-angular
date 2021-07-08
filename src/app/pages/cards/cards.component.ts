import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonPopupComponent } from '../pokemon-popup/pokemon-popup.component';
import { PokemonDescription } from 'src/app/models/pokemon.description.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public pokemonsDescription: PokemonDescription[] = [];

  constructor(private pokemonService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((response: any) => {
      response.results.forEach((pokemon) => {
        this.pokemonService
          .getSpecificPokemon(pokemon.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons[uniqResponse.id] = {
              image: uniqResponse.sprites.other.dream_world.front_default,
              number: uniqResponse.id,
              name:
                uniqResponse.name.charAt(0).toUpperCase() +
                uniqResponse.name.slice(1),
              type: uniqResponse.types.map((typeName) => typeName.type.name),
              height: uniqResponse.height,
              ability: uniqResponse.abilities.map(
                (abilityName) => abilityName.ability.name
              ),
              stats: uniqResponse.stats,
            };
          });
      });
    });
  }

  /*   description: uniqResponse.species.getPokemonDescription(uniqResponse.name).map((description) => description.flavor_text_entries.flavor_text),
   */
  openPokemon(pokemon) {
    const dialogRef = this.dialog.open(PokemonPopupComponent, {
      width: '500px',
      height: '500px',
      data: pokemon,
    });

   /*  this.pokemonService
      .getPokemonDescription(pokemon.number)
      .subscribe((uniqResponse: any) => {
        this.pokemons[uniqResponse.number] = {
          description: uniqResponse.flavor_text_entries.map((flavorText) => {
            if (flavorText.language.name === 'en') {
              flavorText.flavor_text[0];
            }
          }),
        };
      });
    console.log(this.pokemonsDescription);
  } */
}
}
