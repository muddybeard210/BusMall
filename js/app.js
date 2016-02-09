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
var tableLabels = function() {
    for (i = 0; i < pictureName.length; i += 1) {
    pictureName[i].pic + ', '
  }
}

getRandomIndex = function() {
  return Math.floor(Math.random() * (pictureName.length));
}

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
var chartDestroyer = function() {

}
var hideChart = document.getElementById('myChart')
var resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', function(){
  totalClicks = 0;
  btnFunc();
  hideChart.className = 'hidden'
 });

var btnFunc = function() {
  var eventRemover = function() {
    img1Btn.removeEventListener('click', img1btnFunc);
    img2Btn.removeEventListener('click', img2btnFunc);
    img3Btn.removeEventListener('click', img3BtnFunc);
  }

  var img1btnFunc = function() {
    imgStorage[index1].count ++;
    if (totalClicks < 15) {
      totalClicks += 1;
      tracker();
    } else {
      eventRemover();
      charty();
      myChart.className=''
    }
  }

  var img2btnFunc = function() {
    imgStorage[index2].count ++;
    if (totalClicks < 15) {
      totalClicks += 1;
      tracker();
    } else {
      eventRemover();
      charty();
      myChart.className=''
    }
  }

  var img3BtnFunc = function() {
    imgStorage[index3].count ++;
    if (totalClicks < 15) {
      totalClicks += 1;
      tracker();
    } else {
      eventRemover();
      charty();
      myChart.className=''
    }
  }
  var img1Btn = document.getElementById('img1');
  img1Btn.addEventListener('click', img1btnFunc);


  var img2Btn = document.getElementById('img2');
  img2Btn.addEventListener('click', img2btnFunc);

  var img3Btn = document.getElementById('img3');
  img3Btn.addEventListener('click', img3BtnFunc);


}

var charty = function() {
  var data = {
    labels: ['bag', 'banana', 'boots', 'cthulhu', 'dragon', 'pen', 'shark', 'sweep', 'unicorn', 'water_can', 'wine_glass', 'chair', 'scissors', 'usb'],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "red",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [imgStorage[0].count,imgStorage[1].count,imgStorage[2].count,imgStorage[3].count,imgStorage[4].count,imgStorage[5].count,imgStorage[6].count,imgStorage[7].count,imgStorage[8].count,imgStorage[9].count,imgStorage[10].count,imgStorage[11].count,imgStorage[12].count,imgStorage[13].count]
      },
    ]
  };
  var ctx = document.getElementById("myChart").getContext("2d");
  ctx.canvas.width = 800;
  ctx.canvas.height = 400;
  var myNewChart = new Chart(ctx).Bar(data);
}

imgCaller();
tracker();
btnFunc();
