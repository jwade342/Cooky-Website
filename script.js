// get nav menu element
var list = document.getElementById("topNav");

// get insert position (Login)
var instPosition = document.querySelectorAll("#topNav li")[3];

// ------- BMR Link Begin -------------------
// create BMR List and insert before Login Button
var bList = document.createElement("li");
list.insertBefore(bList, instPosition);

// create BMR link and append into bLink
var bLink = document.createElement("a");
bLink.href = "BMR/index.html";
bLink.innerHTML = "BMR";
bList.appendChild(bLink);
// ------- BMR Link End --------------------

// -------- Schedule Link Begin --------
// create a new list item schedule and insert into nav menu
// before Login Button
var sList = document.createElement("li");
list.insertBefore(sList, instPosition);

// create a new link attribute for schedule and 
// append into slist
var sLink = document.createElement("a");
sLink.innerHTML = "Schedule"
sLink.href = "#";
sList.appendChild(sLink);
// --------- Schedule Link End -----------

// ---------- Location Link Begin ----------------
// Create Location List, append to Menu bar
var lList = document.createElement("li");
list.insertBefore(lList, instPosition);

// Crreat Location Link, append to Location List
var lLink = document.createElement("a");
lLink.innerHTML = "Location";
lLink.href = "https://www.haidilao.com/en/index/index.html"
lList.appendChild(lLink);
// ---------- Location Link End ----------------

//--------- Popup Schedule Window ----------
var shdWindow;
function checkSchedule() {  
  var popWidth = 600;
  var popHeight = 900;
  var popLeft = (screen.width - popWidth) / 2;
  var popTop = (screen.height - popHeight) /2;
  var popOption = "width=700, height=1000, left=" + popLeft + ", top=" + popTop;
  shdWindow = window.open("Calendar_Schedule/index.html", "confirm", popOption);

  setTimeout("shdWindow.close()", 5000);
}

if (sList.addEventListener) {
  sList.addEventListener("click", checkSchedule, false);
} else if (sList.attachEvent) {
  sList.attachEvent("onclick", checkSchedule);
}

// ************ TEST EVENT LISENTER ************
/*
var testBtn = document.getElementById("login-btn");

if (testBtn.addEventListener) {
  testBtn.addEventListener("click", checkSchedule, false);
} else if (testBtn.attachEvent) {
  testBtn.attachEvent("onclick", checkSchedule);
}
*/
// ************** TEST END ************************