const clouds = ['./images/cloud (1).svg', './images/cloud-16-filled.svg', './images/cloud-20-solid.svg', './images/cloud-bold.svg', './images/cloud-filled.svg', './images/cloud.svg']
function randomVh() {
    return Math.floor(Math.random() * 4) + 12;
}

function randomTime() {
  return Math.random() * 10000 + 25000
}
$(window).on('load', function(){
    for(var i = 0; i < 5; i++){
        $('<img>', {
            src: clouds[Math.floor(Math.random() * 6)],
            id: 'cloud' + i,
            class: 'cloud',
        }).css('height', randomVh() + 'vh').appendTo('.background');
    }
})

 const delayAnimation = setTimeout(cloud0Animate, 1)

 function cloud0Animate(){
  for(let i=0; i < 5; i++){
    cloud0Animate2('cloud' + i)
    // console.log(duration)
    // document.getElementById('cloud' + i).style.marginLeft = '110vw';
    // setTimeout(function(){
    //   document.getElementById('cloud' + i).style.marginLeft = '-110vw'
    //   // setTimeout(function(){cloud0Animate()}, document.getElementById('cloud' + i).style.transitionDuration)
    // }, duration)
  }
  
  // const delayAnimation = setTimeout(cloud0Animate2, 40000);
}

function cloud0Animate2(cloudID){
  let element = document.getElementById(cloudID);
  let style = window.getComputedStyle(element);
  let duration = style.getPropertyValue('transition-duration');
  let newDuration = duration.replace('s', '') * 1000;
  console.log(newDuration)
  element.style.marginLeft = '110vw';
    setTimeout(function(){
      console.log('switch')
      element.style.marginLeft = '-110vw'
      setTimeout(function() {
        cloud0Animate2(cloudID)
      }, newDuration)
    }, newDuration)
}