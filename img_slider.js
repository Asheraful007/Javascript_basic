
var photos = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg"]

var imgTag = document.querySelector('img');

var i = 0;
function next(){
    i++
    if(i >= photos.length ){
        i = 0;
        imgTag.src= photos[i];
    }
     else{
         imgTag.src= photos[i];
     }
    
}
function prev(){
    i--
    if( i < 0 ){
        i = photos.length - 1;
        imgTag.src= photos[i];
    }
     else{
         imgTag.src= photos[i];
     }

}