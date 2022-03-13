class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.imgUrl = image;
    this.price = price;
    this.description = description;
  }
  createElement(elem) {
    const newLi = document.createElement(elem);
    newLi.className = 'product-item';
    newLi.innerHTML = `
      <div class='product-item__content'>
        <img src='${this.imgUrl}'>
        <h2>${this.name}</h2>      
        <h3>\$${this.price}</h3>      
        <p>${this.description}</p>      
        <button>Add to Cart</button>
      </div>
    `;
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
  render() {
    const app = document.getElementById('app');
    const newUl = document.createElement('ul');
    newUl.className = 'product-list';
    
    for (const product of this.products)
    {
      const newLi = product.createElement('li');
      newUl.append(newLi);
    }
    app.append(newUl);
  }
}

const productList = new ProductList();
productList.render();