
(function() {
    var selfieCam, takeSelfie, imageProcessor, selfies;
    function startup(){
        var selfieCam = document.getElementById('selfie-cam');
            takeSelfieButton = document.getElementById("takeSelfieButton"),
            imageProcessor = document.getElementById('image-processor');
            selfies = document.getElementById('selfies');


        navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
        
        if (navigator.getUserMedia) {
            navigator.getUserMedia({
                video:true,
                audio:false
            }, function (stream) {
                window.URL = window.URL || webkitURL;
                var streamURL = window.URL.createObjectURL(stream);
                selfieCam.src = streamURL;
                selfieCam.play();
            }, function (error) {
                console.warn(error);
            });    
        }   

        takeSelfieButton.addEventListener('click', takeSelfie)
    }
    function takeSelfie() {
        var context = imageProcessor.getContext('2d');
        context.drawImage(selfieCam, 0, 0, 640, 480);
        var imageURL = imageProcessor.toDataURL();

        var img = document.createElement('img');
        img.setAttribute('src', imageURL)
        selfies.appendChild(img);
}
window.addEventListener('load', startup);
})();