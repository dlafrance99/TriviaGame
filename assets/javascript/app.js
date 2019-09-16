
var correct = 0;
console.log(correct);
var total = 10;
var countdown = 0;
var interval;

function start() {
    countdown = 60;
    interval = setInterval(count, 1000);
    // count();
};

function count() {
    
    if (countdown === 0) {
        $(".wrapper").html("<h1> Time's Up!!!</h1><p>Correct: " + correct + "</p><p> Total: " + total);
    };
    countdown--
    $(".countdown").text(countdown)
};

$("button").on("click", function(){
    if($(this).attr("data-correct") === "true") {
        correct++;
        $(this).attr("data-correct", "false")
    }
    console.log(correct);
})

$("#enter").on("click", function(){
    countdown = 0;
    if (countdown === 0) {
        $(".wrapper").html("<h1> Time's Up!!!</h1><p>Correct: " + correct + "</p><p> Total: " + total);
    };
});

start();









