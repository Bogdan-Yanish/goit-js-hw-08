import { save, load } from "./partials/storagemethod";
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  save(CURRENT_TIME_KEY, data.seconds); //localStorage.setItem(CURRENT_TIME_KEY, data.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));
let currentTime = load(CURRENT_TIME_KEY); // let currentTime = localStorage.getItem(CURRENT_TIME_KEY);


function savedCurrentTimeOnVideo() {
  if (!currentTime) {
    currentTime = 0;
    return;
  } else {
    player.setCurrentTime(currentTime);
  }
}

savedCurrentTimeOnVideo(currentTime);

player.off('timeupdate', onPlay)

// player.on('play', function() {
//     console.log('played the video!');
// });
    
// const timeUpdate = player.on('timeupdate', function() {
//     console.log('time watch video');
// });





 