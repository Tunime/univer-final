
window.onload = function() {
var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split ("&");
var params = {};
for ( var i = 0; i < paramarr.length; i++) {
    var tmparr = paramarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
}
var busqueda=params['variable']
if (params['variable']) {
   console.log('El paramtro fue enviado');
} else {
   console.log('No se a enviado la palabra de busqueda');
}
var univer=busqueda[0];
for ( var j = 1; j < busqueda.length; j++) {
    if(busqueda[j]=='%'){
        j=j+3;
        univer=univer+' ';
    }
    univer=univer+busqueda[j];
}
busqueda=univer;
console.log(busqueda);

$.getJSON( "js/main.json", function( data ) {
     $("#contenido-a").append('<h3 class="titulo--resultado">'+busqueda+'</h3>'); 
  var items = [];
  $.each( data.libros, function( key, value ) {
        if(busqueda==value['tipo']||busqueda==value['titulo']||busqueda==value['carrera']||busqueda==value['curso']||busqueda==value['univercidad']){
            if(value['tipo']=='Examen')
            {
                URLimagen="./img/rojo.png"
            }
            if(value['tipo']=='silabus'){
                URLimagen="./img/amarillo.png"
            }
            if(value['tipo']=='practica'){
                URLimagen="./img/purpura.png"
            }
            if(value['tipo']=='trabajo'){
                URLimagen="./img/verde.png"
            }
            $("#contenido-a").append( '<a href="'+value['url']+'" title="card" class="contenido--card"><figure class="card--img"><img src="'+URLimagen+'" alt="Fondo"></figure><div class="card--dato"><h5>'+value['titulo']+'</h5><li>'+value['carrera']+'</li><li>'+value['curso']+'</li><i>'+value['fecha']+'</i><li>'+value['univercidad']+'</li></div></a>');
        }
  });
}); 

};
