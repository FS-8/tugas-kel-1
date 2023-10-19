let produk = [
  {
    id: 1,
    name: "Sepatu Ventela Reborn",
    price: 379000,
    image: "images/1.jpg",
    description:
      "Sepatu kanvas yang di desain elegan dengan kualitas kanvas terbaik dan insol empuk tidak kempes karena memakai ultralite foam",
  },
];


addDataToCart();

function addDataToCart() {
  // remove default data
  let listCartHTML = document.querySelector(".titleChekcout");
  listCartHTML.innerHTML = "";

  let totalQuantityHTML = document.querySelector(".totalQuantity");
  let totalPriceHTML = document.querySelector(".totalPrice");

  let totalQuantity = 0;
  let totalPrice = 0;

  // if has product in cart
  if (produk != null) {
    produk.forEach((produk) => {
      let newP = document.createElement("div");
      newP.classList.add(".titleChekcout");
      newP.innerHTML = `
      <h2>List Product In Cart</h2>
      <div class="listProduct">
        <div class="imageChekout">
          <img src="${produk.image}" alt="Sepatu" />
        </div>
        <div class="info">
          <div class="name">${produk.name}</div>
          <div class="price">Rp. ${produk.price}</div>
        </div>
        <div class="quantity">1</div>
        <div class="returnPrice">Rp. ${produk.price}</div>
      </div>`;
      listCartHTML.appendChild(newP);

      totalPrice = totalPrice + (produk.price)
    });
  }
  totalPriceHTML.innerHTML = totalPrice
}



document.querySelector(".berhasil .close-btn").addEventListener("click",function(){
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
    document.querySelector(".btn-checkout").addEventListener("click",function(){
      document.querySelector(".berhasil").classList.add("active");
    });
    warningDiv.innerHTML = "";
  }

}

document.getElementById('btn-checkout').addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});
