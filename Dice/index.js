function diceimg() { 
    var randomNumber1 ,randomNumber2;
    var image1, image2;
    randomNumber1 = Math.floor(Math.random() * 6 + 1);
    randomNumber2 = Math.floor(Math.random() * 6 + 1);
    image1 = "images/" + "dice" + randomNumber1 + ".png";
    image2 = "images/" + "dice" + randomNumber2 + ".png";
    if(randomNumber1 === randomNumber2) {
        document.querySelector("h1").textContent = "Draw!";
    }

    else if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    }

    else {
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    }
    document.querySelector(".img1").setAttribute("src", image1);
    document.querySelector(".img2").setAttribute("src", image2);
}
