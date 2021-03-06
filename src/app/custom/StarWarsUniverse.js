import EventEmitter from 'eventemitter3';
import Species from "./Species";

export default class StarWarsUniverse extends EventEmitter {
    constructor(maxSpecies = 10) {
        super()

        this.species = [];
        this._maxSpecies = maxSpecies
        this.createSpecies();
    }

    static get events() {
        return {
            MAX_SPECIES_REACHED: 'max_species_reached',
            SPECIES_CREATED: 'species_created'
        }
    }

    get speciesCount() {
        return this.species.length;
    }

    async createSpecies() {

        //should fetch the current species

        //create a new instance of the Species class

        await fetch('https://swapi.boom.dev/api/species')
            .then(response => response.json())
            .then(data => {

                data.results.map(i => {
                        let a = new Species(i.name, i.classification, i.url)

                        if (!this.species.find(o => o.name === i.name)) {
                            this.species.push(i);
                        }
                    }

                )
            });

        console.log(this.species)
        console.log(this.speciesCount)
        this.emit(StarWarsUniverse.events.MAX_SPECIES_REACHED);




        // this.emit(Species.events.SPECIES_CREATED);

        // Species.init();




    }
}