if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(() => {
        console.log('Service Worker Registered');
    });
}

let deferredPrompt;
const installBanner = document.getElementById('installBanner');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBanner.style.display = 'block';
});

installBanner.addEventListener('click', () => {
    installBanner.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
    });
});

// Assurer que l'audio continue en arrière-plan
const audioPlayer = document.getElementById('player');

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        audioPlayer.play();
    }
});
