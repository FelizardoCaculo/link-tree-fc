if("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("Service Worker resgistered"))
            .catch(err => console.log("Service Worker not registered", err))
    })
}
window.addEventListener('beforeinstallprompt', (event) => {
    // Impedir que o mini-infobar apareça no celular.
    event.preventDefault();
    console.log('👍', 'beforeinstallprompt', event);
    // Esconder o evento para que possa ser acionado mais tarde.
    window.deferredPrompt = event;
    // Remover a classe 'oculta' do contêiner do botão de instalação.
    divInstall.classList.toggle('hidden', false);
  });
  butInstall.addEventListener('click', async () => {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    divInstall.classList.toggle('hidden', true);
  });
  window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    // Limpa o deferredPrompt para que possa ser coletado como lixo
    window.deferredPrompt = null;
  });

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