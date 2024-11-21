const url = window.location.search;
const urlParams = new URLSearchParams(url);
const recetaId = urlParams.get('id'); // Corregí el nombre de la variable

if (recetaId) {
    fetch(`https://dummyjson.com/recipes/${recetaId}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            mostrarReceta(data);
        })
        .catch(function (error) {
            console.error("Error, no obtuvimos los datos de la receta");
        });
} else {
    console.error("No obtuvimos un id de la receta");
}

function mostrarReceta(receta) {
    const nombreReceta = document.getElementById('nombreReceta'); // Ajusté el id
    nombreReceta.textContent = receta.name;

    const fotoReceta = document.getElementById('fotoReceta'); // Ajusté el id
    fotoReceta.src = receta.image;
    fotoReceta.alt = 'Imagen de ' + receta.name; // Cambié `title` por `name`

    const tiempoCoccion = document.getElementById('tiempoCoccion'); // Ajusté el id
    tiempoCoccion.textContent = receta.cookTimeMinutes || 'No disponible';

    const instruccionesReceta = document.getElementById('instruccionesReceta'); // Ajusté el id
    instruccionesReceta.textContent = receta.instructions || 'No disponible';

    const categoriasReceta = document.getElementById('categoriasReceta'); // Ajusté el id
    categoriasReceta.innerHTML = '';

    receta.categories.forEach(function (categoria) {
        const link = document.createElement('a');
        link.href = `./categories.html?category=` + categoria;
        link.textContent = categoria; // Corregí `categorla` a `categoria`
        categoriasReceta.appendChild(link);
        categoriasReceta.appendChild(document.createTextNode(', '));
    });

    if (categoriasReceta.lastChild) {
        categoriasReceta.removeChild(categoriasReceta.lastChild);
    }
}
    