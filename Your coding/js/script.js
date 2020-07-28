var Swiper = new Swiper('.swiper-container', {
	slidesPerGroup: 1,
    slidesPerView: 1.2,
    centeredSlides : true,
    spaceBetween:56,
    loop: true,
    autoplay: {
        delay:5000
	},
	breakpoints:{
		376:{
			slidesPerView:3.8,
			slidesPerGroup: 1,
			centeredSlides : true,
			spaceBetween:56,
			loop: true,
			autoplay: {
				delay:5000
			},
				}},
			
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
	})

const parentMenu = document.querySelectorAll(".faq__list > li > a");
for (let i = 0; i < parentMenu.length; i++){
	parentMenu[i].addEventListener("click",function(e){
		e.preventDefault();
	 this.nextElementSibling.classList.toggle("active");   
	})
   };


   $(function(){
	$('a[href^="#"]').click(function(){
		console.log("aaa");
	  var adjust = -70;
	  var speed = 400;
	  var href= $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top + adjust;
	  $('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
	});
  });

  $(function() {
    //始めにjQueryで送信ボタンを無効化する
    $('#form__submit').prop("disabled", true);

   $(function(){
  
$(document).ready(function () {

	const $submitBtn = $('#form__submit')
	$('#form input,#form textarea').on('change', function () {
	  if (
  
		$('#form input[type="text"]').val() !== "" &&
		$('#form input[type="email"]').val() !== "" &&
		$('#form input[type="checkbox"]').val() !== "" &&
		$('#form #check').prop('checked') === true

	  ) {
		$submitBtn.prop('disabled', false);
		console.log("111");
  
	  } else {
		$submitBtn.prop('disabled', true);
		$submitBtn.css('background-color','#333');
		console.log("222");
  
	  }
	});
   });
   });
});
$(function(){
    $("#button").click(function(){

		$("#toggle__open").slideToggle(200);
		});
});
