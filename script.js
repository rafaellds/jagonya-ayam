let selectedProduct = "";

function openModal(productName) {
  selectedProduct = productName;
  document.getElementById(
    "modalProductName"
  ).innerText = `Produk: ${productName}`;
  document.getElementById("buyerName").value = "";
  document.getElementById("quantity").value = 1;
  document.getElementById("buyModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("buyModal").style.display = "none";
}

function increaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

function confirmPurchase() {
  const buyerName = document.getElementById("buyerName").value;
  const buyerAlamat = document.getElementById("buyerAlamat").value;
  const buyerTelepon = document.getElementById("buyerTelepon").value;
  const quantity = document.getElementById("quantity").value;

  if (!buyerName || !buyerAlamat || !buyerTelepon) {
    alert("Semua kolom harus diisi untuk melanjutkan.");
    return;
  }

  const cartUrl = `keranjang.html?buyer=${encodeURIComponent(
    buyerName
  )}&alamat=${encodeURIComponent(buyerAlamat)}&telepon=${encodeURIComponent(
    buyerTelepon
  )}&product=${encodeURIComponent(
    selectedProduct
  )}&quantity=${encodeURIComponent(quantity)}`;
  window.location.href = cartUrl;
}
