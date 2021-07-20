import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemon() {
    return this.http.get(`${this.url}/pokemon?limit=151`);
  }

  getSpecificPokemon(pokUrl) {
    return this.http.get(pokUrl);
  }

  getPokemonDescription(number) {
    return this.http.get(`${this.url}/pokemon-species/${number}`);
  }

}
