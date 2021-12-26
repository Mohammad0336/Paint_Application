    //variables
    let painting = false;
    let draw_colour = "black";
    let line_size = 5;

    window.addEventListener("load", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    //Resizing
    canvas.height = 600;
    canvas.width = 960;
    
    function start(e){
        painting = true;
        draw(e);
    }

    function end(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if (!painting) return;
        ctx.lineWidth = line_size;
        ctx.lineCap = "round";
        ctx.strokeStyle = draw_colour;

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    //Event Listeners
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mousemove", draw);
});

    function erase(){
        draw_colour = "white";
        document.getElementById("colour").innerHTML = "Colour: " + "white";
    }

    function change_colour(element){
        draw_colour = element.style.color;
        document.getElementById("colour").innerHTML = "Colour: " + element.style.color;

    }

    function pencil(){
        draw_colour = "black";
        document.getElementById("colour").innerHTML = "Colour: " + "black";

    }

    function isize(){
        
        if (line_size < 30){
            line_size = line_size + 5;
        }
        document.getElementById("ssize").innerHTML = "Stroke size: " + line_size;
    }

    function dsize(){

        if(line_size > 5){
            line_size = line_size - 5;
        }
        document.getElementById("ssize").innerHTML = "Stroke size: " + line_size;
    }

