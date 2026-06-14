
// async function getData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

//     let data = await response.json();
//     console.log(data)                   // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
// }

// getData()



const myHeader = new Headers();
myHeader.append("Content_type","application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method : "POST",
    body:JSON.stringify({username:"sami syed"}),
    headers:myHeader
};

async function getData(){
    const response = await fetch(url);
    let data = await response.json();
    console.log('Get data response: ',data);              // My data:  {id: 101}
}

async function postData(){
    const response = await fetch(url,options);
    let data = await response.json();
    console.log('My data: ',data);              // My data:  {id: 101}
}

async function processData(){
    await postData();
    await getData();
}