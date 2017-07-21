$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
});


$(document).ready(function(){
$('.main-iso').isotope({
    itemSelector: '.iso',
    layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav ul li').click(function(){
    $('.iso-nav ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.main-iso').isotope({
        filter: selector
    });
    return false;
});
});

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#282525',
    lineColor: '#4b4141'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);





/* Progress-Bar 1 */

function progressBar(){
  var prg = document.getElementById('progressBar');
  var counter = 5;
  var progressBar = 25;
  var id = setInterval(frame, 20);


function frame(){
  if(progressBar == 375 && counter == 75){
    clearInterval(id);
  } else{
    progressBar += 5;
    counter += 1;
    prg.style.width = progressBar + 'px';

  }
}
}

progressBar();


/* Progress-Bar 2 */

function progressBarr(){
  var prg = document.getElementById('progressBarr');
  var counter = 5;
  var progressBarr = 25;
  var id = setInterval(frame, 20);


function frame(){
  if(progressBarr == 400 && counter == 80){
    clearInterval(id);
  } else{
    progressBarr += 5;
    counter += 1;
    prg.style.width = progressBarr + 'px';

  }
}
}

progressBarr();


/* Progress-Bar 3 */

function progressBarrr(){
  var prg = document.getElementById('progressBarrr');
  var counter = 5;
  var progressBarrr = 25;
  var id = setInterval(frame, 20);


function frame(){
  if(progressBarrr == 325 && counter == 65){
    clearInterval(id);
  } else{
    progressBarrr += 5;
    counter += 1;
    prg.style.width = progressBarrr + 'px';

  }
}
}

progressBarrr();


/* Progress-Bar 4 */

function progressBarrrr(){
  var prg = document.getElementById('progressBarrrr');
  var counter = 5;
  var progressBarrrr = 25;
  var id = setInterval(frame, 20);


function frame(){
  if(progressBarrrr == 200 && counter == 40){
    clearInterval(id);
  } else{
    progressBarrrr += 5;
    counter += 1;
    prg.style.width = progressBarrrr + 'px';

  }
}
}

progressBarrrr();


/* counter-up js 1 */

var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  demical : '.',
  prefix : '',
  suffix : ''
};
var demo = new CountUp("counter", 0, 764, 0, 2, options);
demo.start();


/* counter-up js 2 */

var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  demical : '.',
  prefix : '',
  suffix : ''
};
var demo = new CountUp("counterr", 0, 1664, 0, 2, options);
demo.start();



/* counter-up js 3 */

var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  demical : '.',
  prefix : '',
  suffix : ''
};
var demo = new CountUp("counterrr", 0, 2964, 0, 2, options);
demo.start();



/* counter-up js 4 */

var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  demical : '.',
  prefix : '',
  suffix : ''
};
var demo = new CountUp("counterrrr", 0, 1564, 0, 2, options);
demo.start();
