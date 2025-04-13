function actualizarReloj() {
    const fecha = new Date();
    const horas = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");
    const segundos = fecha.getSeconds().toString().padStart(2, "0");
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const año = fecha.getFullYear();

    let mensaje;
    if (horas >= 0 && horas < 7) mensaje = "Es hora de descansar. Apaga y sigue mañana";
    else if (horas >= 7 && horas < 12) mensaje = "Buenos días, desayuna fuerte y a darle al código";
    else if (horas >= 12 && horas < 14) mensaje = "Echa un rato más pero no olvides comer";
    else if (horas >= 14 && horas < 16) mensaje = "Espero que hayas comido";
    else if (horas >= 16 && horas < 18) mensaje = "Buenas tardes, el último empujón";
    else if (horas >= 18 && horas < 22) mensaje = "Esto ya son horas extras, ... piensa en parar pronto";
    else mensaje = "Buenas noches, es hora de pensar en parar y descansar";

    document.getElementById("reloj").innerHTML = `${dia}/${mes}/${año} - ${horas}:${minutos}:${segundos}<br>${mensaje}`;
}
setInterval(actualizarReloj, 1000);

