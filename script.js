let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrIcon = document.getElementById("ctrIcon");
let songTitle = document.getElementById("song-title");
let songArtist = document.getElementById("song-artist");
let songImg = document.getElementById("song-img");
let songSource = document.getElementById("song-source");

let songs = [
    {
        title: "Despacito",
        artist: "Luis Fonsi Ft. Daddy Yankee",
        src: "images/11086_Luis Fonsi ft. Daddy Yankee - Despacito SHOW2BABI.COM.mp3",
        img: "images/despacito.jpg"
    },
    {
        title: "Boy With Luv",
        artist: "BTS",
        src: "images/Boy-With-Luv(PaglaSongs).mp3",
        img: "images/boywithluv.jpg"
    },
    {
        title: "Natu Natu",
        artist: "Kaala Bhairava, Rahul Sipligunj",
        src: "images/Natu-Natu(PaglaSongs).mp3",
        img: "images/natu.jpg"
    },
    {
        title: "Butter",
        artist: "BTS",
        src: "images/Butter(PaglaSongs).mp3",
        img: "images/butter.jpg"
    }
];

let currentSongIndex = 0;

function loadSong(songIndex) {
    let songData = songs[songIndex];
    songTitle.textContent = songData.title;
    songArtist.textContent = songData.artist;
    songImg.src = songData.img;
    songSource.src = songData.src;
    song.load();
}

function playPause() {
    if(ctrIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrIcon.classList.remove("fa-pause");
        ctrIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrIcon.classList.remove("fa-play");
        ctrIcon.classList.add("fa-pause");
    }
}

function previousSong() {
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    loadSong(currentSongIndex);
    playPause();
}

function nextSong() {
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    loadSong(currentSongIndex);
    playPause();
}

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

if(song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function() {
    song.currentTime = progress.value;
}

window.onload = loadSong(currentSongIndex);
