const fila = document.querySelector('.contenedor-carrousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


//Event lisstener flecha Derecha

flechaDerecha.addEventListener('click', () => {
   fila.scrollLeft += fila.offsetWidth;

   const indicadorActivo = document.querySelector('.indicadores .activo');
   if(indicadorActivo.nextSibling){
      indicadorActivo.nextSibling.classList.add('activo');
      indicadorActivo.classList.remove('activo');

   }
});


//Event listener Flecha Izquierda

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
   if(indicadorActivo.previousSibling){
      indicadorActivo.previousSibling.classList.add('activo');
      indicadorActivo.classList.remove('activo');

   }
 });


 //INDICADORES BOTONES

 const numeroPaginas = Math.ceil(peliculas.length / 5);
 for (let i = 0; i < numeroPaginas; i++){
     const indicador = document.createElement('button');

if(i === 0){
    indicador.classList.add('activo');
}

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) =>{
       fila.scrollLeft = i * fila.offsetWidth;  
       
       document.querySelector('.indicadores .activo').classList.remove('activo');
       e.target.classList.add('activo');
    }
    
    );
}

//HOVER

peliculas.forEach((pelicula) => {
   pelicula.addEventListener('mouseenter', (e) => {
       const elemento = e.currentTarget;
       setTimeout(() =>{
           peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
           elemento.classList.add('hover');
       }, 100);
   })
})

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
})