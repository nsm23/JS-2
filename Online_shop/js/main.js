class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods =[];
        this._fitchProducts();
    }
    
    _fitchProducts() {
        this.goods = [
            {id: 1, title: 'notebook', price: 45000},
            {id: 2, title: 'mouse', price: 900},
            {id: 3, title: 'keyboard', price: 1500,},
            {id: 4, title: 'gamepad', price: 1000,},
            {id: 5, title: 'printer', price: 9000,},
            {id: 6, title: 'VR-glasses', price: 35000}
        ];

    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
    sumBasket() {
        let total = this.goods.reduce((sum, item) => sum += item.price, 0);
    //    console.log(total)
    }
}

class ProductItem {
    constructor(product, img = '/img/default.jpg'){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id = "${this.id}">
                <img src="${this.img}" alt="photo">
                <h2>${this.title}</h2>
                <p>${this.price}</p>
                        <button class="buy-btn"> Buy </button>
                    </div>`
    }
}
let list = new ProductsList();
list.render();

class Basket{
    append(){
        
    }
    remove(){

    }
    render(){
        
    }
}
