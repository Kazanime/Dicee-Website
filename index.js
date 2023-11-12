var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;

if (p1 > p2) {
    $("h1").text("Player 1 Wins!");
} else if (p1 < p2) {
    $("h1").text("Player 2 Wins!");
} else {
    $("h1").text("Draw!");
}

$(".img1").attr('src', 'images/dice' + p1 + '.png');
$(".img2").attr('src', 'images/dice' + p2 + '.png');