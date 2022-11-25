/* == IMAGE SLIDE SHOW FUNCTION == */
let i = 0; //start point
let time = 3000;

//Images List
let images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg'
];

//Change Image
function changeImage() {
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    }else {
        i = 0;
    }

    setTimeout('changeImage()', time);
}

window.onload = changeImage;