function uploadVideo(videoData, callback) {
    console.log("Uploading video");
    setTimeout(() => {
        console.log("Upload done -- " + videoData.title);
        callback(videoData);
    }, 3000);
}
function publishVideo(videoData, publishedCallBack) {
    console.log("publishing video");
    setTimeout(() => {
        console.log("publish done -- " + videoData.title);
        publishedCallBack(videoData);
    }, 2000);
}

function notifySubscriber(videoData) {
    console.log("notification sent -- " + videoData.title);
}

// uploadVideo();
// publishVideo();
// notifySubscriber();

const data = {
    title: "This is callback demo",
    descriptiopn: "Some desc about callback"
}

uploadVideo(data, (uploadedData) => {
    publishVideo(uploadedData, (publishedData) => {
        notifySubscriber(publishedData);
    })
})