// Generar interacción de botón "Ver imágenes" y de selección de una de estas
import Personajes from "./consulta.js";
document.getElementById("buttonImages").addEventListener("click", async () => { // Necesitamos obtener el atributo "personajes" del archivo .json
    const {personajes} = await Personajes.getData(); // De-structuring; se espera resultado de promesa
    console.log(personajes);
    const pj = document.getElementById("nombre").value; // Constante "pj". Obtiene el nombre seleccionado por el usuario, por ende, todas las imágenes.
    const imagenesPjTemplate = personajes.find((p) => p.name == pj) // Encuentra el objeto (personaje)
    .imagenes.map((i) => `<img width="200" src="assets/img/${pj}/${i}"/>`) // Encuentra las imágenes del objeto, y se prepara una variable de String con etiquetas de imágenes concatenadas. La "i" es el nombre de la imagen
    .join(""); // Método join, transforma un arreglo en String, definiendo un separador

    // Colocar las imágenes dentro de la ventana modal, manipulación de DOM
    document.getElementsByClassName(
        "personajes" // div con la clase "personajes"
        )[0].innerHTML = imagenesPjTemplate; // Sobreescribir valor
        // Interacción de click, al seleccionar una imagen, esta pasa a la previsualización
        document.querySelectorAll(".personajes img").forEach(i => { // querySelectorAll, a todas las imágenes
            i.addEventListener("click", (e) => {
                $("#imagenesModal").modal("toggle"); // jQuery para cerrar ventana modal
                const imagenSrc = e.target.src; // "e" evento; atributo src de la imagen que se está dando click
                document.getElementById(
                    "preview" // div con id "preview"
                ).style.backgroundImage = `url(${imagenSrc})`; // se reemplaza el color de fondo con una imagen seleccionada
            });
        });
});

// innerHTML da un nuevo valor, sobreescribiendo el anterior.
