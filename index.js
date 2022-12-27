 const hourE1 = document.getElementById("hour");
 const minuteE1 = document.getElementById("minutes");
 const secondE1 = document.getElementById("seconds");
 const ampmE1 = document.getElementById("ampm"); 

 function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
     let am = h >= 12 ? "PM" : "AM";

    if(h > 12){
        h = h-12
        
    }
    hourE1.innerText = h;
    minuteE1.innerHTML = m;
    secondE1.innerHTML = s;
    ampmE1,(innerText = ampm) ;
    setTimeout(()=>{
        updateclock()
    },1000)

}

updateclock()
