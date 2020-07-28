// metric calculation
function calculateBmr(gender, age, weight, height) {
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var lightAct = document.getElementById("lightAct");    
    var mediumAct = document.getElementById("mediumAct");    
    var heavyAct = document.getElementById("heavyAct");    
       
    var bmr;

    if (gender == "male") {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    }
    else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) -161;
    }

    (lightAct.checked) ? (bmr *= 1.53) : (bmr = bmr);
    (mediumAct.checked) ? (bmr *= 1.76) : (bmr = bmr);
    (heavyAct.checked) ? (bmr *= 2.25) : (bmr = bmr);

    document.getElementById("resultBox").innerHTML = bmr + " kcal/day";
}

// imperial calculation
function icalculateBmr(gender, age, weight, height) {
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var lightAct = document.getElementById("lightAct");    
    var mediumAct = document.getElementById("mediumAct");    
    var heavyAct = document.getElementById("heavyAct");    
       
    var bmr;

    if (gender == "male") {
        bmr = (6.2 * weight) + (12.7 * height) - (6.76 * age) + 66;
    }
    else {
        bmr = (4.35 * weight) + (4.7 * height) - (4.7 * age) + 655;
    }

    (lightAct.checked) ? (bmr *= 1.53) : (bmr = bmr);
    (mediumAct.checked) ? (bmr *= 1.76) : (bmr = bmr);
    (heavyAct.checked) ? (bmr *= 2.25) : (bmr = bmr);

    document.getElementById("iresultBox").innerHTML = bmr + " kcal/day";
}

function resetForm() {
    document.getElementById("myForm").reset();
}

