document.addEventListener('DOMContentLoaded', function() {
    // Funzione per gestire la navigazione interna al sito
    function navigateToSection(sectionId) {
        document.querySelectorAll('section').forEach(function(section) {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';

        // Nascondi il pulsante relativo alla sezione corrente
        var sectionButtons = document.querySelectorAll('.buttons button');
        sectionButtons.forEach(function(button) {
            button.style.display = 'inline-block'; // Mostra tutti i pulsanti
        });

        if (sectionId === 'home') {
            document.getElementById('home-btn').style.display = 'none';
        } else if (sectionId === 'services') {
            document.getElementById('services-btn').style.display = 'none';
        } else if (sectionId === 'about') {
            document.getElementById('about-btn').style.display = 'none';
        } else if (sectionId === 'contact') {
            document.getElementById('contact-btn').style.display = 'none';
        }
    }

    // Gestione del caricamento della pagina
    navigateToSection('home');

    // Gestione dei clic sui link del menu
    document.querySelectorAll('.buttons button').forEach(function(button) {
        button.addEventListener('click', function(event) {
            var sectionId = this.getAttribute('onclick').split("#")[1].split("';")[0];
            navigateToSection(sectionId);
        });
    });
});
