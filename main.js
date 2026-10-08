// ------------variables declaration-------------------
let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")
let create = document.getElementById("create-btn")

// ---------------get total function--------------
function getTotal(){
if(price.value != ''){
    let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
    total.innerHTML = result;
    total.style.backgroundColor = 'green';
}
else{
    total.innerHTML = `invalid credentials`;
    total.style.backgroundColor = 'transparent';
}}

// --------------create product----------------
// products array
let products;
if(localStorage.productsData != null){
    products = JSON.parse(localStorage.productsData)
}
else{
    products = []
}

create.onclick = function(){
    let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
    products.push(newpro)
    localStorage.productsData = JSON.stringify(products) 

}

// xxxxxxxxxxxx clear storage btn xxxxxxxxxxxxxx
let crazy = document.getElementById("crazy-btn")
crazy.onclick = function(){
    localStorage.clear();
}
