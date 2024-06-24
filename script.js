function openTab(tabId) {
    // Esconde todas as abas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove a classe 'active' de todos os links de aba
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Mostra a aba correspondente ao tabId
    const tabToShow = document.getElementById(tabId);
    tabToShow.classList.add('active');

    // Adiciona a classe 'active' ao link de aba correspondente
    const correspondingTabLink = document.querySelector(`.tab-link[href="#${tabId}"]`);
    correspondingTabLink.classList.add('active');
}
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}