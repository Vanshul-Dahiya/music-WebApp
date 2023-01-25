// initialize the variables
let songInd = 0;
const audioEl = new Audio("songs/1.mp3");
// play button
const masterPlay = document.getElementById("masterPlay");
const progressBar = document.getElementById("progressBar");
const gifEl = document.getElementById("gif");
const songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "nightcore",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "2nd",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "nightce",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "nigtce",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "nitce",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "nhtce",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "nightore",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "nighte",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "nightcoe",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "nghtcore",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioEl.play();

// handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioEl.paused || audioEl.currentTime <= 0) {
    audioEl.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gifEl.style.opacity = 1;
  } else {
    audioEl.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gifEl.style.opacity = 0;
  }
});

// listen to events

audioEl.addEventListener("timeupdate", () => {
  // update seekbar
  progress = parseInt((audioEl.currentTime / audioEl.duration) * 100);
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioEl.currentTime = (progressBar.value * audioEl.duration) / 100;
});
