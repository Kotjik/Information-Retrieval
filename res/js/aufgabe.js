var urlArray = [
    "3vegan_neg.html",
    "3vegan_pos.html"
];

function randomUrl() {
    var randomNumber = Math.floor(Math.random() * urlArray.length);
    var newUrl = urlArray[randomNumber];
    window.location.href = newUrl;
}
