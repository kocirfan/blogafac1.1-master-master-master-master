
//"http://127.0.0.1:5500/productDetail.html?id=" ;


async function getProductDataDetail () {
        let url = "http://localhost:8080/auth/v1/product/products/?id="
        try {
          let res = await fetch(url);
          return await res.json();
         
        } catch (error) {
          console.log(error);
        }
      }
      async function renderProductDetail() {
        let products = await getProductDataDetail();
        products.map(getID);
        function getID(simdi , event ){
          ID = simdi.id;
          //console.log(ID)
          fetch("http://localhost:8080/auth/v1/product/products/?id=" + ID).then(
            response  => response.json()
          ).then(data => {
            data.forEach(dt =>{
              console.log(dt.id)
              let html = "";
           if(ID == dt.id){
                let htmlSegment = ` 
          
                <div class="row">
                  <div class="col-12"> 
                      <div class="mb-3 bg-info text-warning"></div>
                      </div>
                  
                      <div class="col-3  mb-2 mt-2">
                         <img class="img-thumbnail" id="productImage" src="${dt.image}" alt="productImage" />
                      </div>
                      
                      <div class="col-6 ">
                        <div class="col-12 bg-dark  mb-3"><a class=" text-white stretched-link"  href="#">${dt.category.name} </a>
                      
                        </div>
                       <div class="text-uppercase"> ${dt.name}
                       <ul>
                          <li>
                            ${dt.description}
                          </li>
                       </ul>
                       <div></div>
                       <button class="btn btn-success btn-sm"><a class="text-white"href="sepet.html">SEPETE EKLE</a> </button>
                    </div>  
                    </div>
                  </div> 
               </div>  
                  `;html += htmlSegment;
                  
              }else{
                return null
              }
              let container = document.querySelector("#productDetail");
              container.innerHTML = html;
              
            })
          })
         event.preventDefault();
        }

        
    }
    
    renderProductDetail();



    /* 
    
    bilgisayar: https://productimages.hepsiburada.net/s/199/1500/110000170364823.jpg
    telefon: https://productimages.hepsiburada.net/s/32/500/10352568139826.jpg
    
    */