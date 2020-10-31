let m = moment();
let hour = moment().format('HH');
let time = moment().format("h:mm a")
let date = moment().format('MMMM Do YYYY');
console.log(hour);
console.log(date);

$(document).ready(function() {
    $("h2").append(date);
    $("h3").append(time);
});


function getValue() {

    store9 = document.getElementById("input1").value;
    $(".nine").append(" " + store9);
    store10 = document.getElementById("input2").value;
    $(".ten").append(" " + store10);
    store11 = document.getElementById("input3").value;
    $(".eleven").append(" " + store11);
    store12 = document.getElementById("input4").value;
    $(".noon").append(" " + store12);
    store1 = document.getElementById("input5").value;
    $(".one").append(" " + store1);
    store2 = document.getElementById("input6").value;
    $(".two").append(" " + store2);
    store3 = document.getElementById("input7").value;
    $(".three").append(" " + store3);
    store4 = document.getElementById("input8").value;
    $(".four").append(" " + store4);
    store5 = document.getElementById("input9").value;
    $(".five").append(" " + store5);
}

store9 = 9
store10 = 10
store11 = 11
store12 = 12
store1 = 13
store2 = 14
store3 = 15
store4 = 16
store5 = 17

let times = [store9, store10, store11, store12, store1, store2, store3, store4, store5];

// for (i = 0; i < times.length; i++){
//     if (times[i] < hour) {
//        $(this).find("#").addClass( "past-text" );
//     } 
//     if (times[i] === hour) {
//         $(times[i]).addClass( "current-text" );
//     }
//     if (times[i] > hour) {
//         $(times[i]).addClass( "future-text" );
//         console.log(times[i]);
//     }
// }



$("#button").click(function() {
    getValue();
});
$("#button2").click(function() {
    getValue();
});
$("#button3").click(function() {
    getValue();
});
$("#button4").click(function() {
    getValue();
});
$("#button5").click(function() {
    getValue();
});
$("#button6").click(function() {
    getValue();
});
$("#button7").click(function() {
    getValue();
});
$("#button8").click(function() {
    getValue();
});
$("#button9").click(function() {
    getValue();
});

