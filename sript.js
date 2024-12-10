let menu = document.querySelector(".menu");
let menuToggle = document.querySelector(".hamb");

menuToggle.addEventListener("click", function(e){
  e.preventDefault();
  menu.classList.toggle("show-menu");
  menuToggle.classList.toggle("active");
});

window.addEventListener('resize', function(){
  if (this.window.innerWidth > 375 && menu.classList.contains('show-menu')){
    menu.classList.remove('show-menu');
    menuToggle.classList.remove("active");
  }
})

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prevslide');
const nextButton = document.querySelector('.nextslide');
const slides = Array.from(slider.querySelectorAll('.sec1'));
const sliderCount = slides.length;
let sliderIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide(){
  sliderIndex = (sliderIndex - 1 + sliderCount) % sliderCount;
  updateSlider();
}
function showNextSlide(){
  sliderIndex = (sliderIndex + 1) % sliderCount;
  updateSlider();
}

function updateSlider(){
  slides.forEach((slider, index) => {
    if (index === sliderIndex){
      slider.style.display = 'block';
    } else{
      slider.style.display = 'none';
    }
  }); 
}
updateSlider();