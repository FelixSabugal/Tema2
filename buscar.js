function searchText() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const content = document.getElementById('content');
    const results = document.getElementById('search-results');

    // Limpia los resultados anteriores (eliminando los resaltados)
    content.innerHTML = content.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
    results.textContent = '';

    if (input === '') {
        results.textContent = 'Por favor, introduce un término de búsqueda.';
        return;
    }

    // Selecciona solo los elementos p, h1, h2, h3 dentro de content
    const elements = content.querySelectorAll('p, h1, h2, h3');
    let matches = [];

    // Recorre cada elemento y busca coincidencias solo en el texto visible
    elements.forEach(el => {
        const textContent = el.textContent.toLowerCase(); // Solo se toma el texto visible
        const regex = new RegExp(input, 'gi');
        const match = textContent.match(regex);

        if (match) {
            // Resalta las coincidencias dentro de este elemento
            el.innerHTML = el.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
            matches = matches.concat(match);
        }
    });

    // Muestra los resultados
// Muestra los resultados
if (matches.length > 0) {
    results.textContent = `${matches.length} resultado(s) encontrado(s).`;
    results.style.color = 'blue';  // Cambia el color a azul si hay coincidencias
} else {
    results.textContent = 'No se encontraron coincidencias.';
    results.style.color = 'black'; // Cambia el color a negro si no hay coincidencias
}

}
