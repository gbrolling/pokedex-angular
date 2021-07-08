export interface Pokemon{
  image: string;
  number: number;
  name: string;
  type: string;
  height: number;
  ability: string;
  stats: any;
  description?: string;

  //descrição do pokemon
  //versão M/F
  //Altura, Categoria, Peso, Abildiades, Generos disponiveis
  //Tipo
  //Fraco contra
}
