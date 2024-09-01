import { HttpAdapter, PokeApiAxiosAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter";
import { PokeapiResponse, Move } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    constructor(
        public readonly id : number, 
        public name : string,
        // Todo: inyectar dependencias
        private http : HttpAdapter
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
        const data = await this.http.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        return data.moves;
    }
}

const pokeApiAxios = new PokeApiAxiosAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const squirtle  = new Pokemon(7, 'Squirtle', pokeApiAxios);
export const blastoise  = new Pokemon(9, 'Blastoise', pokeApiFetch);