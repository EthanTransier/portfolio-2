

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
    e.preventDefault();
  }
});

function startGame(){
  console.log('start')
  window.scroll({
    top: 6000,
    left: 0,
    behavior: "smooth",
  });
}
