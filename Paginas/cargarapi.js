const contenedor = document.getElementById("contenedor");


const cargarPeliculas = async()=>{

    try{
 
     const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1")
     console.log(respuesta);
 
     if(respuesta.status === 200){
 
         const datos = await respuesta.json();
         console.log(datos);
 
         let peliculas = [];
 
         datos.results.forEach(pelicula => {
             peliculas += `
             <div class="card pelicula" style="width: 20rem;">
                 <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title titulos">${pelicula.title} </h5>
                     <p class="card-text descripcion">${pelicula.overview} </p>
                 </div>
             </div>
             `;            
         });
 
         contenedor.innerHTML = peliculas;
 
     }
 
    }
    
    catch(error){
     console.log(error.message);
 
    }
 
 }
 
 cargarPeliculas();