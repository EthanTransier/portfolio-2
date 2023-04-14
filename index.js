const clouds = ['./images/cloud (1).svg', './images/cloud-16-filled.svg', './images/cloud-20-solid.svg', './images/cloud-bold.svg', './images/cloud-filled.svg', './images/cloud.svg']
function randomVh() {
    return Math.floor(Math.random() * 4) + 12;
}

function randomTime() {
  return Math.random() * 10000 + 25000
}

// add an event listener to the window object
window.addEventListener('load', function() {
  // disableScroll();
  // scroll to the top of the page
  window.scroll(0, 0);
});

$(window).on('load', function(){ 
  
  for(var i = 0; i < 5; i++){
    $('<img>', {
        src: clouds[Math.floor(Math.random() * 6)],
        id: 'cloud' + i,
        class: 'cloud',
    }).css('height', randomVh() + 'vh').appendTo('.background');
  }
})

//  const delayAnimation = setTimeout(cloud0Animate, 1)
//  let cloudTimes = [];
//  let cloudTimeout = [];

//  function cloud0Animate(){
//   cloudTimes = [];
//   cloudTimeout = [];
//   for(let i=0; i < 5; i++){
//     if(i == 1 || i == 3){
//       document.getElementById('cloud' + i).style.marginLeft = '-75vw'
//     }else{
//       document.getElementById('cloud' + i).style.marginLeft = '105vw'      
//     }
    
//     cloudTimes.push(window.getComputedStyle(document.getElementById('cloud' + i)).getPropertyValue('transition-duration').replace('s', '') * 1000)
//     cloudTimeout.push(setTimeout(function(){
//       cloud0Animate2('cloud' + i)
//     }, cloudTimes[i])) 
//   }
// }

// function cloud0Animate2(cloudID){
//   if(cloudID.replace('cloud', '') == 1 || cloudID.replace('cloud', '') == 3){
//     document.getElementById(cloudID).style.marginLeft = '105vw'
//   }else{
//     document.getElementById(cloudID).style.marginLeft = '-30vw'
//   }

//   cloudTimeout.push(setTimeout(function(){
//     cloud0Animate3(cloudID)
//   }, cloudTimes[cloudID.replace('cloud', '')])) 
// }

// function cloud0Animate3(cloudID){
//   if(cloudID.replace('cloud', '') == 1 || cloudID.replace('cloud', '') == 3){
//     document.getElementById(cloudID).style.marginLeft = '-30vw'
//   }else{
//     document.getElementById(cloudID).style.marginLeft = '105vw'
//   }

//   cloudTimeout.push(setTimeout(function(){
//     cloud0Animate2(cloudID)
//   }, cloudTimes[cloudID.replace('cloud', '')])) 
// }

window.addEventListener('keydown', function(e) {
  if(e.code == 32 && e.target == document.body) {
    e.preventDefault();
  } 
});

// select the element you want to add the event listener to
const element = document.querySelector('body');

// add the event listener
element.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    // play your desired action here, for example:
    console.log('The spacebar was pressed!');
    startGame();
  }
});

function disableScroll() {
  // disable scroll wheel on all devices
  document.body.addEventListener('wheel', function(event) {
    event.preventDefault();
  }, {passive: false});

  // disable touch scroll on mobile devices
  document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
  }, {passive: false});
}


function startGame(){
  window.scroll({
    top: 900,
    left: 0,
    behavior: "smooth",
  });
}

// function pauseOceanAnimation(){
//   const paths = document.getElementsByClassName('oceanPath');
//   console.log(paths)
  
//   for(let i = 0; i < paths.length; i++){
//     paths[i].style.animationPlayState = "paused"
//   }
// }
// setTimeout(pauseOceanAnimation, (7000/4) * 4)
// pauseOceanAnimation()