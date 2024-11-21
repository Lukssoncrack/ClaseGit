let urlParams = new URLSearchParams(window.location.search);
let searchTerm = urlParams.get('buscador'); 

let searchTermElement = document.getElementById('search-term');
searchTermElement.textContent = `Resultados de búsqueda para: "${searchTerm}"`;

function searchRecipes() {
    fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            let results = data.recipes;
            displayResults(results);
        })
        .catch(error => {
            console.error('Error al realizar la búsqueda:', error);
            let resultsContainer = document.getElementById('search-results');
            resultsContainer.innerHTML = '<p>Error al cargar los resultados de búsqueda.</p>';
        });
}
function displayResults(results) {
    let resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; 

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
    } else {
        results.forEach(recipe => {
            ;
        });
    }
}


searchRecipes();


