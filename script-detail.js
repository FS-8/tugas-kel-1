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

addDataToHTML()
//show data in list html
function addDataToHTML() {
  //remove data default in html
  let listProductHTML = document.querySelector(".section-produk");
  listProductHTML.innerHTML = " ";
  //add new datas
  if (produk != null) {
    produk.forEach((produk) => {
      let newProduct = document.createElement("section");
      newProduct.classList.add("section-produk");
      newProduct.innerHTML = `<div class="image">
            <img
              src="${produk.image}"
              alt="Sepatu"
              id="image-primary"
            />
          </div>
    
          <!-- ===================================================== -->
    
          <div class="detail">
            <h2 class="judul-barang" id="judul-barang">${produk.name}</h2>
            <p>Terjual 100+ • ⭐ bintang 4.9 (105 rating)</p>
            <span class="harga-barang" id="harga-product"><b>Rp. ${produk.price}</b></span>
            <hr />
    
            <h3 class="pilih" id="pilih-warna ">Pilih Warna :</h3>
            <div class="color-item">
              <button id="btn-color">Putih</button>
              <button id="btn-color">Hitam</button>
              <button id="btn-color">Abu - Abu</button>
            </div>
    
            <h3 class="pilih" id="pilih-ukuran">Pilih ukuran :</h3>
            <div class="ukuran">
              <button id="btn-ukuran">37</button>
              <button id="btn-ukuran">38</button>
              <button id="btn-ukuran">39</button>
              <button id="btn-ukuran">40</button>
              <button id="btn-ukuran">41</button>
              <button id="btn-ukuran">42</button>
            </div>
    
            <hr />
            <h3>Deskripsi</h3>
            <hr />
            <p id="deskripsi-produk">
            ${produk.description}
            </p>
          </div>
    
          <!-- ===================================================== -->
    
          <div class="card-bayar">
            <h3>Card Pembelian</h3>
    
            <h3 id="judul-barang">${produk.name}</h3>
            <hr />
    
            <div class="card-stock">
            <div class="card-stock-item">
              <button class="btnii"><i class="bx bx-minus card-item"></i></button>
              <span id="quantity">1</span>
              <button class="btnii"><i class="bx bx-plus card-item"></i></button>
            </div>
  
    
              <span>Stok : <b>Sisa 99</b></span>
            </div>
    
            <div class="total">
              <span>Subtotal</span>
              <span id="harga-product"><b>Rp. ${produk.price}</b></span>
            </div>
    
            <div class="btn-card">
              <a href=""><button class="btn-buy">+ Keranjang</button></a>
              <a href="checkout-produk.html"><button class="primary" onclick="addCart(${produk.id})">Beli Langsung</button></a>
            </div>
    
            <div class="icon-card-bayar">
              <a href="">
                <i class="bx bx-message-dots"></i>
                <span>Chat</span>
              </a>
              <a href="">
                <i class="bx bx-heart"></i>
                <span>Wistlist</span>
              </a>
              <a href="">
                <i class="bx bxs-share-alt"></i>
                <span>Share</span>
              </a>
            </div>
          </div>`;
      listProductHTML.appendChild(newProduct);
    });
  }
}

