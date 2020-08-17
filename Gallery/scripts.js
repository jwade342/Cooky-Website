function changeImg() {
  for (var i = 1; i <= 9; i++) {
    document.querySelector(".show").setAttribute("style", "background-image: url('images/img" + i + ".jpg')");
    if (i == 9) {
      i = 1;
    }
  }
}

function start() {
  setInterval(changeImg(), 1000);
}

document.querySelector(".show").addEventListener("focus", start, false);