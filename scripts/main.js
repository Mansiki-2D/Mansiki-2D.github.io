
  var myImage = document.querySelector("img");
var imageIndex = 1;

myImage.onclick = function () {
    imageIndex = (imageIndex % 8) + 1;
    myImage.setAttribute("src", "images/" + imageIndex + ".png");
};



  
