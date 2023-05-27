var cartItems = [];
var products = [
  { name: "Apple", price: 0.50 },
  { name: "Banana", price: 0.30 },
  { name: "Orange", price: 0.70 },
  { name: "Grapes", price: 1.20 },
  { name: "Watermelon", price: 2.50 },
  { name: "Milk", price: 0.50 },
  { name: "Cheese", price: 0.30 },
  { name: "Butter", price: 0.70 },
  { name: "Ice cream", price: 1.20 },
  { name: "Yogurt", price: 2.50 },
  { name: "Tomato", price: 0.50 },
  { name: "Broccoli", price: 0.30 },
  { name: "Cauliflower", price: 0.70 },
  { name: "Sawi", price: 1.20 },
  { name: "Asparagus", price: 2.50 }
];

function addToCart(productId) {
  var product = products[productId];
  cartItems.push({ name: product.name, price: product.price });
  updateCart();
  alert(product.name + " has been added to the cart! The total price at the bottom has been updated");
}

function updateCart() {
  var totalPriceElement = document.getElementById("total-price");
  if (totalPriceElement) {
    var totalPrice = 0;
    for (var i = 0; i < cartItems.length; i++) {
      var item = cartItems[i];
      totalPrice += item.price;
    }
    totalPriceElement.textContent = "RM" + totalPrice.toFixed(2);
  }
}
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var fullName = document.getElementById("full-name").value;
    var birthdate = document.getElementById("birthdate").value;
    var contactNumber = document.getElementById("contact-number").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementById("gender").value;
  
    // Display message
    var messageElement = document.getElementById("message");
    messageElement.textContent = "Your application has been submitted! We will notify you through your email.";
    messageElement.style.display = "block";
  });
  