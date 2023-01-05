

// showing the main menu
$(".menu-trigger").on('click', function() {
    $(".main-menu").addClass("show");
});

$(".close-btn").on('click', function(){
    $(".main-menu").removeClass("show");
})

// show the booking div
$(".show-book-now").on('click', function() {
    $(".book-now").addClass("show");
    $(".on-focus-shade").addClass("active");
});

$(".book-now-close").on('click', function(){
    $(".book-now").removeClass("show");
    $(".on-focus-shade").removeClass("active");
})

// show the booking div in menu
$(".menu-show-book-now").on('click', function() {
    $(".book-now").addClass("show");
    $(".on-focus-shade").addClass("active");
    $(".main-menu").removeClass("show");
});

// ninja slider image fullscreen view
function lightbox(idx) {
    var ninjaSldr = document.getElementById("ninja-slider");      
    ninjaSldr.parentNode.style.display = "block";

    nslider.init(idx);

    var fsBtn = document.getElementById("fsBtn");
    fsBtn.click();
}

function fsIconClick(isFullscreen, ninjaSldr) {
    if (isFullscreen) {
        ninjaSldr.parentNode.style.display = "none";
    }
}