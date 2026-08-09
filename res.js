function toggleMenu() {
    const navList = document.getElementById('nav-list');
    const icon = document.querySelector('.mobile-menu-icon');
    
    // Liga/Desliga a visualização do menu
    navList.classList.toggle('active');
    
    // Opcional: Animação básica do ícone hambúrguer (X)
    icon.classList.toggle('open');
}

// Fecha o menu automaticamente ao clicar em um link (útil para mobile)
const links = document.querySelectorAll('.menu a');
links.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-list').classList.remove('active');
    });
});