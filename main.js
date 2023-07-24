var canvas= new fabric.Canvas("myCanvas");

player_x=500;
player_y=300;

block_width=40;
block_height=40;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x

        });
        canvas.add(player_object);
    });

}

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x

        });
        canvas.add(player_object);
    });

}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
      block_image_object = Img;
         block_image_object.scaleToWidth(block_width);
          block_image_object.scaleToHeight(block_height); 
          block_image_object.set({ top:player_y, left:player_x });
           canvas.add(block_image_object);
    });
     }

     window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true&&keyPressed=="80"){
console.log("SHIFT AND P PRESSED TOGETHER");
block_height=block_height+10;
console.log("THE HEIGHT OF BLOCK INCREASED");
block_width=block_width+10;
console.log("THE WIDTH OF BLOCK INCREASED");
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey==true&&keyPressed=="77"){
    console.log("SHIFT AND M PRESSED TOGETHER");
    block_height=block_height-10;
    console.log("THE HEIGHT OF BLOCK DICREASED");
    block_width=block_width-10;
    console.log("THE WIDTH OF BLOCK DICCREASED");
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
    }
    
if(keyPressed=="38"){
    up();
    console.log("up");
}

if(keyPressed=="40"){
    down();
    console.log("down");
}

if(keyPressed=="39"){
    right();
    console.log("right");
}

if(keyPressed=="37"){
    left();
    console.log("left");
}

if(keyPressed=="87"){
    new_image("wall.jpg");
    console.log("w");
}

if(keyPressed=="67"){
    new_image("cloud.jpg");
    console.log("c");
}

if(keyPressed=="68"){
    new_image("dark_green.png");
    console.log("d");
}

if(keyPressed=="71"){
    new_image("ground.png");
    console.log("g");
}

if(keyPressed=="76"){
    new_image("light_green.png");
    console.log("l");
}

if(keyPressed=="82"){
    new_image("roof.jpg");
    console.log("r");
}

if(keyPressed=="84"){
    new_image("trunk.jpg");
    console.log("t");
}

if(keyPressed=="85"){
    new_image("unique.png");
    console.log("u");
}

if(keyPressed=="89"){
    new_image("yellow_wall.png");
    console.log("y");
}



}

function up(){
    if(player_y>0){
        player_y=player_y-block_height;
        console.log("block_height="+block_height);
        console.log("WHEN UP ARROW KEY IS PRESSED,X"+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=600){
        player_y=player_y+block_height;
        console.log("block_height="+block_height);
        console.log("WHEN DOWN ARROW KEY IS PRESSED,X"+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=800){
        player_x=player_x+block_width;
        console.log("block_width="+block_width);
        console.log("WHEN RIGHT ARROW KEY IS PRESSED,X"+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>0){
        player_x=player_x-block_width;
        console.log("block_width="+block_width);
        console.log("WHEN LEFT ARROW KEY IS PRESSED,X"+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
