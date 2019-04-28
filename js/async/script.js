// Promise
console.log('Promise');
const aPromise = new Promise(function(resolve, reject) {
    for (let i = 0; i <= 10; i++) {
        if (i === 10) {
            resolve(i);
        }
    }
});

aPromise.then((data) => {
    console.log(data);
})

// Let
console.log('Promise - setTimeout');
let a = 0;
for (let i = 0; i <= 10; i++) {
    if (i === 10) {
        setTimeout(() => {
            a = i;
            console.log(a);
        }, 100);
    }
}
console.log(a);

// Promise - setTimeout
console.log('Promise - setTimeout');
const promise1 = new Promise((resolve, reject) => {
    for (let i = 0; i <= 10; i++) {
        if (i === 10) {
            setTimeout(resolve, 100, i);
        }
    }
});

promise1.then((data) => {
    console.log(data);
})

// Promise ALL / RACE
console.log('Promise ALL / RACE');
const promiseA = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'a');
});
const promiseB = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'b');
});

/*
promiseA.then((data) => {
    console.log(data);
});

promiseB.then((data) => {
    console.log(data);
});*/

Promise.all([promiseA, promiseB])
    .then((data) => {
        console.log(data);
    });

// THEN THEN THEN
console.log('THEN THEN THEN');
const promiseC = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'a');
});

promiseC.then((data) => {
   return data + '1';
}).then((data) => {
    return data + '1';
}).then((data) => {
    return data + '1';
}).then((data) => {
    console.log(data);
})

// async - await
console.log('ASYNC');
async function f() {
    return 1;
}

f().then((data) => {
    console.log('ASYNC ' + data);
});

async function f1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 8000)
    });

    return await promise;
}
f1().then((data) => {
    console.log(data);
});
