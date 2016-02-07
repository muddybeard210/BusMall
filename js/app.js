var imgStorage= [];
var pictureName = ['bag', 'banana', 'boots', 'cthulhu', 'dragon', 'pen', 'shark', 'sweep', 'unicorn', 'water_can', 'wine_glass', 'chair', 'scissors', 'usb'];
var totalClicks = 0;
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
  return Math.floor(Math.random() * (pictureName.length - 1));
}
imgCaller();

var index1;
var index2;
var index3;

var tracker = function () {
    index1 = getRandomIndex();
    var firstImage = document.getElementById('img1');
    firstImage.src = imgStorage[index1].path;


    index2 = getRandomIndex();
    var secondImage = document.getElementById('img2');
    secondImage.src = imgStorage[index2].path;

    index3 = getRandomIndex();
    var thirdImage = document.getElementById('img3');
    thirdImage.src = imgStorage[index3].path;
    if(index1 === index2 || index1 === index3 || index2 === index3 ) {
      tracker();
    }
}

tracker();

var img1Btn = document.getElementById('img1');
img1Btn.addEventListener('click', function(event) {
  event.preventDefault();
  imgStorage[index1].count ++;
  totalClicks ++;
  tracker();
});

var img2Btn = document.getElementById('img2');
img2Btn.addEventListener('click', function(event) {
  event.preventDefault();
  imgStorage[index2].count ++;
  totalClicks ++;
  tracker();
});

var img3Btn = document.getElementById('img3');
img3Btn.addEventListener('click', function(event) {
  event.preventDefault();
  imgStorage[index3].count ++;
  totalClicks ++;
  tracker();
});
