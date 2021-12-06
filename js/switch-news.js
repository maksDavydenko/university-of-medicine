const wrap = document.querySelector('.js-news-items')
const buttons = document.querySelector('.checked-news-buttons');


buttons.addEventListener('click', (e) => {
    const btnItem = e.target.closest('button')
    const btnItemValue = btnItem.getAttribute('data-item');

    const buttonsItems = Array.from(buttons.children);
    const newsItems = Array.from(wrap.children);

    buttonsItems.forEach(button => button.classList.remove('checked-news-btn--active'));
    btnItem.classList.add('checked-news-btn--active')
    newsItems.forEach(news => news.getAttribute('data-item') === btnItemValue ? news.style.display = "block" : news.style.display = "none")
})