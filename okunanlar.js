var i = 0;
function read(){
    if(!i){
        document.getElementById("more").style.display ="inline";
        document.getElementById("ucnokta").style.display ="none";
        document.getElementById("read").innerHTML = "Read less";
        i=1;
    }
    else{
        document.getElementById("more").style.display ="none";
        document.getElementById("ucnokta").style.display ="inline";
        document.getElementById("read").innerHTML = "Read more";
        i=0;
    }
}

function clock(){
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
     var h = new Date().getHours();
     var m = new Date().getMinutes();
     var s = new Date().getSeconds();
 
     hours.innerHTML = h;
     minutes.innerHTML = m;
     seconds.innerHTML = s;
 }
 var interval = setInterval(clock,1000);