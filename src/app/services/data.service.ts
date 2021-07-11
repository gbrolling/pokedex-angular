import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'https://pokeapi.co/api/v2';
  public pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  getPokemon() {
    return this.http.get(`${this.url}/pokemon?limit=151`);
  }

  getSpecificPokemon(pokUrl) {
    return this.http.get(pokUrl);
  }

  getPokemonDescription(pokUrl) {
    return this.http.get(pokUrl);
  }

  getPokemonDescriptionTest(pokName) {
    return this.http.get(`${this.url}/pokemon-species/${pokName}`);
  }
}
