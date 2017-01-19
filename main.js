var dropDownButton = document.getElementById("dropDownButton");
var dropDownMenu = document.getElementById("dropDown");
var textInfo = document.getElementById("center");
var headerNav = document.getElementById("headerNav")
var navBgColor = document.getElementsByClassName("nav")[0];
var activeList = document.querySelectorAll("ul#onImage li");
var gallery = document.querySelectorAll(".event");
var counter = 2;

dropDownButton.addEventListener("click", function () {
  dropDownMenu.classList.toggle("display-nav");
  dropDownMenu.classList.toggle("bg-color");
  navBgColor.classList.toggle("bg-color");
});

setInterval(function () {
  activeList[counter - 1].classList = "active";
  headerNav.style.backgroundImage = "url(slide/image" + counter + ".jpg)";
  if (counter === 3) {
    console.log(counter);
    counter = 0;
  }
  counter++
}, 3000);

function visibleDiv () {
  this.style.visibility = "visible";
}

for (var i = 0; i < gallery.length; i++) {

  gallery[i].addEventListener("mouseover", function () {
    console.log("in")
    this.getElementsByClassName("inner-text")[0].classList.toggle("display");
  });
  gallery[i].addEventListener("mouseout", function () {
    console.log("out")
    this.getElementsByClassName("inner-text")[0].classList.toggle("display");
  });
    console.log(gallery)
}
