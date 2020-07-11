// function readmore(){
//     var a = "the theory which explain the behaver and arrangement of three state of matter is called kinetic molecular theroy"
//      var pera =document.getElementById("pera");
//      pera.innerHTML=a
// }

// function timer(){
//   console.log("running ")  
// }
// setInterval(timer,1000)

// function timer(){
//     console.log("majid")
// }
// setTimeout(timer,5000)

// var a = 0;
// var b ;
// function timer (){
//     a++
//     console.log(a)
// }
// b=setInterval (timer,1000);

// var count=0;
// var interval;
// function timer (){
//     count++
//     console.log(count)
// }
// interval=setInterval(timer,1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000)

var hours=0;
var min=0;
var sec=0;
var msec=0;
var minheading =document.getElementById("min");
var secheading =document.getElementById("sec");
var msecheading =document.getElementById("msec");
var hoursheading = document.getElementById("hours")
var interval;
function timer(){
       msec++
       msecheading .innerHTML=msec;
       if (msec >= 100){
           sec++
           msec=0;
           secheading.innerHTML=sec;
       }else if (sec >=60){
               min++
               sec=0;
               minheading.innerHTML=min;

           }else if (min>=2){
               hours++
               min=0
               hoursheading.innerHTML=hours;

           }
       

}


function start(){
    interval=setInterval(timer,10);
    // disable();
}
function stop(){
    clearInterval(interval)
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    hours=0;
    minheading.innerHTML=min;
    secheading.innerHTML=sec;
    msecheading.innerHTML=msec;
    hoursheading.innerHTML=hours;
    stop();
}
// var a=document.getElementById("disable")
// function disable() {
//     document.getElementById("disable").disabled = true;
    
//   }
// if(a==disable()){
//    disable.innerHTML=start();
// }
