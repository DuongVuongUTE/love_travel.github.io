let menu_header = document.querySelector('.header-sidebar');
let slider = document.querySelector('.slider-bar')
let slider_close = document.querySelector('.btn-close-slider')

menu_header.addEventListener("click",()=>{
    slider.classList.add('active')
})
slider_close.addEventListener("click",()=>{
    slider.classList.remove('active')
})

var slider_range = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider_range.value;

slider_range.oninput = function() {
  output.innerHTML = this.value;
}