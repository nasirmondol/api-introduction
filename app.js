function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data  => displayUsers(data))
}

// function loadPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayPost(data))
// }

function displayUsers(data){
    const ul = document.getElementById('users')
    for(const user of data){
        const li = document.createElement('li')
        li.innerText = `Name: ${user.name}  Email: ${user.email}`;
        ul.appendChild(li)
    }
}