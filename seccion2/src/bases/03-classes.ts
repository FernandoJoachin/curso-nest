import axios from "axios";
import { PokeapiResponse, Move } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    constructor(
        public readonly id : number, 
        public name : string,
    ){}

    get imageUrl() : string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    public scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    public speak(){
        console.log(`${this.name}, ${this.name}`);
    }

    public async getMoves() : Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        return data.moves;
    }
}

export const squirtle  = new Pokemon(7, 'Squirtle');