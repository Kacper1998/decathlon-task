fetch("https://fakestoreapi.com/products?limit=3", )
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
                <div class="vl"></div>
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
   
fetch("https://fakestoreapi.com/products?limit=6")
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
                <div class="vl"></div>
                <h5 id="rating">${values.rating.rate}</h5>
            </div>
        </div>
        `
        document.querySelector('.items').innerHTML=data1;
    })
})
.catch(err => {
	console.error(err);
});



/* jquery hamburger code here */

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

    /* jquery hamburger code here ends */

    
