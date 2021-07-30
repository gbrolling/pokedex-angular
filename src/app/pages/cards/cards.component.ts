import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonPopupComponent } from '../pokemon-popup/pokemon-popup.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public pokemonsDetails: any[];
  public inputPokemonName: string;
  public loading: boolean = false;
  public pokemonActualGen: number;

  public types: any[] = [
    { id: '', name: 'All' },
    { id: 'bug', name: 'Bug' },
    { id: 'dark', name: 'Dark' },
    { id: 'dragon', name: 'Dragon' },
    { id: 'electric', name: 'Electric' },
    { id: 'fairy', name: 'Fairy' },
    { id: 'fire', name: 'Fire' },
    { id: 'fighting', name: 'Fighting' },
    { id: 'flying', name: 'Flying' },
    { id: 'grass', name: 'Grass' },
    { id: 'ghost', name: 'Ghost' },
    { id: 'ground', name: 'Ground' },
    { id: 'ice', name: 'Ice' },
    { id: 'normal', name: 'Normal' },
    { id: 'water', name: 'Water' },
    { id: 'poison', name: 'Poison' },
    { id: 'psychic', name: 'Psychic' },
    { id: 'rock', name: 'Rock' },
    { id: 'steel', name: 'Steel' },
  ];
  inputPokemonType = '';

  constructor(private pokemonService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
  }


  pokemonGenerationList(inputPokemonGeneration) {
    if(this.pokemonActualGen !== inputPokemonGeneration){
    this.pokemonActualGen = inputPokemonGeneration;
    this.resetAllPokemon();
    this.loading = true;
    this.pokemonService.getPokemonTeste(this.pokemonActualGen).subscribe(
      (response: any) => {
        response.pokemon_species.forEach((pokemon) => {
          this.pokemonService
            .getSpecificPokemon(pokemon.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons[uniqResponse.id] = {
                image: uniqResponse.sprites,
                number: uniqResponse.id,
                name: this.upperCase(uniqResponse.name),
                type: uniqResponse.types.map((typeName) => typeName.type.name),
                height: uniqResponse.height,
                weight: uniqResponse.weight,
                ability: uniqResponse.abilities.map(
                  (abilityName) => abilityName.ability.name
                ),
                stats: uniqResponse.stats,
                species: uniqResponse.species,
              };
            });
        });
      },
      (error: any) => error,
      () => {
        setTimeout(() => {
          this.loading = false;
        }, 400);
      }
    );
    }else{

    }
  }

  openPokemon(pokemon) {
    this.pokemonsDetails = [];
    this.pokemonService
      .getPokemonDescription(pokemon.number)
      .subscribe((pokeDetail: any) => {
        this.pokemonsDetails = pokeDetail;
        const dialogRef = this.dialog.open(PokemonPopupComponent, {
          width: '800px',
          height: '800px',
          data: { pokemon: pokemon, pokemonDescription: this.pokemonsDetails },
        });
      });
  }


  resetFilter() {
    this.inputPokemonName = '';
    this.inputPokemonType = '';
  }

  resetAllPokemon() {
    this.pokemons = [];
  }

  lowerCase(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  upperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
