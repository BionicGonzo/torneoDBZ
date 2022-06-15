import { Saiyajin, Humano } from "./clases/razas.js";

let participantes = [] // Arreglo vacío como una variable global

// Obtener valores que se registran en el formulario
document.getElementById("btnRegistrar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre");
    let raza = document.getElementById("raza");
    let previewElement = document.getElementById("preview");
    let imagenSrcBg = previewElement.style.backgroundImage; // Dirección imagen del peleador
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2); // Para que obtenga la dirección completa del String del background image
    let ki = document.getElementById("poderPelea");

    let nuevoParticipante;

    if(raza.value == "Saiyajin") {
        nuevoParticipante = new Saiyajin(nombre.value, imgSrc, ki.value, raza.value);
    }

    else if(raza.value == "Humano") {
        nuevoParticipante = new Humano(nombre.value, imgSrc, ki.value, raza.value);
    }

    // IF PARA CONFIRMAR QUE SE INGRESAN TODOS LOS DATOS, SINO, NO REGISTRA EN TABLA
    if(raza.value && nombre.value && ki.value && imagenSrcBg) {
        participantes.push(nuevoParticipante);
        // Al registrar un peleador, formulario vuelve a estado inicial
        nombre.selectedIndex = 0; // "Seleccione un personaje"
        raza.selectedIndex = 0; // "Seleccione una raza"
        previewElement.style.backgroundImage = "none"; // Se elimina la imagen
        imagenSrcBg = previewElement.style.backgroundColor = "#F0F0F0"; // Se reemplaza por color inicial
        ki.value = ""; // Se limpia el campo "Poder de pelea (Ki)"
        reloadTable(); // cada vez que se registre un nuevo participante, la tabla se recargará
    }

    else{
        alert("Faltan datos por llenar.");
    }
});

const reloadTable = () => {
    const participantesTemplate = document.getElementById("Participantes");
    participantesTemplate.innerHTML = ""; // string vacío para limpiar
    participantes.forEach((p, i) => {
        participantesTemplate.innerHTML +=
        `
        <div class="px-3 pb-2 participante" data-fighter="${p.getNombre()}">
            <div class="card">
                <img src="${p.getImg()}" class="card-img-top"/>
            </div>
            <div class="card-body">
                <h4 class="card-title">${p.getNombre()}</h4>
                <hr class="w-50 mx-auto">
                <h6 class="card-text">Raza: ${p.getRaza()}</h6>
                <h6 class="card-text">Poder de pelea: <span class="text-danger">${p.getPoder()}</span></h6>
                <button class="btn btn-outline-warning" onclick="activarHabilidad('${i}')">Habilidad Especial</button>
            </div>
        </div>
        `;
    })
};

// Al trabajar con script tipo módulo, no sirve función ES5 o ES6, no lo reconocerá, el scope es diferente.
// "window" variable global, se añade el método activarHabilidad. La "i" corresponde al índice iteración forEach del arreglo "participantes"
window.activarHabilidad = (i) => {
    const participante = participantes[i]
    if(participante.getRaza() == "Saiyajin") {
        participante.Transformacion();
    }

    else if(participante.getRaza() == "Humano") {
        participante.Coraje();
    }
    reloadTable();
};

// Botón "Más fuerte"
document.getElementById("btnMasFuerte").addEventListener("click", () => {
    const masFuerte = participantes.sort((a, b) => b.getPoder() - a.getPoder())[0]; // Sort es para ordenar elementos dentro de un arreglo. De mayor a menor en este caso. De todos los participantes, el primer elemento del arreglo será el participante con más poder de pelea.
    const nombre = masFuerte.getNombre();
    document.querySelector(`[data-fighter='${nombre}'] div`).style.boxShadow = "0px 0px 5px 1px red"
})