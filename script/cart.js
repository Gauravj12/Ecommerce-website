var cart_container=document.getElementById('cart_container')
var cart=localStorage.getItem('productCart');
var cartArr=JSON.parse(cart);
//console.log('cartArr',cartArr)
var cart_count=document.querySelector('#cart_count')
cart_count.innerHTML=cartArr.length
let initialValue = 0;
let totalPrice = cartArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  initialValue,
);
let delivery_charges=cartArr.length === 0 ? 0 : 50;
let shipping=document.querySelector('#shipping').innerHTML=delivery_charges;

let final_cost=totalPrice + delivery_charges

let cart_total=document.querySelector('#cart_total')
cart_total.innerHTML=totalPrice

let final_payment=document.querySelector("#final_payment")
final_payment.innerHTML=final_cost


// console.log('totalPrice',totalPrice)
// console.log('delivery_charges',delivery_charges)
// console.log('total',totalPrice + delivery_charges)

updateCart=()=>{
cartArr.map((product, index) => {
   // var brandname =product.title
    cart_container.innerHTML += ` <div class="card mb-3">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row align-items-center">
          <div>
            <img
              src=${product.thumbnail}
              class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
          </div>
          <div class="ms-3">
            <h5>${product.brand}</h5>
            <p class="small mb-0">${product.title}</p>
          </div>
        </div>
        <div class="d-flex flex-row align-items-center">
          <div style="width: 50px;">
            <h5 class="fw-normal mb-0">1</h5>
          </div>
          <div style="width: 80px;">
            <h5 class="mb-0">${product.price}</h5>
          </div>
          <button type="button" onclick="removeCart(${index})" class="btn btn-light">X</button>
        </div>
      </div>
    </div>
  </div>
  `
 });
}

updateCart()
 console.log('cartArr before del',cartArr)

  removeCart=(a)=>{
    
    cartArr.splice(a,1)
    console.log('cartArr after del',cartArr);
    localStorage.setItem('productCart',JSON.stringify(cartArr));
    updateCart();
    location.reload();
  }
 