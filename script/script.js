
var jsonData
fetch("/data/products.json")
.then(response => {
   return response.json();
})
.then(data => {console.log(data[0].products)
   // jsonData = JSON.stringify(data[0].products)
    jsonData = data[0].products
    console.log('jsondata',jsonData)
    const preElement = document.getElementById('product-data');

    for(var i in jsonData)
    {
    var title = jsonData[i].title;
    var subtitle = jsonData[i].subtitle;
    var price = jsonData[i].price;
    var imgurl = jsonData[i].thumbnail;

    console.log(imgurl)

    return <div> {Object.keys(jsonData).map(year => jsonData[title].map(data => <button> {year} | {data["Country"]}</button>))} </div>
   
//     preElement.innerHTML = `<div class="card" style="width: 18rem;">
//     <img src=${imgurl} class="card-img-top" alt="...">
//     <div id="product-card" class="card-body">
//       <h5 class="card-title">${title}</h5>
//       <p class="card-text">${subtitle}</p>
//       <a href="#" class="btn btn-primary">${price}</a>
//     </div>
//   </div>`
    }


   
});


