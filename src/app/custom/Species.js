import EventEmitter from 'eventemitter3';


export default class Species extends EventEmitter {
    constructor(name = null, classification = null, url) {

        super()

        this.name = name;
        this.classification = classification;
        this.url = url;

        this.init();
    }

    static get events() {
        return {
            SPECIES_CREATED: 'species_created'
        };
    }

    async init(url) {

        // await fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //     });

        this.emit(Species.events.SPECIES_CREATED);

    }
}