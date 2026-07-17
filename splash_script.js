// splash_script.js
// this just controls the little countdown text and the skip button
// the actual redirect after 4 seconds is done by the meta tag in the html

var secondsLeft = 4;
var countdownText = document.getElementById("countdown");
var skipButton = document.getElementById("skipBtn");

var timer = setInterval(function () {
    secondsLeft = secondsLeft - 1;

    if (secondsLeft > 0) {
        countdownText.innerHTML = "Entering site in " + secondsLeft + "...";
    } else {
        countdownText.innerHTML = "Entering site now...";
        clearInterval(timer);
    }
}, 1000);

// when user clicks skip, stop the timer and go to home page straight away
skipButton.addEventListener("click", function () {
    clearInterval(timer);

    // remove the meta refresh so it can't redirect again after we leave
    var metaTag = document.querySelector("meta[http-equiv='refresh']");
    if (metaTag) {
        metaTag.remove();
    }

    window.location.href = "home.html";
});
