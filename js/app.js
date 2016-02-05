var imgStorage= [];
var pictureName = ['bag', 'banana', 'boots', 'cthulhu', 'dragon', 'pen', 'shark', 'sweep', 'unicorn', 'water_can', 'wine_glass', 'chair', 'scissors', 'usb'];
// var pictureNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function ImgGrab(name, path) {
  this.pic = name;
  this.path = path;
  this.count = 0;
  imgStorage.push(this);
}

var imgCaller = function () {
  for (var i = 0; i < pictureName.length; i += 1){
    new ImgGrab(pictureName[i], 'imgs/' + pictureName[i] + '.jpg');
  }
}



getRandomIndex = function() {
  return Math.floor((Math.random() * (14 - 1) + 1));
}

var tracker = function () {
    imgCaller();
    getRandomIndex();
    var firstImage = document.getElementById('img1');
    for (var i = 0; i < pictureName.length; i += 1){
      firstImage.src = imgStorage[getRandomIndex()].path;

    };
    getRandomIndex()
    var secondImage = document.getElementById('img2');
    for (var i = 0; i < pictureName.length; i += 1){
      secondImage.src = imgStorage[getRandomIndex()].path;
    };
    getRandomIndex()
    var thirdImage = document.getElementById('img3');
    for (var i = 0; i < pictureName.length; i += 1){
      thirdImage.src = imgStorage[getRandomIndex()].path;
    };
}
tracker();

var btnEl = document.getElementById('imgClick');

btnEl.addEventListener('click', function(event) {
  event.preventDefault();
  tracker();
});
