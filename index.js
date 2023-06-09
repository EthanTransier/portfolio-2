var scrolledUp = true;
var scrolledDown = false;
var gameStarted = false;

const clouds = ['./images/cloud (1).svg', './images/cloud-16-filled.svg', './images/cloud-20-solid.svg', './images/cloud-bold.svg', './images/cloud-filled.svg', './images/cloud.svg']
function randomVh() {
    return Math.floor(Math.random() * 4) + 12;
}

function randomTime() {
  return Math.random() * 10000 + 25000
}

console.log(screen.height * 0.23)

$(window).on('load', function(){ 
  $(this).scrollTop(0);


  for(var i = 0; i < 5; i++){
    $('<img>', {
        src: clouds[Math.floor(Math.random() * 6)],
        id: 'cloud' + i,
        class: 'cloud',
    }).css('height', randomVh() + 'vh').appendTo('.background');
  }
  
})
function fishInteract(){
  $(window).on('mousedown', function(){
  let rect1 = document.getElementById('hook').getBoundingClientRect();
  let NFrect2 = document.getElementById('normFish').getBoundingClientRect();
  let Srect2 = document.getElementById('shark').getBoundingClientRect();
  let Jrect2 = document.getElementById('jFish').getBoundingClientRect();
  let Swrect2 = document.getElementById('sFish').getBoundingClientRect();

    var normFishOverlap = !(
      rect1.right < NFrect2.left || 
      rect1.left > NFrect2.right || 
      rect1.bottom < NFrect2.top || 
      rect1.top > NFrect2.bottom
    )

    var sharkOverlap = !(
      rect1.right < Srect2.left || 
      rect1.left > Srect2.right || 
      rect1.bottom < Srect2.top || 
      rect1.top > Srect2.bottom
    )

    var jFishOverlap = !(
      rect1.right < Jrect2.left || 
      rect1.left > Jrect2.right || 
      rect1.bottom < Jrect2.top || 
      rect1.top > Jrect2.bottom
    )

    var sFishOverlap = !(
      rect1.right < Swrect2.left || 
      rect1.left > Swrect2.right || 
      rect1.bottom < Swrect2.top || 
      rect1.top > Swrect2.bottom
    )
  
  if(normFishOverlap == true){
    pageLocation = 2
    $('#projectsTabID').css({'height': '100vh', 'display': 'flex'})
    gameStarted = false;
    scrolledUp = true;
  
    $('.hook').animate({'top': 0,'left': window.innerWidth * .5}, 500)
    $('.hookLine').animate({'height': 0,'left': window.innerWidth * .5}, 500)

    setTimeout(function(){
      $('.hook').css('left', '45.5vw')
      $('.hook').css('top', '0')
      $('.hook').addClass('hookAnimation');
      $('.hookLine').css('height', 0)
      $('.hookLine').css('left', 0)
      $('.hookLine').css('top', '-30vh')
    }, 500)

    let normFishTop = document.getElementById('normFish').getBoundingClientRect().top;
    let normFishLeft = document.getElementById('normFish').getBoundingClientRect().left; 

    $('.normFish').removeClass('normFishAnimation');

    $('.normFish').css('top', normFishTop + vh(250))
    $('.normFish').css('left', normFishLeft)

    $('.normFish').animate({'top': 0, 'left': window.innerWidth * .5})
    $(window).off();
    
    document.getElementById('projectsTabID').scrollIntoView();
  }else if(sharkOverlap == true && normFishOverlap == false){
    pageLocation = 2
    $('#resumeTabID').css({'height': '100vh', 'display': 'flex'})
    gameStarted = false;
    scrolledUp = true;
  
    $('.hook').animate({'top': 0,'left': window.innerWidth * .5}, 500)
    $('.hookLine').animate({'height': 0,'left': window.innerWidth * .5}, 500)

    setTimeout(function(){
      $('.hook').css('left', '45.5vw')
      $('.hook').css('top', '0')
      $('.hook').addClass('hookAnimation');
      $('.hookLine').css('height', 0)
      $('.hookLine').css('left', 0)
      $('.hookLine').css('top', '-30vh')
    }, 500)

    let sharkTop = document.getElementById('shark').getBoundingClientRect().top;
    let sharkLeft = document.getElementById('shark').getBoundingClientRect().left;

    $('.shark').css('top', sharkTop + vh(250))
    $('.shark').css('left', sharkLeft)
    
    $('.shark').removeClass('sharkAnimation');

    $('.shark').animate({'top': 0, 'left': window.innerWidth * .5}, 500)
    console.log(vh(-30))
    $(window).off();
    
    document.getElementById('resumeTabID').scrollIntoView();
  }else if(jFishOverlap == true && sFishOverlap == false){
    pageLocation = 2
    $('#aboutTabID').css({'height': '100vh', 'display': 'flex'})
    gameStarted = false;
    scrolledUp = true;
  
    $('.hook').animate({'top': 0,'left': window.innerWidth * .5}, 500)
    $('.hookLine').animate({'height': 0,'left': window.innerWidth * .5}, 500)

    setTimeout(function(){
      $('.hook').css('left', '45.5vw')
      $('.hook').css('top', '0')
      $('.hook').addClass('hookAnimation');
      $('.hookLine').css('height', 0)
      $('.hookLine').css('left', 0)
      $('.hookLine').css('top', '-30vh')
    }, 500)

    let jFishTop = document.getElementById('jFish').getBoundingClientRect().top;
    let jFishLeft = document.getElementById('jFish').getBoundingClientRect().left;

    $('.jFish').css('top', jFishTop + vh(250))
    $('.jFish').css('left', jFishLeft)
    
    $('.jFish').removeClass('jFishAnimation');

    $('.jFish').animate({'top': 0, 'left': window.innerWidth * .5}, 500)
    console.log(vh(-30))
    $(window).off();
    
    document.getElementById('aboutTabID').scrollIntoView();
  }else if(sFishOverlap == true){
    pageLocation = 2
    $('#contactTabID').css({'height': '100vh', 'display': 'flex'})
    gameStarted = false;
    scrolledUp = true;
  
    $('.hook').animate({'top': 0,'left': window.innerWidth * .5}, 500)
    $('.hookLine').animate({'height': 0,'left': window.innerWidth * .5}, 500)

    setTimeout(function(){
      $('.hook').css('left', '45.5vw')
      $('.hook').css('top', '0')
      $('.hook').addClass('hookAnimation');
      $('.hookLine').css('height', 0)
      $('.hookLine').css('left', 0)
      $('.hookLine').css('top', '-30vh')
    }, 500)

    let sFishTop = document.getElementById('sFish').getBoundingClientRect().top;
    let sFishLeft = document.getElementById('sFish').getBoundingClientRect().left;

    $('.sFish').css('top', sFishTop + vh(250))
    $('.sFish').css('left', sFishLeft)
    
    $('.sFish').removeClass('sFishAnimation');

    $('.sFish').animate({'top': 0, 'left': window.innerWidth * .5}, 500)
    console.log(vh(-30))
    $(window).off();
    
    document.getElementById('contactTabID').scrollIntoView();
  }
})
}


window.addEventListener('keydown', function(e) {
  if(e.code == 32 && e.target == document.body) {
    e.preventDefault();
  } 
});

function vh(percent) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
}

function vw(percent) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (percent * w) / 100;
}


// select the element you want to add the event listener to
const element = document.querySelector('body');

var hookTop;

var hookRight;

var hookLineTop;

var array1 = [];

var pageLocation = 1;

// add the event listener
window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    if(gameStarted == false){
      
      pageLocation = 3
      gameStarted = true;
      startGame();
      fishInteract();
      scrolledDown = true;

      $('.normFish').addClass('normFishAnimation');
      $('.shark').addClass('sharkAnimation');
      $('.jFish').addClass('jFishAnimation');
      $('.sFish').addClass('sFishAnimation');

      $('.hookLine').css('transform', 'translate(-1vw, 1vh)')
      
      hookTop = document.getElementById('hook').getBoundingClientRect().top;

      array1.push(hookTop)

      let hookLeft = document.getElementById('hook').getBoundingClientRect().left;

      hookRight = document.getElementById('hook').getBoundingClientRect().right

      console.log(hookRight)

      $('.hookLine').css('left', hookRight)
      $('.hookLine').css('top', array1[0] - vh(30))
      
      $('.hook').css('top', hookTop)
      $('.hook').css('left', hookLeft)
      
      hookLineTop = document.getElementById('hookLine').getBoundingClientRect().top;
      let hookLineLeft = document.getElementById('hookLine').getBoundingClientRect().left;

      array1.push(hookLineTop)
      

      $('.hook').removeClass('hookAnimation');

      
      $('.hook').animate({'top': 2560,'left': window.innerWidth * .4445}, 750)

      $('.hookLine').animate({'left': window.innerWidth * .5, 'height': 2560 - array1[1]}, 750)
      console.log(hookLineTop)
      let animateHook = setTimeout(finishHookAnimation, 750)
      e.preventDefault();
    }
  }else if(e.keyCode == '40'){
    if(pageLocation == 3){
      document.getElementById('secondFishArea').scrollIntoView()
      $('.hook').animate({'top': vh(550),'left': window.innerWidth * .4445}, 750)

      $('.hookLine').animate({'left': window.innerWidth * .5, 'height': vh(550) - array1[1]}, 750)
      pageLocation = 4
    }
  }else if(e.keyCode == '38'){
    console.log('up arrow pressed')
    if(pageLocation == 4){
      $('.hook').animate({'top': 2560,'left': window.innerWidth * .4445}, 750)

      $('.hookLine').animate({'left': window.innerWidth * .5, 'height': 2560 - array1[1]}, 750)
      startGame();
    }
  }
});

function startGame(){
  pageLocation = 3;
  document.getElementById('beach').scrollIntoView();
}
var mouseX = window.innerWidth / 2;
var mouseY = window.innerHeight / 2;

$(document).mousemove( function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
 
});
function endScroll(){
  
}

var timer = null;
window.addEventListener('scroll', function() {
  if(timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      if(scrolledDown == true){
        endScroll();
      }
    }, 200);
}, false); 

function finishHookAnimation(){
  $('#resumeTabID').css({'height': '0', 'display': 'none'})
  $('#projectsTabID').css({'height': '0', 'display': 'none'})
  $('#aboutTabID').css({'height': '0', 'display': 'none'})
  $('#contactTabID').css({'height': '0', 'display': 'none'})

  $(window).on("click", function(){
     console.log(mouseX + " " + mouseY)

    $('.hookLine').css('transform', 'none')
    $('.hook').animate({'top': mouseY, 'left': mouseX}, 250)
    $('.hookLine').animate({'height': mouseY, 'top': '-30vh', 'left': (mouseX + $('.hook').width() - ($('.hookLine').width() * 2.3))}, 250)
    
  })
}

// let pauseAnimation = setInterval(function() {
//   $('.canoeImage').css('animation-play-state', 'paused')
//   $('path').css('animation-play-state', 'paused')
// }, 0)