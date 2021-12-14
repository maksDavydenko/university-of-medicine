const searhcBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

searhcBtn.addEventListener('click', () => {
    searchInput.style.display === 'block' ?
        searchInput.style.display = 'none' :
        searchInput.style.display = 'block'
});