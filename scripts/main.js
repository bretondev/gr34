$(document).ready(function() {
    loadNavigationBar();
    loadPhotos();
});

function loadNavigationBar() {
    $("#sidebar").load("navigationBar.html");
}

function loadPhotos() {
    var photos = document.getElementsByTagName('img');
    for (let photo of photos) {
        photo.src = "https://gr34.s3.eu-west-3.amazonaws.com/" + photo.dataset.url;
    };
}