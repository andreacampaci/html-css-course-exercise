// ES5
function Persona(colore_capelli) {
    this.capelli = colore_capelli;
    this.alzaLaMano = function () {
        return "Salve!";
    }
}
function Marchio(colore_capelli) {
    Persona.call(this, colore_capelli);
    this.forza = 'si';
    this.intelligenza = 'no';
}
Marchio.prototype = Object.create(Persona.prototype);
Marchio.prototype.constructor = Marchio;

function Femmina(colore_capelli) {
    Persona.call(this, colore_capelli);
    this.forza = 'no';
    this.intelligenza = 'si';
}
Femmina.prototype = Object.create(Persona.prototype);
Femmina.prototype.constructor = Femmina;

var marchio = new Marchio("rossi");
var femmina = new Femmina("blue");
console.log(marchio);
console.log(femmina);

// ES6
class Animale {
    tipo;
    zampe;

    constructor(tipo, zampe) {
        this.tipo = tipo;
        this.zampe = zampe;
    }
}

class Cane extends Animale {

    constructor() {
        super("canide", 4);
    }

    saluto() {
        return "BAU BAU!"
    }
}

class Gatto extends Animale {

    constructor() {
        super("felino", 4);
    }

    saluto() {
        return "MIAO MIAO!"
    }
}

class Ragno extends Animale {
    colore;

    constructor(colore) {
        super("aracnide", 8);
        this.colore = colore;
    }

    saluto() {
        return "CHE SCHIFO!"
    }
}

class VedovaNera extends Ragno {

    constructor() {
        super("nero");
    }

    saluto() {
        return "SCAPPA"
    }

    messaggio() {
        return `Sono un ${this.tipo} di colore ${this.colore} e ho ${this.zampe} zampe`;
    }
}
const cane = new Cane();
const gatto = new Gatto();
const ragno = new Ragno("rosso");
console.log(cane);
console.log(gatto);
console.log(gatto.saluto());
console.log(ragno);
const vedovaNera = new VedovaNera();
console.log(vedovaNera.messaggio());



