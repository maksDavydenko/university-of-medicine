const searhcBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

const searhcBtnSticky = document.querySelector('#header-sticky .search-btn')
const searchInputSticky = document.querySelector('#header-sticky .search-input');

searhcBtn.addEventListener('click', () => {
    searchInput.style.display === 'block' ?
        searchInput.style.display = 'none' :
        searchInput.style.display = 'block'
});

searhcBtnSticky.addEventListener('click', () => {
    searchInputSticky.style.display === 'block' ?
        searchInputSticky.style.display = 'none' :
        searchInputSticky.style.display = 'block'
});



