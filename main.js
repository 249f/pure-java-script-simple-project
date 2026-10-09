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
    clearInputs(); 
    fetchdata();
}

// clear inputs function
function clearInputs(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = ''
    count.value = '';
    category.value = '';
}

// -----------------Fetch data function---------------
function fetchdata(){
    let tbody = document.getElementById("tbody")

    // empty place to hold the HTML code
    let table = ''
    for(let i = 0 ; i < products.length; i++ ){
        
        // "+=" instead of the normal "=" so we keep adding code to the existed code
        table += `
        <tr>
                    <td>${i}</td>
                    <td>${products[i].title}</td>
                    <td>${products[i].price}</td>
                    <td>${products[i].taxes}</td>
                    <td>${products[i].ads}</td>
                    <td>${products[i].discount}</td>
                    <td>${products[i].total}</td>
                    <td>${products[i].category}</td>
                    <td><button id="update">update</button></td>
                    <td><button onClick = "deletebtn(${i})" id="delete">delete</button></td>
                    
                </tr>
        `
    }

    // adding the html code to table body
    tbody.innerHTML = table;


    // Delete All button
    let deleteAllDiv = document.getElementById("deleteAll");
    if (products.length > 0){
    deleteAllDiv.innerHTML = `<button onClick = "delete_all_function()">delete all</button>`}
    else{
     deleteAllDiv.innerHTML = "";}
}

// invoke the function on load
fetchdata();

// ---------------- delete button function ----------------
function deletebtn(i){
    products.splice(i,1);
    localStorage.productsData = JSON.stringify(products);
    fetchdata();
    
}

// delete all function
function delete_all_function(){
    products = [];
    localStorage.clear();
    fetchdata();
}


// xxxxxxxxxxxx clear storage btn xxxxxxxxxxxxxx
let crazy = document.getElementById("crazy-btn")
crazy.onclick = function(){
    localStorage.clear();
    products = []
    fetchdata();
}
