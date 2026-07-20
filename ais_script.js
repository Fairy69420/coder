// ais_script.js
// this handles clicking the cards, adding up the points, and showing the result

var cards = document.querySelectorAll(".action-card");
var countText = document.getElementById("countText");
var scoreText = document.getElementById("scoreText");
var levelText = document.getElementById("levelText");
var messageText = document.getElementById("messageText");
var resetBtn = document.getElementById("resetBtn");

// the point ranges for each impact level

// 0 = nothing selected
// 1-6 = low
// 7-14 = medium
// 15+ = high

// background image for each level 
var backgroundImages = {
    low: "url('images/ais/bg-low.svg')",
    medium: "url('images/ais/bg-medium.svg')",
    high: "url('images/ais/bg-high.svg')"
};

// add a click event to every card
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
       
        this.classList.toggle("selected");
        updateResults();
    });
}

function updateResults() {
    var selectedCards = document.querySelectorAll(".action-card.selected");
    var total = 0;

    // add up the points from every selected card
    for (var i = 0; i < selectedCards.length; i++) {
        var points = Number(selectedCards[i].getAttribute("data-points"));
        total = total + points;
    }

    countText.innerHTML = selectedCards.length;
    scoreText.innerHTML = total;

    if (total === 0) {
        levelText.innerHTML = "-";
        messageText.innerHTML = "Click a card above to get started.";
        document.body.style.backgroundImage = "none";
    } else if (total <= 6) {
        levelText.innerHTML = "Low impact";
        messageText.innerHTML = "A good start! Try picking a few more actions.";
        document.body.style.backgroundImage = backgroundImages.low;
    } else if (total <= 14) {
        levelText.innerHTML = "Medium impact";
        messageText.innerHTML = "Nice, that would make a real difference.";
        document.body.style.backgroundImage = backgroundImages.medium;
    } else {
        levelText.innerHTML = "High impact";
        messageText.innerHTML = "Amazing! That's a big contribution to SDG 9.";
        document.body.style.backgroundImage = backgroundImages.high;
    }
}

// reset button clears everything
resetBtn.addEventListener("click", function () {
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove("selected");
    }
    updateResults();
});
