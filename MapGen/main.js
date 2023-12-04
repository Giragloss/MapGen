window.onresize = function(){
    location.reload();
};

async function setup(){ 
    widthScreen = document.querySelector('body #total').clientWidth + 200;
    heightScreen = document.querySelector('body #total').clientHeight;

    document.querySelector('body #total').remove()

    createCanvas(widthScreen, heightScreen);
    background(200);
}

let configs = {
    increment: 0.01,
    start: 0
}

async function draw(){
    loadPixels()

    offsetX = configs.start
    for(x=0; x<width; x++){
        offsetY = configs.start
        for(y=0; y<innerHeight; y++){
            index = (x+y*width)*4;
            noiseOffset = noise(offsetX, offsetY);

            cor = valorParaCorRGB(noiseOffset);

            pixels[index + 0] = cor[0]
            pixels[index + 1] = cor[1]
            pixels[index + 2] = cor[2]
            pixels[index + 3] = 255;

            offsetY += configs.increment;

        }

        offsetX+= configs.increment;
    }
    
    updatePixels();
}

function valorParaCorRGB(valor) {
    r = valor*255
  
    return [r, r, r];
  }