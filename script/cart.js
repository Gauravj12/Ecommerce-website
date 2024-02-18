var cart_container=document.getElementById('cart_container')
var cart=localStorage.getItem('productCart');
var cartArr=JSON.parse(cart);
console.log('cartArr',cartArr)

cartArr.map((product, index) => {
    var row ='products_103'
    cart_container.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${product.thumbnail} class="img-thumbnail rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  `
  });