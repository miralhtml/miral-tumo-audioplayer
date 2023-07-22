//var let const


// var a = 10

// //Թվաբանական Օպերատորներ + - / * % 5**3
// // a += 5 // a = a + 5 //
// // a -= 5 // a = a - 5 //
// // a /= 5 // a = a / 5 // 2
// // a *= 5 // a = a * 5 //
// a %= 5 // a = a % 5 //

// console.log(a)


// console.log(3 % 10);


//Data Type

// var num1 = 17 // number
// var str = "hello" // string
// var str1 = "17" //string

// var b1 = true
// var b2 = false

// Համեմատության Օպերատորներ
// < > <= >= == === != !==

// console.log(num1 == str1);


//Arrays

// var cars = []


// cars[0] = "BMW"
// cars[1] = "MERC"

// cars.push("Yeraz","Jaguar","Lada")


// console.log(cars);




//Objects

// var student = {
// firstName: "Ella" ,
// lastName: "Margaryan" ,
// age: 13 ,
// friends:["Anyuta" ,"Ani","Elina","Antuaneta"] ,

// hello(city){
// console.log("Բարև " + city);

// }
// }


// console.log(student);
// console.log(student.lastName);
// console.log(student.friends[2]);

// student.hello("Վայք")



var data = {

    title : [
                "Eruption - One Way Ticket", 
                "Nino Rota - Godfather Soundtrack", 
                "Andy - Garun e", 
                "Edith Piaf - Non, je ne regrette rien", 
                "Shufutinskiy - Taganka",
                "Aram Asatryan - Hay es du",
                "Ruben Matevosyan - Chqnax yeraz",
                "Sharl Aznavour - La bohemo",
                "Tata - Janaparh",
                "Gagik Yezakyan - Haxtanaki ory"

            ],

    song : [
                "music/Eruption - One Way Ticket.mp3",  
                "music/Nino Rota - The Godfather theme.mp3", 
                "music/Andy - garun-garun-garun e sirun sirun sirun e )))).mp3", 
                "music/Edith Piaf - Non, je ne regrette rien.mp3", 
                "music/Taganka.mp3",
                "music/Aram Asatryan - Hay Es Du.mp3",
                "music/1644222662_ruben-matevosyan-chqnax-eraz-by-arno-babajanyan.mp3",
                "music/Charles_Aznavour_-_La_Boheme_(www.mexedi.am).mp3",
                "music/Tata_Simonyan_-_Chanaparh_(www.mexedi.am).mp3",
                "music/Gagik-Yezikyan_-_Haxtanaki_Or_(www.muzofan.net).mp3"
            ],

    poster : [
                  "https://bestanimations.com/media/music/623068052laser-show-rave-concert-animated-gif-image-2.gif", 
                  "https://media.tenor.com/Ezwsc3bTZAgAAAAC/the-god-father-marlon-brando.gif", 
                  "https://i.pinimg.com/originals/97/25/92/972592c7ddc925014f57232809307ece.gif", 
                  "https://img1.picmix.com/output/pic/normal/5/8/5/2/9862585_c8c06.gif", 
                  "https://media.tenor.com/ytDZjCCs6J8AAAAM/shafutinskiy-shaphutinskiy.gif",
                  "https://media.giphy.com/media/bjBAQ2TVhhsGY/giphy.gif",
                  "https://www.tert.am/cache_image/news_images/429/1285140_3/f5476b43a1574f_5476b43a15789-770x510.jpg",
                  "https://yt3.googleusercontent.com/ytc/AOPolaSLbuGF0oMRWtGgcvudk_sz0Vmto6_ZisCpdxtF=s900-c-k-c0x00ffffff-no-rj",
                  "https://i.scdn.co/image/ab67616d0000b273566dd55d5453e24531221ee2",
                  "https://csonekl.ru/wp-content/uploads/2021/04/9-maya-den-pobedy.png"

            ]


}

let song = new Audio()

window.onload = function (){

    playSong()


}

var currentSong = 0

function playSong(){

    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let main = document.getElementById("main")
    main.style.backgroundImage = "url("+ data.poster[currentSong] +")"
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[currentSong] +")"
    song.play()

}

function playOrPauseSong(){

    let play = document.getElementById("play")

    if(song.paused){

            song.play()
            play.src = "images/pause.png"
    }else{
                song.pause()
                play.src = "images/play-button-arrowhead.png"
        }

}

song.addEventListener("timeupdate",function (){

    //console.log(song.duration)
    //console.log(song.currentTime)

    let fill = document.getElementsByClassName("fill")

    let position = song.currentTime / song.duration

    fill[0].style.marginLeft = position * 100 + "%"

    convertTime(song.currentTime)
    if (song.ended){

        song.next()
       
    }
    
})

function convertTime(secounds){

      let currentTime = document.getElementById("currentTime")


      let min = Math.floor(secounds / 60)
      let sec = Math.floor(secounds % 60)

      min = (min < 10) ? "0" + min : min
      sec = (sec < 10) ? "0" + sec : sec

    
      currentTime.textContent = min + " : " + sec


      totalTime(Math.round(song.duration))

}


function totalTime(secounds){
    let min = Math.floor(secounds / 60)
    let sec = Math.floor(secounds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec


    currentTime.textContent += " / " + min  + " : " + sec



}

function oneWayTicket(){

    song.src = data.song[0]
    songTitle.textContent = data.title[0]
    main.style.backgroundImage = "url("+ data.poster[0] +")"
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[0] +")"
    
}

function godfather(){

    song.src = data.song[1]
    songTitle.textContent = data.title[1]
    main.style.backgroundImage = "url("+ data.poster[1] +")"
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[1] +")"
  
}

function garune(){

    song.src = data.song[2]
    songTitle.textContent = data.title[2]
    main.style.backgroundImage = "url("+ data.poster[2] +")"
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[2] +")"
 
}

function non(){

    song.src = data.song[3]
    songTitle.textContent = data.title[3]
    main.style.backgroundImage = "url("+ data.poster[3] +")"
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[3] +")"
   
}

function taganka(){

    song.src = data.song[4]
    songTitle.textContent = data.title[4]
    main.style.backgroundImage = "url("+ data.poster[4] +")"
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[4] +")"
    
}

function aram(){
    song.src = data.song[5]
    songTitle.textContent = data.title[5]
    main.style.backgroundImage = "url("+ data.poster[5] +")"
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[5] +")"
    
}

function ruben(){

    song.src = data.song[6]
    songTitle.textContent = data.title[6]
    main.style.backgroundImage = "url("+ data.poster[6] +")"
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[6] +")"
    
}

function sharl(){

    song.src = data.song[7]
    songTitle.textContent = data.title[7]
    main.style.backgroundImage = "url("+ data.poster[7] +")"
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[7] +")"
    
}

function tata(){

    song.src = data.song[8]
    songTitle.textContent = data.title[8]
    main.style.backgroundImage = "url("+ data.poster[8] +")"
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[8] +")"
    
}

function sovet(){

    song.src = data.song[9]
    songTitle.textContent = data.title[9]
    main.style.backgroundImage = "url("+ data.poster[9] +")"
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[9] +")"
    
}

function menyu(){

    let menyu = document.getElementsByClassName("panelMenyu")
    menyu[0].style.visibility = 'visible'
    delay(5000).then(() => menyu[0].style.visibility = 'hidden')
    
}

function delay(ms){

    return new Promise(resolve => setTimeout(resolve, ms));
}


function next() {

    currentSong++
    
    if(currentSong == data.song.length){

        currentSong = 0
    }
    playSong()
}

function pre() {

    currentSong--

    if(currentSong < 0){

        currentSong = data.song.length - 1
    }

    playSong()
}


function mute(){

    song.volume  = (song.volume == 1) ? 0 : 1



}

 function decrease(){

    song.volume -= 0.2
    console.log(song.volume)
 }

 function increase(){

    song.volume += 0.2

 }



