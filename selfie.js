function startup(){
    var selfieCam = document.getElementById('selfie-cam');

    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    
    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            video:true,
            audio:false
        }, function (stream) {
            window.URL = window.URL || webkitURL;
            var streamURL = window.URL.createObjectURL(stream);
            selfieCam.src =streamURL;
            selfieCam.play();
        }, function (error) {
            console.warn(error);
        });    
    }   
}
window.addEventListener('load', startup);