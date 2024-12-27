document.addEventListener('DOMContentLoaded', function(){
    //seleccionar el contenedor del anuncio y el bottón de cierre
    const anuncio = document.getElementById('anuncio');
    const botonCerrar = document.getElementById('cerrar');
    //verificar si se seleccionaron correctamente
    if(anuncio&&botonCerrar) {
        //Agregar el evento de clic al botón para cerrar el anuncio
        botonCerrar.addEventListener('click', function() {
            anuncio.style.display = 'none'  //oculta el anuncio
        });
    } else{
        console.error("El anuncio o el botón de cierre no se encontraton.");
    }
});