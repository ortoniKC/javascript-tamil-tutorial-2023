const data = {
    title: "This is callback demo",
    descriptiopn: "Some desc about callback"
}
function notifySubscriber(videoData) {
    console.log("notification sent -- " + videoData.title);
}

function uploadedVideo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isUpoaded = !true;
            if (isUpoaded) {
                resolve("Upload done")
            } else {
                reject("Upload failed")
            }
        }, 3000);
    })
}

function publishVideo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isPublished = true;
            if (isPublished) {
                resolve("Piublish done")
            } else {
                reject("Piublish failed")
            }
        }, 1500);
    })
}

// uploadedVideo()
//     .then((uploadedStatus) => {
//         console.log(uploadedStatus);
//         return publishVideo();
//     })
//     .then((publishStatus) => {
//         console.log(publishStatus);
//         notifySubscriber(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })


async function videoUploadProcess() {


    try {
        const uploadStatus = await uploadedVideo();
        console.log(uploadStatus);
        const publishStatus = await publishVideo();
        console.log(publishStatus);
        notifySubscriber(data);

    } catch (error) {
        console.log(error);
    }
}

videoUploadProcess();