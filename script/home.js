
fetch("/data/products.json")
.then(response => {
   return response.json();
})
.then(data => { 
    //console.log(data[0].products_101)
   
    
    let homePageCards=document.querySelector('#homePageCards')
    let selected_product
    let checkout=(x)=>{
      console.log('card click',x)
      selected_product=data[0].products_101[x-1]
      localStorage.setItem('selectedProduct',JSON.stringify(selected_product))
      location.href='/pages/product_card.html'
    }
  
    homePageCards.addEventListener('click',checkout)


});




 