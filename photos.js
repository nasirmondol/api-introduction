function loadPhots(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
loadPhots()

function displayPhotos(photos){
    console.log(photos)
    const photosContainer = document.getElementById('photos')
    for(const photo of photos){
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${photo.title}</h3>
        `
        photosContainer.appendChild(div)
    }
}

 
