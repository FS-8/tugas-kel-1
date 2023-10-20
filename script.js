let listSepatu = document.getElementById("list-produk");
// loop produk
async function getDataSepatu() {
  try {
    let respons = await fetch("https://652d214cf9afa8ef4b26d419.mockapi.io/sepatu");
    let data = await respons.json();

    console.log(data);

    data.map((item, index) => {
      let dataSepatu = `
        <div class="card m-2" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.nama}</h5>
          <h6 class="card-title">Rp.${item.harga}</h6>
          <p class="card-text">${item.tag}</p>
          <a href="#" class="btn btn-produk">Beli</a>
        </div>
      </div>
        `;

      listSepatu.innerHTML += dataSepatu;
    });
  } catch (error) {
    console.log(error);
  }
}

getDataSepatu();

// loop home
let car1 = document.getElementById("pter");

async function getDataCarousel1() {
  let respons = await fetch("https://652d214cf9afa8ef4b26d419.mockapi.io/sepatu");
  let data = await respons.json();
  data.slice(0, 4).map((item, index) => {
    let dataSepatu = `
      <div class="card m-2" style="width: 18rem;">
      <img src="${item.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.nama}</h5>
        <h6 class="card-title">Rp.${item.harga}</h6>
        <p class="card-text">${item.tag}</p>
        <a href="#" class="btn btn-produk">Beli</a>
      </div>
    </div>
      `;
    car1.innerHTML += dataSepatu;
  });
}

getDataCarousel1();
