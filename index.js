// $.ajax({
//     url: "https://reqres.in/api/users/1",
//     success: function(data) {}})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        item:3,
        loop:true,
        margin:10,
        // freeDrag:true,
        center:true,
        nav:true,
        navText: ['<h3 class="text-center owlBtn owlBtn1">Prev</h3>',
                  '<h3 class="text-center owlBtn owlBtn2">Next</h3>'],
        navElement:'span',
        // navContainer:1,
        // slideBy:'page',
        // dots:true,
        // dotsEach:true,
        // dotsData:true

        dots: true,
        // Type: Array
        // Default: [&#x27;next&#x27;,&#x27;prev&#x27;]


    });
});

document.getElementById('navMenu').addEventListener("click", function(){
    $('.menu').slideDown((700))
})

document.getElementById('x').addEventListener("click", function(){
    $('.menu').fadeOut((700))
})


var data = []   

$.ajax({
    url: "https://dummyjson.com/products",
    success: async function(response) {

       var finalRes = await response
    //    console.log(response)
       data = await finalRes
        console.log(data.products)

        var cartoona = ``
        for(var i = 0; i < 5; i++){
    
            cartoona += `
            <div >
                <div class="item">
                    <div class="imgs">
                        <img class="thumbnail" src="${data[i].thumbnail}"> 
                        <div class="others">
                            <div class="favourit">
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <div class="view">
                                <i class="fa-solid fa-eye"></i>
                            </div>
                            <div class="details">
                                <i class="fa-solid fa-share"></i>
                            </div>
                        </div>
                    </div>
                    <div class="contnt">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i> 
                        <span> (250 Reviews)</span>
                        <h3>${data[i].title}</h3>
                        <h4>$${data[1].price} <span>$18.99</span></h4> 
                        <a href="">Add To Cart</a>
                    </div>
                </div>
            </div>
            
            `
    
        }
    // document.getElementById('xxxxx').innerHTML = cartoona
    // console.log(cartoona)
    }})



    // async function get(){

    // }
    // document.getElementById('xxxxx').innerHTML = cartoona
    // console.log(cartoona)
    
//     async function getData(){
//         var apiRes = await fetch('https://dummyjson.com/products');
//         var finalRes = await apiRes.json();
//         console.log(finalRes.products)
//         data = await finalRes.products

//         var cartoona = ``
//         for(var i = 0; i < 5; i++){
    
//             cartoona += `
//             <div >
//                 <div class="item">
//                     <div class="imgs">
//                         <img class="thumbnail" src="${data[i].thumbnail}"> 
//                         <div class="others">
//                             <div class="favourit">
//                                 <i class="fa-solid fa-heart"></i>
//                             </div>
//                             <div class="view">
//                                 <i class="fa-solid fa-eye"></i>
//                             </div>
//                             <div class="details">
//                                 <i class="fa-solid fa-share"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="contnt">
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-regular fa-star"></i> 
//                         <span> (250 Reviews)</span>
//                         <h3>${data[i].title}</h3>
//                         <h4>$${data[1].price} <span>$18.99</span></h4> 
//                         <a href="">Add To Cart</a>
//                     </div>
//                 </div>
//             </div>
            
//             `
    
//         }
//     document.getElementById('xxxxx').innerHTML = cartoona
//     console.log(cartoona)

// }
//  getData()

var popUp = document.querySelector('.popUp')


async function displayPro(id){
    // popUp.style.display = 'block'
    $('.popUp').slideDown((500))
    $('.popUp').css('display','flex')

    var apiRes = await fetch(`https://dummyjson.com/products/${id}`);
    var product = await apiRes.json();
    console.log(product)
    // data = await finalRes.products
    // console.log(data)

    var subImages =  ``
     for(var i=0; i<product.images.length; i++){
        subImages += `
        <img class="crntImg" src="${product.images[i]}">
        `
    }

    var stars =  ``
     for(var i=0; i<product.rating-1; i++){
        stars += `
        <i class="fa-solid fa-star mx-1"></i>
        `
    }

    // <img class="crntImg" src="${product.images[0]}">
    // <img class="crntImg" src="${product.images[1]?product.images[1]:product.images[0]}">
    // <img class="crntImg" src="${product.images[2]?product.images[2]:product.images[0]}">
    // <img class="crntImg" src="${product.images[3]?product.images[3]:product.images[0]}">
    // <img class="crntImg" src="${product.images[4]?product.images[4]:product.images[0]}"></img>

    var proHtml = `
                    
    <div class="col-lg-6">
        <div class="text-center">
            <div class="popImage">
                <img id="proThumbnail" src="${product.thumbnail}">
            </div>
            <div id="popImgList" class="popImgList">
                ${subImages}
            </div>
        </div>
    </div>

    <div class="col-lg-6 mt-4">
        <div class="pro-info">
            <h2><strong><span class="h1 details-title">${product.title} </span> <br/> ( <span class="details-category">${product.category} </span> -  <span class="details-brand">${product.brand}</span> )</strong></h2>
            <p class="details-description">${product.description}</p>
            <p><strong>Discount :</strong> <span>12.96</span> %</p>
            <p><strong>Rating : </strong> 
                <span class="mx-1">${product.rating}</span>
                ${stars}
                <i class="fa-regular fa-star"></i>
            </p>
            <p><strong>Price :</strong> <span>${product.price - 50}</span> $ Instead Of 
                <span class="pricDiscount mx-1 ">${product.price}</span> $
            </p>
            <p><strong><samp>${product.stock}</samp> Pieces In Stock</strong></p>
            
            <div class="d-flex justify-content-between">
                <a class="py-1 mt-1 mb-3">Add To Cart</a>

                <div class="iconFav">
                    <i class="fa-solid fa-heart"></i>
                </div>
            </div>
        </div>
    </div>


    `
    document.getElementById('popRow').innerHTML = proHtml

    slideImages()
}

function hidePro(){
    // popUp.style.display = 'block'
    $('.popUp').slideUp((500))
    $('.popUp').css('display','flex')
}



function slideImages(){

    var crntImgList = document.querySelectorAll('.crntImg')
    var thumbnail = document.getElementById('proThumbnail')
    
    for(var i=0; i<crntImgList.length; i++){
    
        crntImgList[i].addEventListener('click', function(e){
            var imgSrc = e.target.getAttribute('src')
            thumbnail.setAttribute('src', imgSrc)       
        })
    }
}

function x(event){
    console.log(event.target.id)
}

// addBtn.addEventListener('click',function(){
//     console.log('hello')
// })
// localStorage.removeItem('cartIds')
var arrCartIds = []
if(localStorage.getItem('cartIds') != null){
    var arr = localStorage.getItem('cartIds')
    arrCartIds = JSON.parse(arr)
    // console.log(arrCartIds)
}else{
    arrCartIds = []
}
function sendIdToCart(){
    var addBtn = document.querySelectorAll('.addPro')
    for(var i=0; i<addBtn.length; i++){
        
        // console.log(addBtn[i])
        addBtn[i].addEventListener('click', function(e){
            var productsId = e.target.id

            if(arrCartIds.length == null){
                for(var i=0; i<arrCartIds.length; i++){
                    // if(productsId == arrCartIds[i]){
                    //     console.log('mawgood')
                    // }else{
                        
                    //     arrCartIds.push(productsId)
                    //     localStorage.setItem('cartIds', JSON.stringify(arrCartIds))
                    // }
                    // console.log(arrCartIds.length) 
                    console.log('zerooooo') 
                }
            }else{
                console.log('mesh zero')
            }

            // console.log(arrCartIds)
            // var imgSrc = e.target.getAttribute('src')
            // thumbnail.setAttribute('src', imgSrc)  
        })
    }

}
sendIdToCart()