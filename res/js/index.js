var urlArray = [
    "1vegan_neg.html",
    "1vegan_pos.html"
];

function randomUrl() {
    var randomNumber = Math.floor(Math.random() * urlArray.length);
    var newUrl = urlArray[randomNumber];
    window.location.href = newUrl;
}
