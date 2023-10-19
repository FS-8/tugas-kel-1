var item = document.querySelectorAll('.carousel .carousel-item');
item.forEach((e) => {
  const slide = 4;
  let next = e.nextElementSibling;
  for (var i; i < slide; i++) {
    if (!next) {
      next = item[0];
    }
    let clonechild = next.cloneNode(true);
    e.appendChild(clonechild.children[0]);
    next = next.nextElementSibling;
  }
});

let listSepatu = document.getElementById('list-produk');

async function getDataSepatu() {
  try {
    let respons = await fetch('https://652d214cf9afa8ef4b26d419.mockapi.io/sepatu');
    let data = await respons.json();

    console.log(data);

    data.map((item, index) => {
      let dataSepatu = `
        <div class="card m-2" style="width: 18rem;">
        <img src="${item.img}.jpg" class="card-img-top" alt="...">
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

// async function getDataCarousel() {
//   let respons = await fetch("https://652d214cf9afa8ef4b26d419.mockapi.io/sepatu");
//   let data = await respons.json();
//   data.map((item, index) => {
//     let dataCarousel = `
//       <div class="carousel-item row d-flex align-items-center justify-content-center ">
//       <div class="card" style="width: 18rem;">
//         <div class="img-wrapper">
//           <img src="${item.img}.jpg"  alt="...">
//         </div>
//         <div class="card-body">
//           <h5 class="card-title">${item.nama}</h5>
//           <h6 class="card-title">Rp.${item.harga}</h6>
//           <p class="card-text">${item.tag}</p>
//           <a href="#" class="btn btn-produk">Beli</a>
//         </div>
//       </div>
//     </div>`;
//     listSepatu.innerHTML += dataSepatu;
//   });
// }

// getDataCarousel();
