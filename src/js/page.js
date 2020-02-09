import $ from 'jquery';
import "slick-carousel";
import "@fancyapps/fancybox";
import {sendMail} from "sendmail.js"
// svg4everybody init
svg4everybody();

$('.slider').slick({
  dots: true,
  nextArrow:"<button type='button' class='slick-next'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='37' viewBox='0 0 20 37'><g><g><path fill='#fff' d='M19.989 18.547l-1.442 1.442-.047-.047L1.453 36.989.011 35.547 17.058 18.5.011 1.453 1.453.011 18.5 17.058l.047-.047 1.442 1.442-.047.047z'/></g></g></svg></button>",
  prevArrow:"<button type='button' class='slick-prev'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='37' viewBox='0 0 20 37'><g><g><path fill='#fff' d='M18.547.011l1.442 1.442L2.942 18.5l17.047 17.047-1.442 1.442L1.5 19.942l-.047.047-1.442-1.442.047-.047-.047-.047 1.442-1.442.047.047z'/></g></g></svg></button>"
});

let showBtn = document.querySelector('.order-form__show');

showBtn.addEventListener('click', function() {
  let field = document.getElementById("password");
  if (field.type === "password") {
    this.innerHTML = 'Hide';
    field.type = "text";
  } else {
    field.type = "password";
    this.innerHTML = 'Show';
  }
})

const form = document.querySelectorAll('.send-form');

for (var i = 0; i < form.length; i++) {
  form[i].addEventListener('submit', function(e){
      e.preventDefault();
      sendMail(this, 'assets/php/sendmail.php')
  });
}
