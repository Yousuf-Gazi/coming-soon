// typing effect start
var typed = new Typed('.typing', {
    strings: ["We are coming soon.", "Stay with us!"],
    loop: true,
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
});
// typing effect end


// countdown start
$("#countdown")
.countdown("2021/03/02", function(event) {

    $('#days').text(
        event.strftime('%D')
    );

    $('#hours').text(
        event.strftime('%H')
    );

    $('#minutes').text(
        event.strftime('%M')
    );

    $('#seconds').text(
        event.strftime('%S')
    );

})
// countdown end