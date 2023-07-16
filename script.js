const videoElement = document.getElementById('video');
const button = document.getElementById('button')

//  Prompt, then playt to select a media stream, Pass to video elemen

async function seletMediaStream() {
    try {
        const mediaSteam = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaSteam;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }


    } catch (error) {

    }
}

button.addEventListener('click', async () => {
// Disable Button
button.disabled = true;

await videoElement.requestPictureInPicture();
});

// on load
seletMediaStream();