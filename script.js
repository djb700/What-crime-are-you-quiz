let KC;
let Q2Input;
let button = document.querySelector("button");
let letterGrade = document.querySelector(".letter-grade");

button.onclick = function() {
    KC = document.querySelector("input").value;
    let Q1output = document.querySelector(".Q1output");
    if (KC >= 50) {

        Q1output.innerHTML = "<em>Please be realistic</em>";
    } else if (KC >= 20) {
        Q1output.innerHTML = "<em>Jeus!!!</em>";
    } else {
        Q1output.innerHTML = "<em>Okaay.</em>";
    }
};
let Q2Button = document.querySelector(".Q2-button");
Q2Button.onclick = (function() {
    Q2Input = document.querySelector(".Q2response").value;
    if (Q2Input === "Accidental manslaughter") {
        document.querySelector(".Q2output").innerHTML = "Why?";
    } else if (Q2Input === "Murder") {
        document.querySelector(".Q2output").innerHTML = "How did I know.";
    } else if (Q2Input === "Stealing pigeons") {
        document.querySelector(".Q2output").innerHTML = "You don't deserve prison time.";
    } else if (Q2Input === "Bridezilla") {
        document.querySelector(".Q2output").innerHTML = "You crazy B-!!";
    }
});
let Done = document.querySelector(".Done");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
Done.onclick = function() {
    alert('Are you sure');
    
    if (KC >= 20 && Q2Input === "Accidental manslaughter" || KC <= 19 && Q2Input === "Accidental manslaughter" || KC <= 19 && Q2Input === "Stealing pigeons") {
        console.log("I3");
        result2.innerHTML = "Robbery";
    } else if (KC >= 20 && Q2Input === "Bridezilla" || KC <= 19 && Q2Input === "Bridezilla") {
        result2= "Arson";
    } else if (KC >= 20 && Q2Input === "Murder") {
        result2= "Murder";
    } else if (KC <= 19 && Q2Input === "Stealing pigeons") {
        result2 = "let phones ring more than nine times in state offices";
    } else if (KC <= 19 && Q2Input === "Murder") {
        result2 = "kidnapping";
    }
result1.innerHTML="you said you can kill "+KC+" people and you are going to jail for "+Q2Input+" therefore you are "+result2+" sorry.";
};