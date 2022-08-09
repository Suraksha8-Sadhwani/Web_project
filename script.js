const music = new Audio('songs/1.mp3');

//create Array
const songs = [
    {
        id: "1",
        songName: `Mana k hum yar nhi <br>
        <div class="subtitle">Pariniti</div>`,
        poster: "covers/1.jpg",
    },
    {
        id: "2",
        songName: `kabhi kabhi adti <br>
        <div class="subtitle">AR.Rehman</div>`,
        poster: "covers/2.jpg",
    },
    {
        id: "3",
        songName: `give me some sunshine <br>
        <div class="subtitle">Suraj Jagan</div>`,
        poster: "covers/3.jpg",
    },
    {
        id: "4",
        songName: `kesariya tera ishq hai <br>
        <div class="subtitle">Arijit</div>`,
        poster: "covers/4.jpg",
    },
    {
        id: "5",
        songName: `apna har pal ese jiyo <br>
        <div class="subtitle">Sanket</div>`,
        poster: "covers/5.jpg",
    },
    {
        id: "6",
        songName: `yaroon ki yaari <br>
        <div class="subtitle">Idol Fam</div>`,
        poster: "covers/6.jpg",
    },
    {
        id: "7",
        songName: `Ek Pyar Ka Nagma <br>
        <div class="subtitle">Sanam</div>`,
        poster: "covers/7.jpg",
    },
    {
        id: "8",
        songName: `Pi Jaun <br>
        <div class="subtitle">Farhan</div>`,
        poster: "covers/8.jpg",
    },
    {
        id: "9",
        songName: `Iktara  <br>
        <div class="subtitle">Trivedi</div>`,
        poster: "covers/9.jpg",
    },
    {
        id: "10",
        songName: `Jab Koi Baat <br>
        <div class="subtitle">Atif</div>`,
        poster: "covers/10.jpg",
    },
    {
        id: "11",
        songName: `Kabira <br>
        <div class="subtitle">Arijit</div>`,
        poster: "covers/11.jpg",
    },
    {
        id: "12",
        songName: `Main Rahoon Ya <br>
        <div class="subtitle">Armaan</div>`,
        poster: "covers/12.jpg",
    },
    {
        id: "13",
        songName: `Mere Humsafar Original <br>
        <div class="subtitle">Yashal</div>`,
        poster: "covers/13.jpg",
    },
    {
        id: "14",
        songName: `Namo Namo <br>
        <div class="subtitle">Amitabh B</div>`,
        poster: "covers/14.jpg",
    },
    {
        id: "15",
        songName: `Tum Se Hi Lyrcial <br>
        <div class="subtitle"> Mohit </div>`,
        poster: "covers/15.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) =>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) =>{
        element.classList.remove('bi-pause-circle-fill'); 
        element.classList.add('bi-play-circle-fill');
    })
}

const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) =>{
        element.style.background = 'rgb(105, 105, 170, 0)';
})
}