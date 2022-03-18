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
    const name = this.product.name;
    const imageUrl = this.product.imgUrl;
    const price = this.product.price;
    const desc = this.product.description;
    const limitedDesc = (desc.length > 50)
      ? desc.slice(0,50) + '...'
      : desc;  
    const newLi = document.createElement('li');
    newLi.className = 'product-item';
    newLi.innerHTML = `
      <div class='product-item__content'>
        <h2 class='title'>${name}</h2>      
        <img src='${imageUrl}'>
        <h2><span class='price'>Rs.${price}</span></h2>      
        <p><abbr title='${desc}'>${limitedDesc}</abbr></p>      
        <button class='add-to-cart-btn'>Add to Cart</button>
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
        'Intel® Celeron® N3350',
        'https://static-01.daraz.pk/p/a55f5ab8451acde4a820a567400e0cd4.jpg',
        49000,
        'i-Life Zed PC All in One - 17.3 TouchScreen Portable AIO - Intel® Celeron® N3350 - 4GB - 500 GB HDD - Windows® 10 Home - Silver'
      ),
      new Product(
        'HP 6300 Core i5-3470 3.10GHz',
        'https://static-01.daraz.pk/p/1bb34012d7894d8a1d1225aa3ef93266.jpg',
        55000,
        'HP 6300 All-in-One PC Desktop Computer, 22 Inch Full-HD WLED Display, Core i5-3470 3.10GHz, 4GB RAM, 500GB HDD, DVD, WiFi, Bluetooth'
      ),
      new Product(
        'Core i5 4th Generation',
        'https://static-01.daraz.pk/p/11c09f5cfd042b759562a77bc30618de.jpg',
        23000,
        'Hp Core i5 4th Generation Processor 3.2 Ghz  Ram 8 GB DDR 3 Hard Drive 250 GB Sata Super Combo DVD Room Free Keyboard, Mouse, Wifi Windows 10 Installed'
      ),
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
  order()
  {
    if (Object.keys(this.items).length > 0)
    {
      let total = 0;
      console.log('NAME\t\t\t\t\tQTY\t\tPRICE\t\tTOTAL');

      for (const key in this.items)
      {
        const product = this.items[key];
        console.log(`${key.slice(0,20)}...\t${product.count}\t\t${product.price}\t\t${product.price*product.count}`);
        total += product.price*product.count;
      }
      console.log('---------------------------------------------------------------');
      console.log('Sub Total: ', total);
      console.log('---------------------------------------------------------------');
    }
    else {
      console.log('Please add to cart something!');
    }
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
      <h2>Rs.<span id='price'>0<span></h2>
      <button>Order Now!</button>
    `;
    this.totalEl = cart.querySelector('#price');
    const orderNowBtn = cart.querySelector('button');
    orderNowBtn.addEventListener('click', this.order.bind(this));
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