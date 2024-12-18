import{barcelona, roma, paris, londres} from './ciudades.js'

//obtener los elementos del dom (document object moment) arbol de nodos
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//agregar un evento click a cada enlace 
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //remover el activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });

        //agregar active al que corresponda
        this.classList.add('active')

        //obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        //traer la informacion del objecto correspondiente a la eleccion

        //mostrar el contenido en el dom
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        
    });
});

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace];
}