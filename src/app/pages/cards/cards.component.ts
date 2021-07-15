import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonPopupComponent } from '../pokemon-popup/pokemon-popup.component';
import { forkJoin } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public pokemonsDetails: any[];
  public loading: boolean = true;
  public isDataAvailable: boolean = false;

  constructor(private pokemonService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
   this.pokemonService.getPokemon().subscribe((response: any) => {
      response.results.forEach((pokemon) => {
        this.pokemonService
          .getSpecificPokemon(pokemon.url)
          .subscribe((uniqResponse: any) => {
            this.loading = true;
            this.pokemons[uniqResponse.id] = {
              image: uniqResponse.sprites,
              number: uniqResponse.id,
              name:
                uniqResponse.name.charAt(0).toUpperCase() +
                uniqResponse.name.slice(1),
              type: uniqResponse.types.map((typeName) => typeName.type.name),
              height: uniqResponse.height,
              weight: uniqResponse.weight,
              ability: uniqResponse.abilities.map(
                (abilityName) => abilityName.ability.name
              ),
              stats: uniqResponse.stats,
              species: uniqResponse.species,
            };
          if(this.pokemons.length > 151) this.loading = false;
          });
      });
    });
    this.isDataAvailable = true;
  }

  openPokemon(pokemon) {
    this.pokemonsDetails = [];
    this.pokemonService.getPokemonDescription(pokemon.number).subscribe((pokeDetail: any) =>{
      this.pokemonsDetails = pokeDetail;
      const dialogRef = this.dialog.open(PokemonPopupComponent, {
        width: '800px',
        height: '800px',
        data: { pokemon: pokemon, pokemonDescription: this.pokemonsDetails},
      });
    })
  }



}
