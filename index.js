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

$(window).on('load', function(){ 
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });


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
  
  if(normFishOverlap == true){
    $('#projectsTabID').css({'height': '100vh', 'display': 'flex'})
    gameStarted = false;
    scrolledUp = true;
  
    $('.hook').css({'top': 0,'left': 0})
    $('.hookLine').css({'top': 0,'left': 0})
    $(window).off();
    
    document.getElementById('projectsTabID').scrollIntoView();
  }else if(sharkOverlap == true && normFishOverlap == false){
    $('#resumeTabID').css({'height': '100vh', 'display': 'flex'})
    gameStarted = false;
    scrolledUp = true;
  
    $('.hook').css({'top': 0,'left': 0})
    $('.hookLine').css({'top': 0,'left': 0})
    $(window).off();
    
    document.getElementById('resumeTabID').scrollIntoView();
  }
})
}


window.addEventListener('keydown', function(e) {
  if(e.code == 32 && e.target == document.body) {
    e.preventDefault();
  } 
});

// select the element you want to add the event listener to
const element = document.querySelector('body');

// add the event listener
window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    if(gameStarted == false){
      gameStarted = true;
      startGame();
      fishInteract();
      scrolledDown = true;
      $('.hook').animate({'top': 2560,'left': window.innerWidth * .455}, 750)
      $('.hookLine').animate({'top': 2560,'left': window.innerWidth * .5}, 750)
      let animateHook = setTimeout(finishHookAnimation, 750)
      e.preventDefault();
    }
  }
});

function startGame(){
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
  $(window).on("click", function(){
    $('.hook').animate({'top': mouseY, 'left': mouseX})
    $('.hookLine').animate({'top': mouseY, 'left': (mouseX + $('.hook').width() - ($('.hookLine').width() * 2.3))})
  })
}
