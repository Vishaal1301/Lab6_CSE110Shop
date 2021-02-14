// Script.js
window.addEventListener('DOMContentLoaded', () => {
  if(!localStorage.getItem('products')) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
          localStorage.setItem('products', JSON.stringify(data));
          let cartData = localStorage.setItem('cartItems', JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));

          for(let i = 0; i < data.length; i++){
            const card = document.createElement('product-item');
            card.setAttribute('item', JSON.stringify(data[i]));
            //card.getInd(i);
            card.setImage(data[i].image);
            card.setAltandTitle(data[i].title);
            card.setPrice(data[i].price);

            card.shadowRoot.querySelector('li').querySelector('button').addEventListener('click', function(){
              let arr = JSON.parse(localStorage.getItem('cartItems'));
              let itemId = JSON.parse(card.getAttribute('item')).id
      
              let textCart = card.shadowRoot.querySelector('li').querySelector('button').innerText;
              if (textCart == "Add to Cart"){
                arr[20]++;
                arr[itemId-1]++;
                card.shadowRoot.querySelector('li').querySelector('button').innerText = "Remove from Cart";
                
                let myCart = document.getElementById("cart-count");
                myCart.innerHTML = arr[20];
                card.shadowRoot.querySelector('li').querySelector('button').setAttribute('onclick', "alert('Remove from Cart')");
      
              }
              else {
                let itemId = JSON.parse(card.getAttribute('item')).id;
                arr[20]--;
                arr[itemId-1]--;
                card.shadowRoot.querySelector('li').querySelector('button').innerText = "Add to Cart";
                
                let myCart = document.getElementById("cart-count");
                myCart.innerHTML = arr[20];
                card.shadowRoot.querySelector('li').querySelector('button').setAttribute('onclick', "alert('Add to Cart')");
              }

              localStorage.setItem('cartItems', JSON.stringify(arr));
            })

            document.getElementById("product-list").appendChild(card);
          }
        })
  }
  else{
    let data = localStorage.getItem('products');
    let cartData = JSON.parse(localStorage.getItem('cartItems'));
    document.getElementById("cart-count").innerHTML = cartData[20];

    for(let i = 0; i < data.length; i++){
      let oneItem = JSON.parse(data)[i];
      const card = document.createElement('product-item');
      card.setAttribute('item', JSON.stringify(oneItem));
      card.setImage(oneItem.image);
      card.setAltandTitle(oneItem.title);
      card.setPrice(oneItem.price);

      if(cartData[i] > 0){
        card.shadowRoot.querySelector('li').querySelector('button').innerText = "Remove from Cart";
        card.shadowRoot.querySelector('li').querySelector('button').setAttribute('onclick', "alert('Remove from Cart')"); 
      }
      else{
        card.shadowRoot.querySelector('li').querySelector('button').innerText = "Add to Cart"; 
      }

      card.shadowRoot.querySelector('li').querySelector('button').addEventListener('click', function(){
        let arr = JSON.parse(localStorage.getItem('cartItems'));
        let itemId = JSON.parse(card.getAttribute('item')).id

        let textCart = card.shadowRoot.querySelector('li').querySelector('button').innerText;
        if (textCart == "Add to Cart"){
          arr[20]++;
          arr[itemId-1]++;
          card.shadowRoot.querySelector('li').querySelector('button').innerText = "Remove from Cart";
          
          let myCart = document.getElementById("cart-count");
          myCart.innerHTML = arr[20];
          card.shadowRoot.querySelector('li').querySelector('button').setAttribute('onclick', "alert('Remove from Cart')");

        }
        else {
          let itemId = JSON.parse(card.getAttribute('item')).id;
          arr[20]--;
          arr[itemId-1]--;
          card.shadowRoot.querySelector('li').querySelector('button').innerText = "Add to Cart";
          
          let myCart = document.getElementById("cart-count");
          myCart.innerHTML = arr[20];
          card.shadowRoot.querySelector('li').querySelector('button').setAttribute('onclick', "alert('Add to Cart')");
        }

        localStorage.setItem('cartItems', JSON.stringify(arr));
      })

      document.getElementById("product-list").appendChild(card);
    }
}});












  
