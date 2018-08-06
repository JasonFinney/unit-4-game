var win = 0;
var loss = 0;
var Score = 0;
$(".Wins").text(win);
$(".Losses").text(loss);
$(".total-score").text(Score);

var goals = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
var compGuess = goals[Math.floor(Math.random() * goals.length)];
console.log(compGuess);
$(".rnum").text(compGuess);

var hidden = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var currentScore;
var blueClick = false;
var emeraldClick = false;
var heartClick = false;
var shadowClick = false;
var blueValue;
var emeraldValue;
var heartValue;
var shadowValue;

$(".blue").click(function () {
    if (blueClick === false) {
        var userGuess = hidden[Math.floor(Math.random() * hidden.length)];
        var currentScore = sum(Score, userGuess);
        function sum(x, y) {
            var currentScore = x + y;
            console.log(currentScore);
            $(".total-score").text(currentScore);
            Score = currentScore;
            blueClick = true;
            blueValue = userGuess;
        };
    } else {
        var currentScore = sum(Score, blueValue);
        function sum(x, y) {
            var currentScore = x + y;
            console.log(currentScore);
            $(".total-score").text(currentScore);
            Score = currentScore;
        }
    }
});

$(".emerald").click(function () {
    if (emeraldClick === false) {
        var userGuess = hidden[Math.floor(Math.random() * hidden.length)];
        var currentScore = sum(Score, userGuess);
        function sum(x, y) {
            var currentScore = x + y;
            console.log(currentScore);
            $(".total-score").text(currentScore);
            Score = currentScore;
            emeraldClick = true;
            emeraldValue = userGuess;
        };
    } else {
        var currentScore = sum(Score, emeraldValue);
        function sum(x, y) {
            var currentScore = x + y;
            console.log(currentScore);
            $(".total-score").text(currentScore);
            Score = currentScore;
        }
    }
});

$(".heart").click(function () {
    if (heartClick === false) {
        var userGuess = hidden[Math.floor(Math.random() * hidden.length)];
        var currentScore = sum(Score, userGuess);
        function sum(x, y) {
            var currentScore = x + y;
            console.log(currentScore);
            $(".total-score").text(currentScore);
            Score = currentScore;
            heartClick = true;
            heartValue = userGuess;
        };
    } else {
        var currentScore = sum(Score, heartValue);
        function sum(x, y) {
            var currentScore = x + y;
            console.log(currentScore);
            $(".total-score").text(currentScore);
            Score = currentScore;
        }
    }
});

$(".shadow").click(function () {
    if (shadowClick === false) {
        var userGuess = hidden[Math.floor(Math.random() * hidden.length)];
        var currentScore = sum(Score, userGuess);
        function sum(x, y) {
            var currentScore = x + y;
            console.log(currentScore);
            $(".total-score").text(currentScore);
            Score = currentScore;
            shadowClick = true;
            shadowValue = userGuess;
        };
    } else {
        var currentScore = sum(Score, shadowValue);
        function sum(x, y) {
            var currentScore = x + y;
            console.log(currentScore);
            $(".total-score").text(currentScore);
            Score = currentScore;
        }
    }
});

$("html").click(function () {
    if (Score === compGuess) {
        alert("Crystal Master!");
        win++;
        $(".Wins").text(win);
        Score = 0;
        $(".total-score").text(Score);
        blueClick = false;
        emeraldClick = false;
        heartClick = false;
        shadowClick = false;
        compGuess = goals[Math.floor(Math.random() * goals.length)];
        console.log(compGuess);
        $(".rnum").text(compGuess);
    };
    if (Score > compGuess) {
        loss++;
        $(".Losses").text(loss);
        alert("Your Greed has Cost you Dearly!");
        Score = 0;
        $(".total-score").text(Score);
        blueClick = false;
        emeraldClick = false;
        heartClick = false;
        shadowClick = false;
        compGuess = goals[Math.floor(Math.random() * goals.length)];
        console.log(compGuess);
        $(".rnum").text(compGuess);
    }
});