let cartCount = 0;
let cartItems = [];

function addToCart(name, price) {
    cartCount++;
    cartItems.push({ name, price });
    document.getElementById("cart-count").innerText = cartCount;
    alert(`${name} додано до кошика!`);
}

function toggleCart() {
    const cartModal = document.getElementById("cartModal");
    if (cartModal.style.display === "flex") {
        closeCartModal();
    } else {
        showCart();
    }
}

function showCart() {
    const cartList = document.getElementById("cart-items-list");
    cartList.innerHTML = ""; // Clear previous items

    let total = 0;
    if (cartItems.length === 0) {
        cartList.innerHTML = "<li>Кошик порожній.</li>";
    } else {
        cartItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.innerText = `${item.name} - ${item.price} грн`;
            cartList.appendChild(listItem);
            total += item.price;
        });
    }
    document.getElementById("cart-total").innerText = total;
    document.getElementById("cartModal").style.display = "flex";
}

function closeCartModal() {
    document.getElementById("cartModal").style.display = "none";
}

function searchProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const name = product.getAttribute("data-name").toLowerCase();
        if (name.includes(input)) {
            product.style.display = "flex"; // Use flex to maintain product box styling
        } else {
            product.style.display = "none";
        }
    });
}

function openCheckout() {
    if (cartItems.length === 0) {
        alert("Ваш кошик порожній. Додайте товари перед оформленням.");
        return;
    }
    document.getElementById("checkoutModal").style.display = "flex";
}

function openCheckoutFromCart() {
    closeCartModal(); // Close cart modal
    openCheckout(); // Open checkout modal
}


function closeCheckoutModal() {
    document.getElementById("checkoutModal").style.display = "none";
}

function submitOrder() {
    const name = document.getElementById("customerName").value.trim();
    const address = document.getElementById("customerAddress").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();

    if (!name || !address || !phone) {
        alert("Будь ласка, заповніть усі поля.");
        return;
    }

    alert(`Дякуємо, ${name}! Ваше замовлення прийнято.\nМи доставимо його за адресою: ${address}`);
    cartCount = 0;
    cartItems = [];
    document.getElementById("cart-count").innerText = cartCount;
    closeCheckoutModal();
}