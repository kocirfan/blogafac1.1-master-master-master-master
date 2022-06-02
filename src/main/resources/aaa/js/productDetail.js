async function getProductDataDetail(id) {
    let url = "http://localhost:8080/auth/v1/product/products/productDetail.html/" + id;
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function renderProductDetail() {
    let products = await getProductDataDetail();
    let html = "";
    products.forEach((product) => {
      
      console.log(product);
      let htmlSegment = ` 
      
      <div class="row">
        <div class="col-12"> 
            <div class="mb-3 bg-info text-warning"></div>
            </div>
        
            <div class="col-3  mb-2 mt-2">
               <img class="img-thumbnail" id="productImage" src="${product.image}" alt="productImage" />
            </div>
            
            <div class="col-6 ">
              <div class="col-12 bg-dark text-white mb-3">${product.category}</div>
             <div class="text-uppercase"><a href=${"http://localhost:8080/auth/v1/product/products/productDetail.html/" + product.id}> ${product.name}</a>
             <ul>
                <li>
                  ${product.description}
                </li>
             </ul>
          </div>  
          </div>
        </div> 
     </div>  
        `;
      
    html += htmlSegment;
});

let container = document.querySelector("#productDetail");
container.innerHTML = html;
}

renderProductDetail();
