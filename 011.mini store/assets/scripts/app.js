class Product {
  constructor (name, image, price, description) {
    this.name = name;
    this.imgUrl = image;
    this.price = price;
    this.description = description;
  }
}
class ProductItem {
  constructor (product) {
    this.product = product;
  }

  addToCart () {
    App.addProductToCart(this.product);
  }
  createProductItem () {
    const newLi = document.createElement('li');
    newLi.className = 'product-item';
    newLi.innerHTML = `
      <div class='product-item__content'>
        <img src='${this.product.imgUrl}'>
        <h2>${this.product.name}</h2>      
        <h3>\$${this.product.price}</h3>      
        <p>${this.product.description}</p>      
        <button>Add to Cart</button>
      </div>
    `;
    const addToCartBtn = newLi.querySelector('button');
    addToCartBtn.addEventListener('click', this.addToCart.bind(this));
    return newLi;
  }
} 
class ProductList {
  constructor () {
    this.products = [
      new Product(
        'Addidas Bag',
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9da7753e6c354e24a5f8addd0158b37d_9366/Adicolor_Classic_Festival_Bag_Blue_HD7163_01_standard.jpg',
        800,
        'A nice bag.'
      ),
      new Product(
        'Samsang TV',
        'https://images.samsung.com/is/image/samsung/p6pim/es/qe75q80batxxc/gallery/es-qled-q80b-qe75q80batxxc-531520037?$684_547_PNG$',
        90500,
        'Ultra HD TV.'
      )
    ];
  }
  createProductList() {
    const newUl = document.createElement('ul');
    newUl.className = 'product-list';
    
    for (const product of this.products)
    {
      const newLi = new ProductItem(product).createProductItem();
      newUl.append(newLi);
    }
    return newUl;
  }
}
class Cart {
  constructor () {
    this.items = {};
    this.totalPrice = 0.0;
  }
  addProductInList (product) {
    // Add product info in items object
    if (product.name in this.items) {
      this.items[product.name].count += 1;
    }
    else {
      this.items[product.name] = {
        count: 1,
        price: product.price
      };
    }
    // Update total price property and on screen as well
    this.totalPrice += product.price;
    this.totalEl.textContent = this.totalPrice;
  }
  createCartDisplay () {
    const cart = document.createElement('section');
    cart.className = 'cart';
    cart.innerHTML = `
      <h2>\$<span id='price'>0<span></h2>
      <button>Proceed to Pay!</button>
    `;
    this.totalEl = cart.querySelector('#price');
    return cart;
  }
}
class Shop {
  render() {
    const app = document.getElementById('app');
    this.cart = new Cart();
    app.append(this.cart.createCartDisplay());
    const productList = new ProductList();
    app.append(productList.createProductList());
  }
}
class App {
  static cart;

  static start () {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart (product) {
    this.cart.addProductInList(product);
  }
}
App.start();