function openModal(src) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modalImg').src = src;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function playVideo(src) {
    var videoPlayer = document.createElement('video');
    videoPlayer.src = src;
    videoPlayer.controls = true;
    videoPlayer.autoplay = true;
    videoPlayer.setAttribute('style', 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999;');
    document.body.appendChild(videoPlayer);
    videoPlayer.addEventListener('click', function () {
        videoPlayer.pause();
        document.body.removeChild(videoPlayer);
    });
}

// Outras funções e eventos podem estar aqui

// Adiciona um evento de clique à camada de opacidade do modal
document.querySelector('.modal').addEventListener('click', function() {
    // Obtém o vídeo dentro do modal
    var video = this.querySelector('video');
    
    // Verifica se o vídeo está definido e se ele está pausado
    if (video && video.paused) {
        // Se estiver pausado, reproduz o vídeo
        video.play();
    }
});
