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
navigator.serviceWorker.register('/sreviceWorker.js').then(registration => {
    console.log("Service Worker resgistered");
    if(registrarion.installing){
        registration.installing.postMessage("Howdy from your installing page.");
    } else {
         err => {
  console.error("Installing the worker failed!", err);
         };
    }
}
/*
if("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
        navigator.serviceWorker.register("/serviceWorker.js")
            .then(res => console.log("Service Worker resgistered"))
            .catch(err => console.log("Service Worker not registered", err))            
    })
}
*/
