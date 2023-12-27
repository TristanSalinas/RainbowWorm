let res = 50;
let decayLenght= 30;



const container = document.querySelector("#container");
const resetButton = document.querySelector(".reset-button");
const resInput = document.querySelector("#res");

resInput.value = res;
console.log(resInput.value);

const wormLenght = document.querySelector("#worm-lenght");
wormLenght.value = decayLenght;
let pixelList = new Array; //2 dimensions array : pixel [type:Div, type:Int]


function fadeAll() {

    pixelList.forEach(pixel => {
        pixel[1] -= 1
        pixel[0].style.backgroundColor = randomColor(pixel[1]);

    });



}

function randomColor(fadelevel) {

    let red = Math.floor(Math.random()*255).toString();
    let green = Math.floor(Math.random()*255).toString();
    let blue = Math.floor(Math.random()*255).toString();

    return "rgba(" + red +"," + green + "," + blue + "," + (fadelevel/10).toString();


}

function init(){    
  

    for (i = 0 ; i < res; i++){
        const pixelCol = document.createElement("div");
        pixelCol.classList.add("pixel-col");
        container.append(pixelCol);

        
        for (j = 0; j < res; j++){
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixelCol.append(pixel);

            pixel.addEventListener("mouseover", function() {
                pixel.style.backgroundColor = randomColor(decayLenght);
                pixelList = pixelList.concat([[pixel, decayLenght]]);
                if (pixelList.length > decayLenght){
                    
                    pixelList = pixelList.slice(2);
                }
                fadeAll();

                 
                             
            });

            
      }
    }
    
}





resetButton.addEventListener("click", function(){
    res = resInput.value;
    decayLenght = wormLenght.value;
    allpixel = document.querySelectorAll(".pixel-col");
    allpixel.forEach( e => {
        e.remove();
    })
    
    init();
});


init();
