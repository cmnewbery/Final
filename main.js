var gototop = document.getElementById("gototop");
window.onscroll = function() {scrollFunction()};

function readMore(){
	var extraText = document.getElementById("extraText");
	extraText.style.display = "block";
	var readless = document.getElementById("readless");
	readless.style.display = "block";
	var readmore = document.getElementById("readmore");
	readmore.style.display = "none";
}

function readLess(){
	var extraText = document.getElementById("extraText");
	extraText.style.display = "none";
	var readless = document.getElementById("readless");
	readless.style.display = "none";
	var readmore = document.getElementById("readmore");
	readmore.style.display = "block";
}


function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    gototop.style.display = "block";
  } else {
    gototop.style.display = "none";
  }
}

function gotoTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}