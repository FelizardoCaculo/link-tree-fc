/* == IMAGE SLIDE SHOW FUNCTION == */
let i = 0; //start point
let time = 3000;
//Images List
let images = [
    'image1.webp',
    'image2.webp',
    'image3.webp',
    'image4.webp',
    'image5.webp',
    'image6.webp',
    'image7.webp',
    'image8.webp',
    'image9.webp'
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
navigator.serviceWorker.register('/serviceWorker.js').then(registration => {
    console.log("Service Worker resgistered");
    if(registration.installing){
        registration.installing.postMessage("Hi from your installing page.");
    } else {
         err => {
    console.error("Installing the worker failed!", err);
         };
    }
})
if("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
        navigator.serviceWorker.register("/serviceWorker.js")
            .then(res => console.log("Service Worker resgistered"))
            .catch(err => console.log("Service Worker not registered", err));       
    });
}