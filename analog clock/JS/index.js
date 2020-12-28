let myvar=setInterval(myfunction, 1000);

function myfunction(){
    let d = new Date();
    
    let hour1 = d.getHours();
    let minute1 = d.getMinutes();
    let second1 = d.getSeconds();
   hrotation = hour1*30 + minute1*1/2;
    mrotation = minute1*6;
    srotation = second1*6;

     hour.style.transform =`rotate(${hrotation}deg)`;
    minute.style.transform =`rotate(${mrotation}deg)`;
    second.style.transform =`rotate(${srotation}deg)`;
 //   d = new Date();
   // htime = d.getHours();
    //mtime = d.getMinutes();
    //stime = d.getSeconds();
    //hrotation = 30*htime + mtime/2;
    //mrotation = 6*mtime;
    //srotation = 6*stime;

   // hour.style.transform = `rotate(${hrotation}deg)`;
    //minute.style.transform = `rotate(${mrotation}deg)`;
    //second.style.transform = `rotate(${srotation}deg)`;

}