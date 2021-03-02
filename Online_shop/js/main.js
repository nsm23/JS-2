const products = [
    {id: 1, title: 'notebook', price: 45000},
    {id: 2, title: 'mouse', price: 900},
    {id: 3, title: 'keyboard', price: 1500,},
    {id: 4, title: 'gamepad', price: 1000,},
    {id: 5, title: 'printer', price: 9000,},
    {id: 6, title: 'VR-glasses', price: 35000}
];
const renderProduct = (title, price) => {
    return (`<div class="product-item">
                <h2>${title}</h2>
                <p>${price}</p>
                <button class="buy-btn"> Buy </button>
            </div>`)
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML=productsList.join('');
};
renderPage(products);