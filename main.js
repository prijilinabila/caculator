var input = document.getElementById('input');
var but1 = document.getElementById('one');
but1.addEventListener('click',one);
function one(){
    input.value+=1;
    shuffle()
}
var but2 = document.getElementById('two');
but2.addEventListener('click',two);
function two(){
    input.value+=2;
    shuffle()
}
var but3 = document.getElementById('three');
but3.addEventListener('click',three);
function three(){
    input.value+=3;
    shuffle()
}
var but4 = document.getElementById('four');
but4.addEventListener('click',four);
function four(){
    input.value+=4;
    shuffle()
}
var but5 = document.getElementById('five');
but5.addEventListener('click',five);
function five(){
    input.value+=5;
    shuffle()
}
var but6 = document.getElementById('six');
but6.addEventListener('click',six);
function six(){
    input.value+=6;
    shuffle()
}
var but7 = document.getElementById('seven');
but7.addEventListener('click',seven);
function seven(){
    input.value+=7;
    shuffle()
}
var but8 = document.getElementById('eight');
but8.addEventListener('click',eight);
function eight(){
    input.value+=8;
    shuffle()
}
var but9 = document.getElementById('nine');
but9.addEventListener('click',nine);
function nine(){
    input.value+=9;
    shuffle()
   
}
var but_dot = document.getElementById('dot');
but_dot.addEventListener('click',dot);
function dot(){
    input.value+='.';
}
var but0 = document.getElementById('zero');
but0.addEventListener('click',zero);
function zero(){
    input.value+=0;
    shuffle()
    
}
var butr = document.getElementById('r');
butr.addEventListener('click', clearall);
function clearall(){
    input.value = '';
}


function shuffle(){
    let numbers = [1,2,3,4,5,6,7,8,9,0];
    numbers = numbers.sort(function(){
        return Math.random() - 0.5});
    document.getElementById('one').style.order=numbers[0];
    document.getElementById('two').style.order=numbers[1];
    document.getElementById('three').style.order=numbers[2];
    document.getElementById('four').style.order=numbers[3];
    document.getElementById('five').style.order=numbers[4];
    document.getElementById('six').style.order=numbers[5];
    document.getElementById('seven').style.order=numbers[6];
    document.getElementById('eight').style.order=numbers[7];
    document.getElementById('nine').style.order=numbers[8];
    document.getElementById('zero').style.order=numbers[9];
}