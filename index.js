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
function displayPro(){
    // popUp.style.display = 'block'
    $('.popUp').slideDown((500))
    $('.popUp').css('display','flex')

}

function hidePro(){
    // popUp.style.display = 'block'
    $('.popUp').slideUp((500))
    $('.popUp').css('display','flex')
}




var crntImgList = document.querySelectorAll('.crntImg')
var thumbnail = document.getElementById('proThumbnail')

for(var i=0; i<crntImgList.length; i++){

    crntImgList[i].addEventListener('click', function(e){
        var imgSrc = e.target.getAttribute('src')
        thumbnail.setAttribute('src', imgSrc)       
    })
}
