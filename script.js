let contenedor = document.getElementById("container");
let personajes = {};

const traer_datos = (id)=>{
    fetch("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marca.com%2Fclaro-mx%2Ftrending%2F2021%2F01%2F26%2F600f7fabe2704ed5368b4608.html&psig=AOvVaw2rzwmfaHE2DjucwRt8QTwt&ust=1639496535851000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPihq9iO4fQCFQAAAAAdAAAAABAs"+id)
    .then((response) => response.json())
    .then((data) => {
        personajes = data;
        print();

    })
    .catch((error) => console.log(error))
}

const print = ()=>{
    contenedor.innerHTML = "";
    contenedor.insertAdjacentHTML('beforeend',`
    
    <div class="datos">
        <img class="personaje" src="${personajes.image}">
        <h1>${personajes.name}</h1>
    </div>
    `)
    contenedor.insertAdjacentHTML('beforeend', `
      <center><button id="random">⤨</button></center>
    `)
    let rand_btn = document.getElementById("random")
    rand_btn.addEventListener("click", ()=>{
        traer_datos(aleatorio_entre(1,826));
    })
}

const aleatorio_entre = (min,max)=>{
    return Math.ceil(Math.random()*(max-min)+min);
}

traer_datos(1);