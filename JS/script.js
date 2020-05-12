//Left Divider Animation start
function leftDividerAnimation() {
    targetPic = document.getElementById("leftDivPic");
    x = 0;
    setInterval(function () {
        targetPic.style.left = x + "px";
        x = x - 1;
        if (x >= 800){
            x = 0;
        }
    }, 100);
}
//Left Divider Animation end

//add product to cart
//  function add_to_cart(e) {
//     cart = document.getElementById("cart_div");
//     switch (e.id) {
//         case "add_dog_food":
//             qty = document.getElementById("dog_food_quantity").value;
//             cart
//                 .insertAdjacentHTML(
//                     'beforeend',
//                     '<p class="orderedProducts">Dog Food:<input type="number" class="cart_input" id = "cart_dog_food" pName = "dog_Food" price="6.50" value="'
//                     + qty
//                     + '"> Price:$'
//                     + (Number(qty) * 6.5)
//                     + '</p>');
//             break;
//         case "add_saddle":
//             qty = document.getElementById("saddle_quantity").value;
//             cart
//                 .insertAdjacentHTML(
//                     'beforeend',
//                     '<p class="orderedProducts">Saddle:<input type="number" class="cart_input" id = "cart_saddle" pName = "saddle" price="49.99" value="'
//                     + qty
//                     + '"> Price:$'
//                     + (Number(qty) * 49.99)
//                     + '</p>');
//             break;
//         case "add_toys":
//             qty = document.getElementById("toys_quantity").value;
//             cart
//                 .insertAdjacentHTML(
//                     'beforeend',
//                     '<p class="orderedProducts">Toys:<input type="number" class="cart_input" id = "cart_toys" pName = "pet_toys" price="14.99" value="'
//                     + qty
//                     + '"> Price:$'
//                     + (Number(qty) * 14.99)
//                     + '</p>');
//             break;
//         case "add_dog_meat":
//             qty = document.getElementById("dog_meat_quantity").value;
//             cart
//                 .insertAdjacentHTML(
//                     'beforeend',
//                     '<p class="orderedProducts">Dog Meat:<input type="number" class="cart_input" id = "cart_dog_meat" pName = "dog_meat" price="14.99" value="'
//                     + qty
//                     + '"> Price:$'
//                     + (Number(qty) * 10.00)
//                     + '</p>');
//             break;
//         case "add_cat_food":
//             qty = document.getElementById("cat_food_quantity").value;
//             cart
//                 .insertAdjacentHTML(
//                     'beforeend',
//                     '<p class="orderedProducts">Cat Food:<input type="number" class="cart_input" id = "cart_cat_food" pName = "cat_food" price="6.50" value="'
//                     + qty
//                     + '"> Price:$'
//                     + (Number(qty) * 6.50)
//                     + '</p>');
//             break;
//         case "add_cat_meat":
//             qty = document.getElementById("cat_meat_quantity").value;
//             cart
//                 .insertAdjacentHTML(
//                     'beforeend',
//                     '<p class="orderedProducts">Cat Meat:<input type="number" class="cart_input" id = "cart_cat_meat" pName = "cat_meat" price="10.00" value="'
//                     + qty
//                     + '"> Price:$'
//                     + (Number(qty) * 10.00)
//                     + '</p>');
//             break;
//         case "add_horse_food":
//             qty = document.getElementById("horse_food_quantity").value;
//             cart
//                 .insertAdjacentHTML(
//                     'beforeend',
//                     '<p class="orderedProducts">Horse Food:<input type="number" class="cart_input" id = "cart_horse_food" pName = "horse_food" price="10.00" value="'
//                     + qty
//                     + '"> Price:$'
//                     + (Number(qty) * 10.00)
//                     + '</p>');
//             break;
//
//     }
//
// }

    function add_to_cart(e) {
        cart = document.getElementById("right_content");
        switch (e.id) {
            case "add_dog_food":
                qty = document.getElementById("dog_food_quantity").value;
                addHTML = document.createElement("p");
                addHTML.className="orderedProducts";
                addHTML.innerHTML = "Dog Food: "+qty+" Price: <strong class='price'>" +(6.5*Number(qty)) +"</strong>";
                console.log(addHTML);
                cart.insertBefore(addHTML, document.getElementById("checkOut"));
                break;
            case "add_saddle":
                qty = document.getElementById("saddle_quantity").value;
                addHTML = document.createElement("p");
                addHTML.className="orderedProducts";
                addHTML.innerHTML = "Saddle: "+qty+" Price: <strong class='price'>"+(49.99*Number(qty)) +"</strong>";
                console.log(addHTML);
                cart.insertBefore(addHTML, document.getElementById("checkOut"));
                break;
            case "add_toys":
                qty = document.getElementById("toys_quantity").value;
                addHTML = document.createElement("p");
                addHTML.className="orderedProducts";
                addHTML.innerHTML = "Toys: "+qty+" Price: <strong class='price'>"+(14.99*Number(qty)) +"</strong>";
                console.log(addHTML);
                cart.insertBefore(addHTML, document.getElementById("checkOut"));
                break;
            case "add_cat_food":
                qty = document.getElementById("cat_food_quantity").value;
                addHTML = document.createElement("p");
                addHTML.className="orderedProducts";
                addHTML.innerHTML = "Cat Food: "+qty+" Price: <strong class='price'>"+(6.5*Number(qty)) +"</strong>";
                console.log(addHTML);
                cart.insertBefore(addHTML, document.getElementById("checkOut"));
                break;
            case "add_dog_meat":
                qty = document.getElementById("dog_meat_quantity").value;
                addHTML = document.createElement("p");
                addHTML.className="orderedProducts";
                addHTML.innerHTML = "Dog Meat: "+qty+" Price: <strong class='price'>"+(10*Number(qty)) +"</strong>";
                console.log(addHTML);
                cart.insertBefore(addHTML, document.getElementById("checkOut"));
                break;
            case "add_cat_meat":
                qty = document.getElementById("cat_meat_quantity").value;
                addHTML = document.createElement("p");
                addHTML.className="orderedProducts";
                addHTML.innerHTML = "Cat Meat: "+qty+" Price: <strong class='price'>"+(10*Number(qty)) +"</strong>";
                console.log(addHTML);
                cart.insertBefore(addHTML, document.getElementById("checkOut"));
                break;
            case "add_horse_food":
                qty = document.getElementById("horse_food_quantity").value;
                addHTML = document.createElement("p");
                addHTML.className="orderedProducts";
                addHTML.innerHTML = "Horse Food: "+qty+" Price: <strong class='price'>"+(10*Number(qty)) +"</strong>";
                console.log(addHTML);
                cart.insertBefore(addHTML, document.getElementById("checkOut"));
                break;
        }
    }


//Popup Invoice

function invoice() {

    modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    cross = document.getElementsByClassName("close")[0];
    console.log(cross);


    cross.onclick = function() {
        modal.style.display = "none";
    }


// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    //Take everything from shopping cart
    cart = document.getElementById("right_content");
    items = document.getElementsByClassName("orderedProducts");
    //invoicePlace is the place we add items in
    invoicePlace = document.getElementById("invoicePlace");
    i = 0;
    text = "<h2>Invoice</h2>";
    while (i<items.length){
        text += "<p>"+items[i].innerHTML+"</p>";
        i++;
    }

    //calculate total
    total = 0;
    i = 0;
    prices = document.getElementsByClassName("price");
    while (i<prices.length){
        console.log(prices[i].innerText);
        total += Number(prices[i].innerText);
        i++;
    }
    text += "<p>Total: $"+total+"</p>";
    invoicePlace.innerHTML = text;
}
