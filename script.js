document.addEventListener('DOMContentLoaded', function() {
    // Funzione per nascondere tutte le sezioni
    function hideAllSections() {
        document.querySelectorAll('section').forEach(function(section) {
            section.style.display = 'none';
        });
    }

    // Funzione per mostrare una specifica sezione
    function showSection(sectionId) {
        hideAllSections(); // Nasconde tutte le sezioni
        var section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block'; // Mostra solo la sezione desiderata
            window.scrollTo(0, 0); // Scrolling verso l'inizio della pagina
        }
    }

    // Funzione per il caricamento iniziale della pagina
    function loadInitialPage() {
        var hash = window.location.hash.substr(1); // Ottiene l'ID della sezione dalla barra degli indirizzi
        if (hash) {
            showSection(hash); // Mostra la sezione corrispondente all'ID
        } else {
            showSection('home'); // Se non c'è alcun ID nella barra degli indirizzi, mostra la home page
        }
    }

    // Caricamento iniziale della pagina
    loadInitialPage();

    // Gestione dei clic sui link del menu
    document.querySelectorAll('header .buttons button').forEach(function(button) {
        button.addEventListener('click', function() {
            var sectionId = this.getAttribute('onclick').match(/'#(\w+)'/)[1];
            showSection(sectionId);
        });
    });
});
