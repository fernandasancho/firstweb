// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementsByClassName('myImg');
var img = $('.myImg');//jquery
var modalImg = document.getElementById("img01");
var modalImg = document.getElementById("img02");
var modalImg = document.getElementById("img03");
var modalImg = document.getElementById("img04");
var modalImg = document.getElementById("img05");
var modalImg = document.getElementById("img06");
var modalImg = document.getElementById("img07");
var modalImg = document.getElementById("img08");
var modalImg = document.getElementById("img09");
var modalImg = document.getElementById("img010");
var modalImg = document.getElementById("img011");
var modalImg = document.getElementById("img012");
var modalImg = document.getElementById("img013");
var modalImg = document.getElementById("img014");
var modalImg = document.getElementById("img015");


var captionText = document.getElementById("caption");

//Jquery
img.click(function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
})


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
