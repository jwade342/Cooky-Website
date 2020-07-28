var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday", "Sunday"];

var orders = ["'Pizza'", "'Sushi'", "'Ramen'", "'Taco'", "'Sashimi'",
    "'Paella'", "'Jiaozi'", "'Cheeseburger'", "'Mochi'", "'Dim Sum'",
    "'Taco'", "'Sashimi'", "'Sushi'", "'Ramen'", "'Taco'", 
    "'Pizza'", "'Sushi'", "'Ramen'", "'Taco'", "'Sashimi'",
    "'Paella'", "'Jiaozi'", "'Cheeseburger'", "'Mochi'", "'Dim Sum'",
    "'Cheeseburger'", "'Mochi'", "'Dim Sum'","'Pizza'", "'Sushi'"];

var customers = ["George Washington", "John Adams", "Thomas Jefferson",
    "James Madison", "James Monroe", "John Quincy Adams",
    "Andrew Jackson", "George Washington", "John Adams",
    "Thomas Jefferson", "George Washington", "John Adams",
    "James Madison", "James Monroe", "John Quincy Adams",
    "George Washington", "John Adams", "Thomas Jefferson",
    "James Madison", "James Monroe", "John Quincy Adams",
    "Andrew Jackson", "George Washington", "John Adams",
    "Thomas Jefferson", "George Washington", "John Adams",
    "James Madison", "James Monroe", "John Quincy Adams"];

function fillWeekday() {
    var i = 0;
    while (i < 7) {
        document.getElementsByTagName("th")[i].innerHTML = weekdays[i];
        i++;
    }
}

function fillCalendarDay() {
    var i = 1;
    var day = "";
    while (i <= 30) {
        var cell = document.getElementById("6-" + i);
        day = cell.getElementsByTagName("p");
        day[0].innerHTML = i;
        i++;
    }

}

function fillOrders() {
    var i = 1;
    var day = "";
    while (i <= 30) {
        var cell = document.getElementById("6-" + i);
        day = cell.getElementsByTagName("p");
        day[1].innerHTML = orders[i - 1];
        i++;
    }
}

function fillCustomers() {
    var i = 1;
    var day = "";
    while (i <= 30) {
        var cell = document.getElementById("6-" + i);
        day = cell.getElementsByTagName("p");
        day[2].innerHTML = customers[i - 1];
        i++;
    }
}

function fillDetail() {
    var i = 1;
    var day = "";
    while (i <= 30) {
        var cell = document.getElementById("6-" + i);
        day = cell.getElementsByTagName("p")
        switch (i) {
            case 1:
            case 3:
            case 5:
            case 12:
            case 13:
            case 15:
            case 17:
            case 20:
            case 21:
            case 22:
            case 24:
            case 26:
            case 28:
            case 29:
            case 30:
                day[3].innerHTML = "(Take-away)";
                break;
            case 2:
            case 4:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 14:
            case 16:
            case 18:
            case 19:
            case 23:
            case 25:
            case 27:
                day[3].innerHTML = "(Eat-in)";
                break;
        }
        i++;
    }
}

function setUpPage() {
    fillWeekday();
    fillCalendarDay();
    fillOrders();
    fillCustomers();
    fillDetail();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}