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
        navText: ['<h3 class="text-center owlBtn owlBtn1"><i class="fa-solid fa-angle-right"></i></h3>',
                  '<h3 class="text-center owlBtn owlBtn2"><i class="fa-solid fa-angle-left"></i></h3>'],
        navElement:'span',
        // navContainer:1,
        // slideBy:'page',
        // dots:true,
        // dotsEach:true,
        // dotsData:true

        dots: true,
        // Type: Array
        // Default: [&#x27;next&#x27;,&#x27;prev&#x27;]
        responsive: {
            0: {
              items: 1
            },
            500: {
              items: 2
            },
            900: {
              items: 3
            }
          },
    });
});

document.getElementById('navMenu').addEventListener("click", function(){
    $('.menu').slideDown((700))
})

document.getElementById('x').addEventListener("click", function(){
    $('.menu').fadeOut((700))
})



// $.ajax({
//     url: "https://dummyjson.com/products",
//     success: async function(response) {   

//     }
// })


var data = []
async function getData(){
    var apiRes = await fetch('https://dummyjson.com/products');
    var finalRes = await apiRes.json();
    data = finalRes.products
    console.log(data)

    var cartoona = ``
    for(var i = 5; i < 13; i++){

        cartoona += `
        <div class="col-lg-3 mb-3">
            <div class="item">
                <div class="imgs">
                    <img class="thumbnail w-100" src="${data[i].thumbnail}">
                    <div class="others">
                        <div id="${data[i].id}" class="favourit favPro">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <div id="${data[i].id}" class="view">
                            <i id="${data[i].id}" class="fa-solid fa-eye"></i>
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
                    <h3>
                        <span>${data[i].title}</span>
                    </h3>
                    <p class="w-100">${data[i].description}</p>
                    <h4>$${data[i].price - (data[i].price /100*10)} <span>$${data[i].price}</span></h4> 
                    <a id="${data[i].id}" class="addPro">Add To Cart</a>
                </div>
            </div>
            </div>
        `
    }
    document.getElementById('allPros').innerHTML = cartoona
    slideImages()
    allProDisplayPopUp()
    sendIdToCart()
    sendIdToFavourit()
}
 getData()

var popUp = document.querySelector('.popUp')
async function displayPopUp(id){
    // popUp.style.display = 'block'
    $('.popUp').slideDown((500))
    $('.popUp').css('display','flex')

    var apiRes = await fetch(`https://dummyjson.com/products/${id}`);
    var product = await apiRes.json();
    // console.log(product)
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
                <a class="py-1 mt-1 mb-3 addPro">Add To Cart</a>

                <div class="iconFav favPro">
                    <i class="fa-solid fa-heart"></i>
                </div>
            </div>
        </div>
    </div>


    `
    document.getElementById('popRow').innerHTML = proHtml

    slideImages()
    sendIdToCart()
    sendIdToFavourit()
}

//hide popup
function hidePro(){
    // popUp.style.display = 'block'
    $('.popUp').slideUp((500))
    $('.popUp').css('display','flex')
}

function hideAlrt(){
    $('.alrt').fadeOut((500))
}
function DoneAlert(){
    // $('.alrt').css('display','flex')
    $('.alrt').slideDown( (500), () => {
        $('.alrt').fadeOut((1000))
    })
}

function errCartAlert(){
    // $('.alrt').css('display','flex')
    $('.errCartAlrt').slideDown( (500), () => {
        $('.errCartAlrt').fadeOut((2500))
    })
}

function errFavAlert(){
    // $('.alrt').css('display','flex')
    $('.errFavAlrt').slideDown( (500), () => {
        $('.errFavAlrt').fadeOut((2500))
    })
}


//slide between product sub images in product pop up
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

//popup for featured products section
function allProDisplayPopUp(){
    
    var view = document.querySelectorAll('.view')
    console.log(view.length)

    for(var i=0; i<view.length; i++){
        view[i].addEventListener('click', function(e){
            // console.log(e.target.id)
            var proId = e.target.id
            console.log(proId)
            displayPopUp(proId)
        })
    }
}

//cart functionality
localStorage.removeItem('cartIds')
var arrCartIds = []
if('cartIds' in localStorage){
    arrCartIds = JSON.parse(localStorage.getItem('cartIds'))
    console.log(arrCartIds)
}else{
    arrCartIds = []
    console.log(arrCartIds)
}

function sendIdToCart(){
    var addBtn = document.querySelectorAll('.addPro')
    // console.log(addBtn.length)
    for(var i=0; i<addBtn.length; i++){

        addBtn[i].addEventListener('click', function(e){
            var productsId = e.target.id
            if('cartIds' in localStorage){
                arrCartIds = JSON.parse( localStorage.getItem('cartIds'))

                if(arrCartIds.includes(productsId)){
                    console.log('mawgood')
                    // alert('This product already in cart')
                    errCartAlert()
                }else{
                    arrCartIds.push(productsId)
                    localStorage.setItem('cartIds', JSON.stringify(arrCartIds))
                    console.log('mesh mawgood')
                    // alert('Done')
                    DoneAlert()
                }
            }else{
                arrCartIds.push(productsId)
                localStorage.setItem('cartIds', JSON.stringify(arrCartIds))
                // alert('Done')
                DoneAlert()
            }
            console.log(arrCartIds)  
        })
    }

}

//favourit functionality
localStorage.removeItem('favIds')
var arrFavIds = []
if('favIds' in localStorage){
    arrFavIds = JSON.parse(localStorage.getItem('favIds'))
    console.log( 'favourite Ids : ' + arrFavIds)
}else{
    arrFavIds = []
    console.log('favourite Ids : ' + arrFavIds)
}

function sendIdToFavourit(){
    var addBtn = document.querySelectorAll('.favPro')
    // console.log(addBtn.length)
    for(var i=0; i<addBtn.length; i++){

        addBtn[i].addEventListener('click', function(e){
            var productsId = e.target.id
            if('favIds' in localStorage){
                arrFavIds = JSON.parse( localStorage.getItem('favIds'))

                if(arrFavIds.includes(productsId)){
                    console.log('mawgood')
                    // alert('This product already in favourite')
                    errFavAlert()
                }else{
                    arrFavIds.push(productsId)
                    localStorage.setItem('favIds', JSON.stringify(arrFavIds))
                    console.log('mesh mawgood')
                    // alert('Done')
                    DoneAlert()
                }
            }else{
                arrFavIds.push(productsId)
                localStorage.setItem('favIds', JSON.stringify(arrFavIds))
                // alert('Done')
                DoneAlert()
            }
            console.log(arrFavIds)  
        })
    }

}








// var setT = setInterval(function(){
//     var time = new  Date()
//     document.getElementById('time-deal').innerHTML = time.toLocaleTimeString()
//     // document.getElementById('time-deal').innerHTML = time.toLocaleString()
//     // document.getElementById('time-deal').innerHTML = time.toDateString()
//     // console.log( 'now : ' + time.getTime())

// }, 1000) 


let countDate = new Date('aug 10, 2023 00:00:00').getTime();

console.log( 'countDate : ' + countDate)
function countDown(){

    let now = new Date().getTime();
	gap = countDate - now;
    console.log( 'gap : ' + gap)
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
	let h = Math.floor((gap % (days)) / (hours));
	let m = Math.floor((gap % (hours)) / (minutes));
	let s = Math.floor((gap % (minutes)) / (seconds));

    // console.log('days : ' + d)
    // console.log('hours : ' + h)
    // console.log('minutes : ' + m)
    // console.log('seconds : ' + s)

    // console.log('test : ' + Math.floor((gap % (days)) / (hours)))
    // console.log('test : ' + (gap % (days)) / (hours) )

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    countDown()
},1000);