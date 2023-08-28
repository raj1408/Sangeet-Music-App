console.log("Welcome to Sngeet")
// initialisw variables
let songindex = 0;
let audioelement = new Audio('songs/1.mp3.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname')
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songmame: " Ishq Tera Tadpave", filepath: "songs/1.mp3.mp3", coverpath: "Covers/1.webp" },
    { songmame: " Mera Safar ", filepath: "songs/2.mp3.mp3", coverpath: "Covers/2.jpg" },
    { songmame: " Mann Mera ", filepath: "songs/3.mp3.mp3", coverpath: "Covers/3.jpg" },
    { songmame: " Pasoori", filepath: "songs/4.mp3.mp3", coverpath: "Covers/4.jpg" },
    { songmame: " Mercy", filepath: "songs/5.mp3.mp3", coverpath: "Covers/5.jpg" },
    { songmame: " Give Me Some Sunshine", filepath: "songs/6.mp3.mp3", coverpath: "Covers/6.jpg" },
    { songmame: " Tera Yaar Hu Me", filepath: "songs/7.mp3.mp3", coverpath: "Covers/7.jpg" },
    { songmame: " O Mere Dil Ke Chain", filepath: "songs/8.mp3.mp3", coverpath: "Covers/8.jpg" },
    { songmame: " Fakira ", filepath: "songs/9.mp3.mp3", coverpath:"Covers/9.jpg" },
    { songmame: " Sanak ", filepath: "songs/10.mp3.mp3", coverpath: "Covers/10.jpg" }
]

// audioelement.play()
songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songmame;
})
// Handle play pause click
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 0.4;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})
// Listen to events
audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update seek bar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    console.log(progress);
    progressbar.value = progress;
})
progressbar.addEventListener('change', () => {
    audioelement.currentTime = progressbar.value * audioelement.duration / 100;
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
}
)}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src=`songs/${songindex+1}.mp3.mp3`;
        mastersongname.innerText=songs[songindex].songmame;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if (songindex>=9) {
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioelement.src=`songs/${songindex+1}.mp3.mp3`;
    mastersongname.innerText=songs[songindex].songmame;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if (songindex==0) {
        songindex=11;
    }
    else{
        songindex=songindex-1;
    }
    audioelement.src=`songs/${songindex-1}.mp3.mp3`;
    mastersongname.innerText=songs[songindex].songmame;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})