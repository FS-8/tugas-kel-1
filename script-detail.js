function showProductDetails(id) {
  // Mengambil data produk dari API menggunakan fetch
  fetch(`https://652d214cf9afa8ef4b26d419.mockapi.io/sepatu/${id}`)
    .then((response) => response.json())
    .then((data) => {
      // Simpan data produk di local storage agar dapat diakses pada halaman berikutnya
      localStorage.setItem("productData", JSON.stringify(data));

      // Redirect ke halaman produk
      window.location.href = "detail-produk.html";
    })
    .catch((error) => {
      console.error("Gagal mengambil data produk dari API", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const productData = JSON.parse(localStorage.getItem("productData"));

  let image = document.getElementById("image-primary");
  let namaBarang = document.getElementById("judul-barang");
  let hargaBarang = document.getElementById("harga-product");
  let deskripsiBarang = document.getElementById("deskripsi-produk");
  let namaBarangCard = document.getElementById("nama-barang-card");
  let hargaBarangCard = document.getElementById("harga-product-card");
  let btn = document.getElementById("btn-card");
  let btnMobile = document.getElementById("btn-mobile");

  if (productData) {
    image.innerHTML = ` <img
      src="${productData.img}" />`;
    namaBarang.innerHTML = productData.nama;
    hargaBarang.innerHTML = `Rp. ${productData.harga}`;
    deskripsiBarang.innerHTML = productData.tag;
    namaBarangCard.innerHTML = productData.nama;
    hargaBarangCard.innerHTML = `Rp. ${productData.harga}`;
    btn.innerHTML = `<button class="btn-buy">+ Keranjang</button>
    <button class="primary" onclick='checkoutDetail(${productData.id})'>Beli Langsung</button>`;
    btnMobile.innerHTML = ` <a href=""><button class="btn-chat"><i class="bx bx-message-dots"></i></button></a>
    <button class="btn-buy">+ Keranjang</button>
    <button class="primary" onclick='checkoutDetail(${productData.id})'>Beli Langsung</button>`
  } else {
    // Handle jika data tidak ditemukan
    console.error("Data produk tidak ditemukan.");
  }
});

function checkoutDetail(id) {
  // Mengambil data produk dari API menggunakan fetch
  fetch(`https://652d214cf9afa8ef4b26d419.mockapi.io/sepatu/${id}`)
    .then((response) => response.json())
    .then((data) => {
      // Simpan data produk di local storage agar dapat diakses pada halaman berikutnya
      localStorage.setItem("productData", JSON.stringify(data));

      // Redirect ke halaman produk

      window.location.href = "checkout-produk.html";
    })
    .catch((error) => {
      console.error("Gagal mengambil data produk dari API", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const productData = JSON.parse(localStorage.getItem("productData"));

  let imageCheckout = document.getElementById("image-checkout");
  let namaCheckout = document.getElementById("barang-checkout");
  let hargaCheckout = document.getElementById("harga-checkout");
  let hargaTotal = document.getElementById("harga-total-checkout");
  let hargaSeluruh = document.getElementById("harga-seluruh");

  if (productData) {
    // ====DATA CHECKOUT
    imageCheckout.innerHTML = ` <img
    src="${productData.img}" />`;
    namaCheckout.innerHTML = productData.nama;
    hargaCheckout.innerHTML = productData.harga;
    hargaTotal.innerHTML = productData.harga;
    hargaSeluruh.innerHTML = productData.harga;
  } else {
    // Handle jika data tidak ditemukan
    console.error("Data produk tidak ditemukan.");
  }
});

// *****=====================================================================***** //

document
  .querySelector(".berhasil .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".berhasil").classList.remove("active");
  });
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const alamat = document.getElementById("alamat").value;
  const region = document.getElementById("region").value;
  const Number = document.getElementById("number").value;
  const kota = document.getElementById("kota").value;

  const formData = {
    name: name,
    alamat: alamat,
    region: region,
    Number: Number,
    kota: kota,
  };

  return formData;
}

function isNumber(input) {
  return !isNaN(input);
}
function validateFormData(formData) {
  return (
    formData &&
    formData.alamat.trim() !== "" &&
    formData.region.trim() !== "" &&
    formData.kota.trim() !== "" &&
    isNumber(formData.Number)
  );
}

function submit() {
  const warningDiv = document.getElementById("warning");

  if (!validateFormData(handleGetFormData())) {
    warningDiv.innerHTML = "Periksa form anda sekali lagi";
  } else {
    document
      .querySelector(".btn-checkout")
      .addEventListener("click", function () {
        document.querySelector(".berhasil").classList.add("active");
      });
    warningDiv.innerHTML = "";
  }
}

document.getElementById("btn-checkout").addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});
