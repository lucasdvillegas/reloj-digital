const mostrarReloj = ()=>{
    let fecha = new Date();
    let hour = formatoHora(fecha.getHours());
    let minutes = formatoHora(fecha.getMinutes());
    let seconds = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hour}:${minutes}:${seconds}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let diaSemanal = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    
    document.getElementById('fecha').innerHTML = `${diaSemanal}, ${dia} ${mes}`;
}

const formatoHora = (hora) =>{
    if( hora < 10 ){
        hora = '0'+ hora;
    }
    return hora;
}

setInterval(mostrarReloj, 1500);