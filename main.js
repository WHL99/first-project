const tarot = new Tarot()

//all these functions will be called by the P5 library
function preload() {

    tarot.preload()
  
    console.log('test')
}


function setup() {
    createCanvas(WIDTH, HEIGHT);
   
    angleMode(DEGREES)


}

function draw() {
    tarot.draw()
    
}

function keyPressed() {
    if (keyCode === 32) {
        
        tarot.shuffleCard = !tarot.shuffleCard
    }

    
  
}