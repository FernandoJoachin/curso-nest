class NewPokemon {
    constructor(
        public readonly id : number, 
        public name : string,
    ){}

    public scream(){
        console.log('NO QUIERO');
    }

    public speak(){
        console.log('No quiero hablar');
    }
}

const MyDecorator = () => {
    return (target : Function) => {
        return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id : number, 
        public name : string,
    ){}

    public scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    public speak(){
        console.log(`${this.name}, ${this.name}`);
    }
}

export const squirtle  = new Pokemon(7, 'Squirtle');
squirtle.scream();
squirtle.speak();