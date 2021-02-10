// Script.js


window.addEventListener('DOMContentLoaded', () => {
  // TODO
  localStorage.removeItem('products');
  if(!localStorage.getItem('products')) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        //alert(data);
        localStorage.setItem('products', JSON.stringify(data));

        for(let i = 0; i < 1; i++){
          const card = document.createElement('product-item');
          card.setAttribute('item',data[i]);
          document.getElementById("product-list").appendChild(card);
        }
      });
  }
  });



  