document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    loadStudents();

    $('#camera-btn').click(getPicture);
    $('#addPicture').click(sendPictureRequest);
}
