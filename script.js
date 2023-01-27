// ! Improvements to do ->
// * switch songItemPlay to pause button when paused from masterPlay
// * add responsiveness
// * bottom div
// * automatically play next song when previous song ends (songIndex++)

// initialize the variables
let songIndex = 0;
const audioEl = new Audio("songs/1.mp3");
// play button
const masterPlay = document.getElementById("masterPlay");
const progressBar = document.getElementById("progressBar");
const gifEl = document.getElementById("gif");
const masterSongNameEl = document.getElementById("masterSongName");
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

// ! listen to events

audioEl.addEventListener("timeupdate", () => {
  // update seekbar
  progress = parseInt((audioEl.currentTime / audioEl.duration) * 100);
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioEl.currentTime = (progressBar.value * audioEl.duration) / 100;
});

// ! change play button to pause button in songList

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      audioEl.src = `songs/${songIndex}.mp3`;
      masterSongNameEl.innerText = songs[songIndex].songName;
      audioEl.currentTime = 0;
      audioEl.play();
      gifEl.style.opacity = 1;
      masterPlay?.classList.remove("fa-play");
      masterPlay?.classList.add("fa-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 10) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioEl.src = `songs/${songIndex}.mp3`;
  masterSongNameEl.innerText = songs[songIndex].songName;
  audioEl.currentTime = 0;
  audioEl.play();
  gifEl.style.opacity = 1;
  masterPlay?.classList.remove("fa-play");
  masterPlay?.classList.add("fa-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioEl.src = `songs/${songIndex}.mp3`;
  masterSongNameEl.innerText = songs[songIndex].songName;
  audioEl.currentTime = 0;
  audioEl.play();
  gifEl.style.opacity = 1;
  masterPlay?.classList.remove("fa-play");
  masterPlay?.classList.add("fa-pause");
});
