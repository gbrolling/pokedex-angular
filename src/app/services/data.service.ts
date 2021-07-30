import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonTeste(generation){
    return this.http.get(`${this.url}/generation/${generation}`);
  }

  getSpecificPokemon(pokName) {
    return this.http.get(`${this.url}/pokemon/${pokName}`);
  }

  getPokemonDescription(number) {
    return this.http.get(`${this.url}/pokemon-species/${number}`);
  }

}
