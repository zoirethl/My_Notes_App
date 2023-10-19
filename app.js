// Array para almacenar las notas
let notas = [];

// Función para crear una nueva nota
function crearNota() {
    const noteText = document.getElementById("noteText").value;

    if (noteText.trim() !== "") {
        // Crear un objeto nota
        const nuevaNota = {
            texto: noteText,
            date: "17 de Octubre",
            id: Date.now() // Usamos la marca de tiempo como identificador único
        };

        // Agregar la nota al array
        notas.push(nuevaNota);

        // Limpiar el cuadro de texto
        document.getElementById("noteText").value = "";

        // Actualizar la lista de notas
        actualizarListaNotas();
    }
}

// Función para eliminar nota
function borrarNota(id) {
    // Filtrar las notas para excluir la que tiene el ID proporcionado
    notas = notas.filter(nota => nota.id !== id);

    // Actualizar la lista de notas
    actualizarListaNotas();
}

// Función para actualizar la lista de notas en la interfaz
function actualizarListaNotas() {
    const noteList = document.getElementById("noteList");

    // Limpiar la lista antes de actualizar
    noteList.innerHTML = "";

    // Iterar sobre todas las notas y agregarlas a la lista
    notas.forEach(nota => {
        
        const listItem = document.createElement("li");
        const span = document.createElement("span");
        const date = document.createElement ("span")
        span.textContent = nota.texto;
        date.textContent = nota.date;

        const button = document.createElement("button");
        button.textContent = "Borrar";
         // Estilos para el boton:
         
         button.style.backgroundColor = "#E0E0E0";
         button.style.border = "none";
         button.style.width = "83px";
         button.style.height = "30px";
         button.style.padding = "4px 16px";
         button.style.borderRadius = "16px";
         button.style.cursor = "pointer";
         // Alinear el botón en la esquina inferior derecha
         button.style.marginLeft= "255px";
         button.style.marginTop = "30px";
                      

        button.addEventListener("click", function () {
            borrarNota(nota.id);
        });

        listItem.appendChild(span);
        listItem.appendChild(button);
        listItem.appendChild(date);
        noteList.appendChild(listItem);
    });
}
