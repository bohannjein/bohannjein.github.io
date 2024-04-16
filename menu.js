// JavaScript zum Öffnen und Schließen der Seitenleiste
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');

    sidebar.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});
