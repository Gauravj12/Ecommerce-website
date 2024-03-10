let cartArr=[]
let dropdown_filter=document.querySelector('#dropdown_filter')
let dataRow1
let men_products=[]
let product_container
let row = document.getElementById('row');
let p ='all', t
let filter_btn=document.querySelector('#filter_btn')
let navCart=document.querySelector('#navCart')

let starsvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`
    let blankstarsvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
    </svg>`
    let halfblankstarsvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
    <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
    </svg>`
    let bookmark=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16">
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
    <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4"/>
  </svg>`

let fetchData=()=>{
fetch("/data/products.json")
.then(response => {
   return response.json();
   
})
.then(data => { 
    //console.log(data[0].products_101)
    //dataRow1 = JSON.stringify(data[0].products)
    dataRow1 = [...data[0].products_101]
   // unique_products = [...new Set(men_products)];
   
   row.innerHTML=''
   if (t ==='low_to_high')
   {
    dataRow1.sort((a, b) => a.price - b.price)
  }
   else if(t==='high_to_low')
   {
    dataRow1.sort((a, b) => b.price - a.price)
   }

   dataRow1.forEach((product, index) => {

    if(product.category==='women')
{
    product_container =`<div class="col-lg-3 col-md-6 mb-4">
    <!-- Card-->
    <div class="card rounded shadow-sm border-0">
      <div class="card-body p-4"><img src=${product.thumbnail} alt="" class="img-fluid d-block mx-auto mb-3" style="
      height: 15em;width: 20vw;"><div class="row justify-content-between"><div class="col-8"><a href="/pages/product_card.html"><h6> <button onclick="pushToCart(${index})" row=${product.row} class="text-dark" style="border: none; background-color: transparent;">${product.brand}</button></h6></a></div><div class="col-4">
      <h6>&#x20B9;${product.price}</h6>
    </div></div>
    <div class="row justify-content-between">
        <p class="col-8 small text-muted font-italic">${product.title}</p>
        <span class="col-2 fa-regular fa-bookmark"></span>
        </div>
        <ul class="list-inline small">
          <li class="list-inline-item m-0">${starsvg}</li>
          <li class="list-inline-item m-0">${starsvg}</li>
          <li class="list-inline-item m-0">${starsvg}</li>
          <li class="list-inline-item m-0">${halfblankstarsvg}</li>
          <li class="list-inline-item m-0">${blankstarsvg}</li>
        </ul>
      </div>
    </div>
  </div>
  ` 

  row.innerHTML+=product_container
}
  });
 
});

}


let selectDropDown=(y)=>{
  t=y
  //console.log('t',t)
  
  if (t ==='low_to_high')
  {
    men_products.sort((a, b) => a.price - b.price)
    dataRow1.sort((a, b) => a.price - b.price)
    selectSubCategory(p)
}
else if(t ==='high_to_low')
{
  men_products.sort((a, b) => b.price - a.price)
  dataRow1.sort((a, b) => b.price - a.price)
  selectSubCategory(p)
}
}


let selectSubCategory=(x)=>{
  p=x

if(p ==='all')
{
  fetchData()
}

//row4.innerHTML+=product_container

 // changeDoc()
 //displayArr = [...men_products]
 men_products = dataRow1.filter((product) => {
  return product.subcategory===p;
})


row.innerHTML=''
//console.log('men_products', men_products.sort((a, b) => a.price - b.price))
 // console.log('dropdown_filter',dropdown_filter)
  console.log('p',p)
  
  men_products.forEach((product, index) => {
    product_container =`<div class="col-lg-3 col-md-6 mb-4">
    <!-- Card-->
    <div class="card rounded shadow-sm border-0">
      <div class="card-body p-4"><img src=${product.thumbnail} alt="" class="img-fluid d-block mx-auto mb-3" style="
      height: 15em;width: 20vw;"><div class="row justify-content-between"><div class="col-8"><a href="/pages/product_card.html"><h6> <button onclick="pushToCart(${index})" row=${product.row} class="text-dark" style="border: none; background-color: transparent;">${product.brand}</button></h6></a></div><div class="col-4">
      <h6>&#x20B9;${product.price}</h6>
    </div></div>
    <div class="row justify-content-between">
        <p class="col-10 small text-muted font-italic">${product.title}</p>
        <span class="col-2 fa-regular fa-bookmark"></span>
        </div>
        <ul class="list-inline small">
          <li class="list-inline-item m-0">${starsvg}</li>
          <li class="list-inline-item m-0">${starsvg}</li>
          <li class="list-inline-item m-0">${starsvg}</li>
          <li class="list-inline-item m-0">${halfblankstarsvg}</li>
          <li class="list-inline-item m-0">${blankstarsvg}</li>
        </ul>
      </div>
    </div>
  </div>
  ` 
  
  
  
  row.innerHTML+=product_container
  
  });
  
 
  
}




if(p ==='all')
{
  fetchData()
}

//console.log('p',p)
 var card = document.querySelector(".card")
var addToCartBtn = document.querySelector('#addToCartBtn');
 pushToCart = (a)=>{
 // console.log('data',data[0].products_101[a])
 cartArr.push(data[0].products_101[a])
 localStorage.setItem('productCart',JSON.stringify(cartArr))
 console.log(cartArr)
    navCart.innerHTML=cartArr.length
    
  }