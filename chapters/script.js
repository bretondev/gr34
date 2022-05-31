

var photos = document.getElementsByTagName('img');

for (let photo of photos) {
    photo.src = "https://gr34.s3.eu-west-3.amazonaws.com/" + photo.dataset.url;
};