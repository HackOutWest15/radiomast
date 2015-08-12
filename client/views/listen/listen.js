
    // // Wait for Cordova to load
    // //
    // document.addEventListener("deviceready", onDeviceReady, false);

    // // Record audio
    // //
    // mediaRec;
    // audioFile = '';
    // reader;

    // function printFile() {
    //   reader.onloadend = function(evt) {
    //     console.log(evt.target.result);
    //   };
    //   reader.readAsDataURL(file);
    // };

    // var fail = function(evt) {
    //     console.log(error.code);
    // };

    // var gotFile = function(entry) {
    //     console.log('aklsdjalksdjlakdjs');
    //     audioFile = entry.file;
    //     console.log(reader.readAsDataURL(audioFile));
    // };

    // function recordAudio() {
    //     var src = "myrecording13378.m4a";

    //     mediaRec = new Media(src, onSuccess, onError);

    //     resolveLocalFileSystemURL(cordova.file.tempDirectory, function(entry) {
    //       console.log(entry);
    //       entry.getFile('myrecording13378.m4a', null, gotFile, function(e){console.log(e)});
    //     });

    //     // Record audio
    //     mediaRec.startRecord();

    //     // Stop recording after 10 sec
    //     var recTime = 0;
    //     var recInterval = setInterval(function() {
    //         recTime = recTime + 1;
    //         setAudioPosition(recTime + " sec");
    //         if (recTime >= 200) {
    //             clearInterval(recInterval);
    //             mediaRec.stopRecord();
    //         }
    //     }, 100);
    // }

    // // Cordova is ready
    // //
    // function onDeviceReady() {
    //   reader = new FileReader();
    //   recordAudio();
    // }

    // // onSuccess Callback
    // //
    // function onSuccess() {
    //     console.log("recordAudio():Audio Success");
    // }


    // function gotFileEntry(fileEntry) {
    //     console.log(file.size);
    //     //fileEntry.file(gotFile, fail);
    // }

    // function fail(error) {
    //     console.log(error.code);
    // }
    // // onError Callback
    // //
    // function onError(error) {
    //     alert('code: '    + error.code    + '\n' +
    //           'message: ' + error.message + '\n');
    // }

    // // Set audio position
    // //
    // function setAudioPosition(position) {
    //     document.getElementById('audio_position').innerHTML = position;
    // }



    // function gotFS(fs) {
    //     fileSystem = fs;
    // }

    // function gotFileEntry(fileEntry) {
    //     console.log(file.size);
    //     //fileEntry.file(gotFile, fail);
    // }

    // function gotFile(file){
    //     readDataUrl(file);
    //     readAsText(file);
    // }

    // function readDataUrl(file) {
    //     var reader = new FileReader();
    //     reader.onloadend = function(evt) {
    //         console.log("Read as data URL");
    //         console.log(evt.target.result);
    //     };
    //     reader.readAsDataURL(file);
    // }

    // function readAsText(file) {
    //     var reader = new FileReader();
    //     reader.onloadend = function(evt) {
    //         console.log("Read as text");
    //         console.log(evt.target.result);
    //     };
    //     reader.readAsText(file);
    // }

    // function fail(error) {
    //     console.log(error.code);
    // }