<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sharma General Store</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

<style>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background: #f5f7fa;
}

header {
  background: #2e7d32;
  color: white;
  padding: 15px;
  text-align: center;
}

.tagline {
  font-size: 14px;
}

.categories {
  display: flex;
  overflow-x: auto;
  padding: 10px;
  gap: 10px;
}

.categories button {
  padding: 8px 12px;
  border: none;
  background: #ddd;
  border-radius: 20px;
  cursor: pointer;
}

.categories button.active {
  background: #2e7d32;
  color: white;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 15px;
  padding: 15px;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}

.card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

button.add {
  background: #2e7d32;
  color: white;
  border: none;
  padding: 8px;
  width: 100%;
  margin-top: 5px;
}

.cart-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ff9800;
  color: white;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
}

.cart-modal {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  max-height: 80%;
  overflow-y: auto;
  display: none;
  padding: 15px;
}

input, textarea {
  width: 100%;
  margin: 5px 0;
  padding: 10px;
}

.checkout {
  background: #2e7d32;
  color: white;
  padding: 12px;
  border: none;
  width: 100%;
}

.whatsapp {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: green;
  color: white;
  padding: 12px;
  border-radius: 50%;
  text-decoration: none;
}
</style>
</head>

<body>

<header>
  <h2>Sharma General Store</h2>
  <div class="tagline">Fresh groceries delivered to your door</div>
</header>

<div class="categories" id="categories"></div>

<div class="products" id="products"></div>

<div class="cart-btn" onclick="toggleCart()">🛒 <span id="count">0</span></div>

<div class="cart-modal" id="cart">
  <h3>Your Cart</h3>
  <div id="cartItems"></div>
  <h3>Total: ₹<span id="total">0</span></h3>

  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onsubmit="prepareOrder()">
    <input required placeholder="Your Name" name="name">
    <input required placeholder="Phone Number" name="phone">
    <textarea required placeholder="Address" name="address"></textarea>
    <textarea placeholder="Instructions" name="notes"></textarea>

    <input type="hidden" name="orderDetails" id="orderDetails">

    <button class="checkout">Place Order</button>
  </form>
</div>

<a class="whatsapp" href="https://wa.me/919999999999">💬</a>

<script>
const products = [
  {name:"Aashirvaad Atta", price:280, cat:"Groceries", img:"https://i.ibb.co/0jqHpnp/atta.jpg"},
  {name:"Amul Butter", price:280, cat:"Dairy", img:"https://i.ibb.co/3pPYd14/butter.jpg"},
  {name:"Milk 1L", price:60, cat:"Dairy", img:"https://i.ibb.co/7V9ZJtK/milk.jpg"},
  {name:"Pepsi 2L", price:95, cat:"Beverages", img:"https://i.ibb.co/9h4F3Y2/pepsi.jpg"},
  {name:"Maggi", price:15, cat:"Snacks", img:"https://i.ibb.co/jh7xYpL/maggi.jpg"},
  {name:"Biscuits", price:30, cat:"Snacks", img:"https://i.ibb.co/L8YF6yK/biscuit.jpg"},
  {name:"Rice 5kg", price:300, cat:"Groceries", img:"https://i.ibb.co/jgV0dJY/rice.jpg"},
  {name:"Sugar 1kg", price:45, cat:"Groceries", img:"https://i.ibb.co/jZgLZcM/sugar.jpg"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts(filter="All"){
  let html="";
  products.filter(p => filter==="All"||p.cat===filter)
  .forEach((p,i)=>{
    html+=`
    <div class="card">
      <img src="${p.img}" loading="lazy">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <button class="add" onclick="addToCart(${i})">Add</button>
    </div>`;
  });
  document.getElementById("products").innerHTML=html;
}

function renderCategories(){
  let cats=["All",...new Set(products.map(p=>p.cat))];
  let html="";
  cats.forEach(c=>{
    html+=`<button onclick="renderProducts('${c}')">${c}</button>`;
  });
  document.getElementById("categories").innerHTML=html;
}

function addToCart(i){
  let item=cart.find(x=>x.name===products[i].name);
  if(item) item.qty++;
  else cart.push({...products[i],qty:1});
  updateCart();
}

function updateCart(){
  localStorage.setItem("cart",JSON.stringify(cart));
  document.getElementById("count").innerText=cart.length;

  let html="",total=0;
  cart.forEach((c,i)=>{
    total+=c.price*c.qty;
    html+=`
    <div>
      ${c.name} x ${c.qty} = ₹${c.price*c.qty}
      <button onclick="changeQty(${i},1)">+</button>
      <button onclick="changeQty(${i},-1)">-</button>
    </div>`;
  });

  document.getElementById("cartItems").innerHTML=html;
  document.getElementById("total").innerText=total;
}

function changeQty(i,val){
  cart[i].qty+=val;
  if(cart[i].qty<=0) cart.splice(i,1);
  updateCart();
}

function toggleCart(){
  let c=document.getElementById("cart");
  c.style.display=c.style.display==="block"?"none":"block";
}

function prepareOrder(){
  let text="Order:\n";
  cart.forEach(c=>{
    text+=`${c.name} x ${c.qty} = ₹${c.price*c.qty}\n`;
  });
  document.getElementById("orderDetails").value=text;
  localStorage.removeItem("cart");
  alert("Order placed! We will contact you soon.");
}

renderCategories();
renderProducts();
updateCart();
</script>

</body>
</html>
