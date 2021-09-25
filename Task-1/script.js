var i = 0
var images = []
var time = 3000
images[0] = 'images/img/sunset-918555_1920.jpg';
images[1] = 'images/img/img-2.jpg';
images[2] = 'images/img/img-3.jpg';
images[3] = 'images/img/img-1.jpg';
images[4] = 'images/img/img-4.jpg';
images[5] = 'images/img/img-5.jpg';
function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;
