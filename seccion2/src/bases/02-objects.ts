interface Pokemon {
    id : number;
    name : string;
    type : string;
}

export const bulbasaur : Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass'
};

export const charmander : Pokemon = {
    id: 4,
    name: 'Charmander',
    type: 'Fire'
}

export const pokemons : Pokemon[] = [];

pokemons.push(bulbasaur, charmander);

console.log(pokemons)