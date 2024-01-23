function add(product,img,price){
    var images = img.slice(11)
    var row_cart = document.getElementById("row_cart")
    if(price > 0){
        var cart =`
                <div class="card custom-card ms-3 mt-3" style="width: 18rem;">
                    <img src="./image${images}" class="card-img-top" alt="Card image cap">
                    <div class="card-body">
                          <h5 class="card-title">${product}</h5>
                          <p class="card-text">${price}đ</p>
                        <button class="btn btn-danger">Đặt mua</button>
                    </div>
                  </div>`
        row_cart.innerHTML += cart;
    }else{
        alert("Vui lòng nhập số tiền lớn hơn 0"); 
    }
   
}
