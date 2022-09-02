function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

loadComments();

function displayComments(comments){
    // console.log(comments)
    const commentContainer = document.getElementById('comments')
    for(const comment of comments){
        const div = document.createElement('div')
        div.style.color = 'white'
        div.style.textAlign = 'center';
        div.style.backgroundColor = 'blue';
        div.style.margin = '10px'
        div.style.padding = '10px'
        div.style.borderRadius= '8px'
        div.style.border = '2px solid orange'
        div.innerHTML = `
        <h4>${comment.name}</h4>
        <p>${comment.body}</p>
        `
        commentContainer.appendChild(div)
    }
}