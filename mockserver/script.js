fetch('/authors')
    .then((response) => response.json())
    .then((messages) => {console.log(messages);});
