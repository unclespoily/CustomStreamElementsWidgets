let currentImage = "imageurlhere.png"; // Change this to the URL of the photo/GIF you'd like to use. MAKE SURE TO CHANGE THE CSS ###px values to match your image. 
let subscriberThreshold = getRandomThreshold();
let newSubscibers = 0;

function getRandomThreshold() {
    return Math.floor(Math.random() * 18) + 3; // This selects a random number between 3-20. You can change the range you want to use. Random number between 1-5 would be Math.random() * 5) + 1
}

// Listen to 'onEventReceived' event
window.addEventListener("onEventReceived", e => {
    // Check if event type is 'subscriber'
    if (e.detail.event.type === "subscriber") { // This is the type of event used to drive your alert. There are many different types of events. go to dev.streamelements.com for more information.
        newSubscibers++;
        if (newSubscibers >= subscriberThreshold) {
            $(".main-container").css("background-image", `url("${currentImage}")`);
            setTimeout(() => {
                $(".main-container").css("background-image", "none");
            }, 10000); // delay of 10 seconds; change this value to match how long you want the image to show up. This is in millisecconds. 
            newSubscibers = 0;
            subscriberThreshold = getRandomThreshold();
        }
    }
});
