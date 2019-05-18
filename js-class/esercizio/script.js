function pippo(id) {

    id = (!id) ? "" : id;

    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
           resolve(JSON.parse(this.responseText));
          } else if (this.status == 404) {
              reject('404 Error');
          }
        };
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/"+id, true);
        xhttp.send();
    });
}

pippo().then((data)=> {
    console.log(data);
    return data[0].id;
}).then((id)=> {
    pippo(id)
        .then((data)=> {
            console.log(data);
        });
}).catch((err)=> {
    console.log(err)
});


/*
function pippo1(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            ;
            console.log(JSON.parse(this.responseText));
        }
        };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/"+id, true);
    xhttp.send();
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        ;
        console.log(JSON.parse(this.responseText));
        const a = JSON.parse(this.responseText);
        const id = a[0].id;

        pippo1(id);

      }
    };
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();

*/