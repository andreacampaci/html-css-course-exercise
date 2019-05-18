
let a = 0;
setTimeout(() => {
    a = "foo";
    console.log(a);
}, 1000);

console.log(a);

class Ragno {
    tipo;
    zampe;
    colore;

    constructor(tipo, zampe, colore) {
        this.tipo = tipo;
        this.zampe = zampe;
        this.colore = colore;
    }

    messaggio() {
        return `Sono un ${this.tipo} di colore ${this.colore} e ho ${this.zampe} zampe`;
    }
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ragnoBE = {
            "colore": "nero",
            "zampe": 8,
            "tipo": "animale"
        };
        resolve(ragnoBE);
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const animaliBE = {
            "colore": "nero",
            "zampe": 4,
            "tipo": "mammifero"
        };
        resolve(animaliBE);
    }, 1000);
});


Promise.all([promise1, promise2]).then((data) => {
    const ragno = new Ragno(data[0].tipo, data[0].zampe, data[0].colore);
    document.querySelector("#spinner").remove();
    document.querySelector("#titolo-ragno").textContent = "Ragno";
    document.querySelector("#testo-ragno").textContent = ragno.messaggio();
    const animale = new Ragno(data[1].tipo, data[1].zampe, data[1].colore);
    document.querySelector("#titolo-animale").textContent = "Animale";
    document.querySelector("#testo-animale").textContent = animale.messaggio();
});
/*

promise1.then((data) => {
    const ragno = new Ragno(data.tipo, data.zampe, data.colore);
    document.querySelector("#spinner").remove();
    document.querySelector("#titolo-ragno").textContent = "Ragno";
    document.querySelector("#testo-ragno").textContent = ragno.messaggio();
});

promise2.then((data) => {
    const ragno = new Ragno(data.tipo, data.zampe, data.colore);
    document.querySelector("#titolo-animale").textContent = "Animale";
    document.querySelector("#testo-animale").textContent = ragno.messaggio();
});

*/

async function pippo() {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve([{id: 1}, {id: 2}]), 5000)
    });

    const listPeople = await promise1;
    console.log('A');

    let promise2 = new Promise((resolve, reject) => {
        console.log(listPeople[0].id);
        setTimeout(() => resolve({name: "Andrea"}), 8000)
    });

    const andreaData = await promise2;
    console.log('B');


    return andreaData;
}

pippo().then((data) => {
    console.log(data);
});


fetch("./text.json").then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
    console.log(res.status, res.data)
}));