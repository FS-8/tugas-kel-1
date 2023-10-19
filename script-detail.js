// ========
const tbody = document.querySelector("tbody");
let detailProduk = document.querySelector(".section-produk");
let usersData = [];

const loadData = async () => {
  try {
    const url = await fetch(
      "https://652d214cf9afa8ef4b26d419.mockapi.io/sepatu"
    );
    usersData = await url.json();
    console.log(usersData);
    loadUserData(usersData);
  } catch (err) {
    console.log(err);
  }
};

const loadUserData = (data) => {
  let no = 1;
  const output = data
    .map((el) => {
      return `<tr>
      <td>${no++}</td>
      <td>${el.nama}</td>
      <td>${el.harga}</td>
      <td> <button formaction="detail-produk.html"onclick='showDetail(${
        el.id
      })'>Detail</button></td>
        </tr>`;
    })
    .join("");

  tbody.innerHTML = output;
};

function showDetail(id) {

}


loadData();

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
