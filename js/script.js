const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('sidebar-overlay');
const navItems = document.querySelectorAll('.nav-item');
const pageTitle = document.getElementById('page-title');

// Menú alternado
function toggleSidebar() {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Dinamismo en cada item
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');

    const itemText = item.querySelector('span').textContent;
    pageTitle.textContent = itemText;

    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
      toggleSidebar();
    }
  });
});