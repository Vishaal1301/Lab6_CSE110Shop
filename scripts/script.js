// Script.js


window.addEventListener('DOMContentLoaded', () => {
  //localStorage.removeItem('products');
  if(!localStorage.getItem('products')) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        //alert(data);
        localStorage.setItem('products', JSON.stringify(data));

        for(let i = 0; i < data.length; i++){
          const card = document.createElement('product-item');
          card.setAttribute('item', JSON.stringify(data[i]));
          card.setImage(data[i].image);
          card.setAltandTitle(data[i].title);
          card.setPrice(data[i].price);

          document.getElementById("product-list").appendChild(card);
        }
      });
  }
  });



  