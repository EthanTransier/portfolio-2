const clouds = ['./images/cloud (1).svg', './images/cloud-16-filled.svg', './images/cloud-20-solid.svg', './images/cloud-bold.svg', './images/cloud-filled.svg', './images/cloud.svg']
function randomVh() {
            return Math.floor(Math.random() * 12) + 8;
        }
$(window).on('load', function(){
    console.log('start script')
    
    for(var i = 0; i < 5; i++){
        console.log(clouds[Math.floor(Math.random() * 6)])
        
        $('<img>', {
            src: clouds[Math.floor(Math.random() * 6)],
            id: i,
            class: 'cloud',
        }).css('height', randomVh() + 'vh').appendTo('.background');
        
        
        
        
        // console.log($('#i'))
        // $('#i').css()
    }
})