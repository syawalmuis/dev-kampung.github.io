let h_needle = document.querySelector(".h-needle");
let m_needle = document.querySelector(".m-needle");
let s_needle = document.querySelector(".s-needle");

setInterval(function(){

    // ???? 360deg/60 menit & detik = 6 =>md
    // ???? 360deg/12 jam = 30deg jarak antar jam =>t

    let time = new Date;
    // let h = time.getHours();
    let h= time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if(h > 12){
        h -= 12
    }
    let timer = (m/12*6); //hasilnya harus 30 ketika menit sama dengan 60 karna jarak perjam 30deg
    // console.log(60/12*6)
    // console.log(h, timer, tes)
    s_needle.style.transform = (`rotate(${s * 6}deg)`);
    m_needle.style.transform = (`rotate(${m * 6}deg)`);
    h_needle.style.transform = (`rotate(${h * 30 +timer}deg)`);

},1000)


function check() {

    
    
}