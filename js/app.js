let randomNum1 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img1").setAttribute("src", "img/dice" + randomNum1 + ".png");
let randomNum2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img2").setAttribute("src", "img/dice" + randomNum2 + ".png");


if (randomNum1 > randomNum2) {
    document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
} else if (randomNum1 < randomNum2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector(".container h1").innerHTML = "Draw!";
}