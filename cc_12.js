// Task 1: Task 1: Business Dashboard – DOM Element Selection and Creation
document.addEventListener("DOMContentLoaded", function () {
    const dashboardId = document.getElementById("dashboard"); // Use document.getElementById to select the dashboard container
    const dashboardSel = document.querySelector("#dashboard"); // Use document.querySelector to select the dashboard container

    const revenueCard = document.createElement("div"); // Create a new <div> element using createElement to represent the metric card
    revenueCard.setAttribute("class", "metric-card"); // Use setAttribute to assign a class ("metric-card")
    revenueCard.setAttribute("id", "revenueCard"); // Use setAttribute to assign an id ("revenueCard") 

    // Populate the card with a title ("Revenue") and a placeholder value (e.g., "$0").
    revenueCard.innerHTML = `<h3>Revenue</h3><p>$0</p>`;

    // Append the new metric card to the dashboard container using appendChild
    dashboardId.appendChild(revenueCard);



    // Task 2:  Updating Dashboard Metrics – Working with NodeLists and Arrays
    const metricCards = document.querySelectorAll(".metric-card"); // Use document.querySelectorAll to select all elements with the class "metric-card"

    const metricCardsArray = Array.from(metricCards); // Convert the resulting NodeList into an array using Array.from 

    metricCardsArray.forEach(card => { // // Use an array method such as .forEach() to update each card’s inner text 
        card.innerText += ' - Updated'; // appending " - Updated" to the current text
        card.style.backgroundColor = 'pink'; // modify styles (changing the background color)
    });


    // Task 3: Dynamic Inventory Management – Adding and Removing Items
    const inventoryList = document.getElementById("inventoryList");

    function addInventoryItem(productName) { // Add a product to the inventory list 
        const newProduct= document.createElement("li"); // Create a new <li> element representing a product
        newProduct. textContent = productName;

    //    Eoeoduct Name:"); // Prompt for product name
        
      //  if (productName) {
      //     const newProduct = document.createElement("li"); // Create a new <li> element representing a product
      //      newProduct.textContent = productName;

        newProduct.setAttribute("class", "product-item"); // Use setAttribute to add a class (e.g., "product-item")
        newProduct.setAttribute("data-product", productName); // Use setAttribute to add a custom data attribute to the <li>

        newProduct.addEventListener("click", function () { // Write a separate function that removes a specific <li> when it is clicked
        inventoryList.removeChild(newProduct); // Use removeChild within the inventory list to remove the clicked item
       });

        inventoryList.appendChild(newProduct); // Append the new product item to the inventory list using appendChild
        }

        window.addInventoryItem = addInventoryItem;
   // }
  //  addProductButton.addEventListener("click", addProduct); // Clicking on button to add a new product item to the inventory list
});

