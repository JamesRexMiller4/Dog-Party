var bar = document.getElementById('barinput');
var headchange = document.getElementById('somedogs');
var btn = document.getElementById('namebtn');


btn.addEventListener('click', function(){
    var fromInput = bar.value;
    headchange.innerHTML = fromInput;
    bar.value = '';
});

var para1 = document.querySelector('.p1');
var btnclm1 = document.querySelector('.howbtn');

btnclm1.addEventListener('click', function(){
  para1.classList.toggle('disappear');
});

var para2 = document.querySelector('.p2');
var btnclm2 = document.querySelector('.whatbtn');

btnclm2.addEventListener('click', function(){
  para2.classList.toggle('disappear');
});

var para3 = document.querySelector('.p3');
var btnclm3 = document.querySelector('.factbtn');

btnclm3.addEventListener('click', function(){
  para3.classList.toggle('disappear');
});
