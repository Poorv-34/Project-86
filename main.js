var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById('myAudio');

function new_image()
{

    fabric.Image.fromURL('https://th.bing.com/th/id/R8ad21dc042c00801a5df1e049a7da958?rik=JZvUQlt8KVaKuQ&riu=http%3a%2f%2fwww.mrgapartments.com%2fwp-content%2fuploads%2fhappy-Birthday.jpg&ehk=yKp2knLQDEzNFRlsdu8NB2I4SiY1LpELIfBI7BaBXps%3d&risl=&pid=ImgRaw' , function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });

}

function playSound(){
    x.play();
}