// Animate Smaooth Scroll
$('#view-work').on('click', function () {
    const images = $('#images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 900);
});

$('#contact-us').on('click', function () {
    const contact = $('#contact').position().top;

    $('html, body').animate({
        scrollTop: contact
    }, 900);
});