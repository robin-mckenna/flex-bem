$(document).ready(function() {
    const imageBlock = $('.fleximages');

    $('#addimage').click(function() {
        let imageElement = "<div class='fleximages__imgblock'>\n<img src='https://source.unsplash.com/random/200x100'/>\n</div>"
        imageBlock.append($(imageElement));
    });
});
