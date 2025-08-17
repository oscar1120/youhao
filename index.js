let before = []
let photosNumber = 344;

$("#btn").mouseup(click);


function click () {
    $("#info").fadeOut();
    for (var i = 0; i < 100; i++) {
        setTimeout(function() {
            var color = Math.floor(Math.random() * 256);
            $("#photo").css("background-color", `rgb(${color}, ${color}, ${color})`);
        }, 70 * i);
    }
    
    var random;

    do {
        random = Math.floor(Math.random() * photosNumber + 1);
        console.log(random);
    } while (before.indexOf(random) != -1);

    if (before.length <= 49) {
        before.push(random);
        console.log(before);
    } else {
        before.shift();
        before.push(random);
        console.log(before);
    }

    $("#photo").css("background-image", `url(photos/${random}.jpg)`);
    setTimeout(function() {
        $("#info").css("background-color", "rgba(0,0,0,0)");
        $("h1").text("")
        $("span").text("再抽一次");
        $("#btn").css("opacity", "0.4");
        $("span").css("color", "white");
        $("span").css("opacity", "1");
        $("#info").fadeIn();
    }, 3000);
}