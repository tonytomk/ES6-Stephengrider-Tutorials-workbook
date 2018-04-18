  // used to make the Ajax request 
  // fetch object/keyword is available in ES 6
  url="https://jsonplaceholder.typicode.com/posts";
fetch(url)
    .then(data=>console.log(data));

// you have to load the response json to get the data 

    url="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(response=>response.json())
        .then(data=>console.log(data));
