var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '101') 
	{
		new_image('frozne.png');
		console.log("e");
	}
	if(keyPressed == '97')
	{
		new_image('Anna.webp');
		console.log("a");
	}
	
	if(keyPressed == '111')
	{
		new_image('Olaf.png');
		console.log("o");
	}
	if(keyPressed == '107')
	{
		new_image('kristoff.png');
		console.log("k");
	}
	if(keyPressed == '115')
	{
		new_image('swen.png');
		console.log("s");
	}
	
}

