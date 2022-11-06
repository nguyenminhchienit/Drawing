var color = document.querySelector("#color");
var eraser = document.querySelector("#eraser");
var decrease = document.querySelector("#decrease");
var increase = document.querySelector("#increase");
var sizeEle = document.querySelector("#size");
var save = document.querySelector("#save");
var clear = document.querySelector("#clear");
var canvas = document.querySelector("canvas");

var ctx = canvas.getContext('2d');

var pos1 = {
    x: 0,
    y: 0
}

var pos2 = {
    x: 0,
    y: 0
}

var isDrawing = false;
var colorPaint = "#000000"
var size = 10;
sizeEle.innerText = size;

document.addEventListener('mousedown', function(e){
    pos1 = {
        x: e.offsetX,
        y: e.offsetY
    }

    isDrawing = true;
})

document.addEventListener('mousemove', function(e){
    if(isDrawing){
        pos2 = {
            x: e.offsetX,
            y: e.offsetY
        }
        
        //ve outline
        ctx.beginPath();
        ctx.moveTo(pos1.x,pos1.y);
        ctx.lineTo(pos2.x,pos2.y);
        ctx.lineWidth = size * 2;
        ctx.strokeStyle = colorPaint;
        ctx.stroke();


        //ve hinh tron
        ctx.beginPath();
        ctx.arc(pos2.x, pos2.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = colorPaint;
        ctx.fill();
    
        pos1.x = pos2.x;
        pos1.y = pos2.y;
    }

})


document.addEventListener('mouseup', function(e){
    isDrawing = false;
})

color.addEventListener('change', function(e){
    colorPaint = e.target.value;
})

eraser.addEventListener("click", function(e){
    colorPaint = "#ffffff";
})

decrease.addEventListener("click", function(e){
    size -= 5;
    size = size > 5 ? size : 5;
    sizeEle.innerText = size;
})

increase.addEventListener("click", function(e){
    size += 5;
    size = size < 20 ? size : 20;
    sizeEle.innerText = size;
})

clear.addEventListener("click", function(e){
    ctx.clearRect(0,0,1800,800);
})

save.addEventListener("click", function(){
    var output = canvas.toDataURL('image.png');
    save.setAttribute("href", output);
})