document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    navigator.splashscreen.hide();
    var playAudioButton = document.getElementById("buttonPlayAudio");
    playAudioButton.addEventListener("click", function() {
        test()
    }, false); 
}

// Audio player
var test = function () {
    media = new Media("media/SleepAway.mp3", onSuccess, onError);
    media.play({numberOfLoops: 1});           
};
var _pause = function () {
    media.pause();
};
    
var _stop = function () {
    media.stop();
};

// onSuccess Callback
function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback 
function onError(error) {
    alert('code: ' + error.code + '\n' + 
          'message: ' + error.message + '\n');
}