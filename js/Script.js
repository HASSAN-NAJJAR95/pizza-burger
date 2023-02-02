/*For Hide Input Text Products */
function myFunction() {
    document.getElementById("price1").style.display= "none";
    document.getElementById("price2").style.display= "none";
    document.getElementById("price3").style.display= "none";
  }
  function myFunction1() {
    document.getElementById("price1").style.display= "";
    document.getElementById("price2").style.display= "";
    document.getElementById("price3").style.display= "";
  }
/*TABS pizza & burger */
$(document).ready(function(){
    $('.tab_content').hide();
    $('.tab_content:first-child').show();
    $('.tabs li').click(function(){
        $('.tabs li').removeClass('active_1');
        $(this).addClass('active_1');
        const current_tab=$(this).attr('data-attr');
        $('.tab_content').hide();
        $('.'+current_tab).show();
        
    });
});

var video = document.querySelector("#video1");
function playpause() {
    if(video.paused){
        video.play();
        video2.pause();
    }
    else{
        video.pause();
    }
}

var video2 = document.querySelector("#videoo1");
function playpausee() {
    if(video2.paused){
        video2.play();
        video.pause();
    }
    else{
        video2.pause();
    }
}

/*Discounts pizza*/
var countDownDate = new Date("dec 23, 2024 22:34:00").getTime();
var x = setInterval(function() {
  var counterdown = document.querySelector("#discounts");
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  counterdown.innerHTML = " Days " + days + " | Hours " + hours + " | Minutes "
  + minutes + " | Seconds " + seconds ;
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#discounts").innerHTML = "Sorry, The Time For Discounts Is Over";
    $('.hide1').addClass('disabled');
  }
}, 1000);