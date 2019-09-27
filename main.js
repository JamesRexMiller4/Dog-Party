var bar = $('#barinput');
var headchange = $('#somedogs');
var btn = $('#namebtn');
var para1 = $('.p1');
var btnclm1 = $('.howbtn');
var para2 = $('.p2');
var btnclm2 = $('.whatbtn');
var para3 = $('.p3');
var btnclm3 = $('.factbtn');

// Event Listeners
btn.on('click', () => {
    var fromInput = bar.val();
    headchange.text(fromInput);
    bar.text('');
});

btnclm1.on('click', () => para1.attr('style') !== "display: none;"?  para1.slideUp() : para1.slideDown());
btnclm2.on('click', () => para2.attr('style') !== "display: none;"? para2.slideUp() : para2.slideDown());
btnclm3.on('click', () => para3.attr('style') !== "display: none;"? para3.slideUp() : para3.slideDown());
