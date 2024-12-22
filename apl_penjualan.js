// Grab elements from the DOM
const addProductBtn = document.getElementById("add-product-btn");
const productList = document.getElementById("product-list");

// Add product function
function addProduct() {
  // Prompt user for product name
  const productName = prompt("Enter the product name:");
  
  // Validate input
  if (productName && productName.trim() !== "") {
    // Create new list item
    const listItem = document.createElement("li");
    listItem.textContent = productName;

    // Append to the product list
    productList.appendChild(listItem);
    alert("Product added successfully!");
  } else {
    alert("Product name cannot be empty.");
  }
}

// Event listener for the add product button
addProductBtn.addEventListener("click", addProduct);