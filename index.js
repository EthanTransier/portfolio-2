

const clouds = ['./images/cloud (1).svg', './images/cloud-16-filled.svg', './images/cloud-20-solid.svg', './images/cloud-bold.svg', './images/cloud-filled.svg', './images/cloud.svg']
function randomVh() {
    return Math.floor(Math.random() * 4) + 12;
}

function randomTime() {
  return Math.random() * 10000 + 25000
}

$(window).on('load', function(){ 
  console.log('load');
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

$(window).on('mousedown', function(){
  let rect1 = document.getElementById('hook').getBoundingClientRect();
    let rect2 = document.getElementById('normFish').getBoundingClientRect();
    var overlap = !(
      rect1.right < rect2.left || 
      rect1.left > rect2.right || 
      rect1.bottom < rect2.top || 
      rect1.top > rect2.bottom)
    console.log(overlap)
  
  if(overlap == true){
    window.scroll({
    top: -800,
    left: 0,
    behavior: "smooth",
  });
  }
})

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
    startGame();
    endScroll();
    e.preventDefault();
  }
});

function startGame(){
  console.log('start')
  window.scroll({
    top: 2360,
    left: 0,
    behavior: "smooth",
  });
}

function endScroll(){
  var mouseX;
var mouseY;
$(document).mousemove( function(e) {
   mouseX = e.pageX; 
   mouseY = e.pageY;
});
$('.hook').css({'top': 0,'left': 0})
$(window).mousemove(function(){
  $('.hook').css({'top':mouseY,'left':mouseX}).fadeIn('slow');
});

}

