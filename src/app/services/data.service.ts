import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

  getPokemon() {
    return this.http.get(`${this.url}/pokemon?limit=151`);
  }

  getSpecificPokemon(name) {
    return this.http.get(`${this.url}/pokemon/${name}`);
  }

  getPokemonDescription(name) {
    return this.http.get(`${this.url}/pokemon-species/${name}`);
  }
}
