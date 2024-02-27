let cartArr=[]
let selectedProduct=localStorage.getItem('selectedProduct');
let currentProduct=JSON.parse(selectedProduct);
let selected_product_card=document.querySelector('#selected_product_card')
let selected_product_img=document.querySelector('#selected_product_img')
let selected_product_brand=document.querySelector('#selected_product_brand')
let selected_product_title=document.querySelector('#selected_product_title')
let selected_product_price=document.querySelector('#selected_product_price')

// console.log('currentProduct',currentProduct)
// selected_product_brand.innerHTML=currentProduct.brand
// selected_product_title.innerHTML=currentProduct.title
// selected_product_price.innerHTML=currentProduct.price
// selected_product_img.src=currentProduct.thumbnail
console.log('cartArr',cartArr)

selected_product_card.innerHTML =`<div class="row align-items-center">
<div class="col text-center"><img src=${currentProduct.thumbnail} id="selected_product_img" class="img-fluid" alt="..." style="height: 15em; width: 10em;"></div>
<div class="col text-start">
  <h3 id="selected_product_brand">${currentProduct.brand}</h3>
  <h5 id="selected_product_title">${currentProduct.title}</h5>
  <h4 id="selected_product_price">${currentProduct.price}</h4>
  <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group-sm me-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-outline-secondary">S</button>
        <button type="button" class="btn btn-outline-secondary">M</button>
        <button type="button" class="btn btn-outline-secondary">L</button>
        <button type="button" class="btn btn-outline-secondary">XL</button>
      </div>
  </div>
  <div class="btn-group" role="group">
      <button type="button" class="btn btn-light"><i class="fa-regular fa-bookmark"></i></button>
      <button type="button" onclick="addToCart()" class="btn btn-secondary">Add to cart</button>
    </div>
</div>
</div>`


let addToCart=(product)=>{
product=currentProduct
console.log('product',currentProduct)

cartArr.push(product)
console.log('cartArr',cartArr)

localStorage.setItem('productCart',JSON.stringify(cartArr))

}

