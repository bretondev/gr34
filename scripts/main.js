$(document).ready(function() {
    loadContent();
});

function loadContent() {
    $("#partie-a1").load("./chapters/GR34A1.html");
    $("#partie-a2").load("./chapters/GR34A2.html", loadPhotos);
}

function loadPhotos() {
    var photos = document.getElementsByTagName('img');
    for (let photo of photos) {
        photo.src = "https://gr34.s3.eu-west-3.amazonaws.com/" + photo.dataset.url;
    };
}