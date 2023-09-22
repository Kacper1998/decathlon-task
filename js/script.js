fetch("https://fakestoreapi.com/products?limit=3")
.then(response => response.json())
.then((data) => {
    let data1 = "";
    data.map((values) => {
        data1+= `
        <div class="card">
            <div class="img">
                <img src=${values.image} id="poster">
            </div>
            <h2 id="title">${values.title}</h2>
            <div class="price">
                <h4 id="price">$${values.price}</h4>
                <h5 id="rating">${values.rating.rate}</h5>
            </div>
        </div>
        `
        document.querySelector('.grid-item').innerHTML=data1;
    })
})
.catch(err => {
	console.error(err);
});

$(document).ready(function() {
    $('#btn-show-products').click(function() {
            $('.menu').slideToggle("fast");
    });
});
   
document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelector('.items');
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();

            for (let i = 0; i < 6; i++) {
                let description = response[i].description;
                let title = response[i].title;
                items.innerHTML += `
       <div class="item">
           <img src="${response[i].images[1]}" alt="${
          response[i].category.name
        }" class="item-img">
           <div class="item-content">
           <h2 class="item-title">${
             title.length > 34 ? title.substring(0, 34).concat(' ...') : title
           }</h2>
     
           <div class="item-price-container">
               <h3 class="item-price">$${response[i].price}</h3>
               <a href="#!" data-productId="${
                 response[i].id
               }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
           </div>
           </div>
          
       </div>
       `;
            }
        } catch (err) {
            console.log(err);
        }
    }
    fetchProducts('https://api.escuelajs.co/api/v1/products');
});

fetch('https://fakestoreapi.com/products')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  $( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
    
    });