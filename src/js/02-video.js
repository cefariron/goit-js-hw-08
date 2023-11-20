import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function handleTimeUpdate(event) {
  const currentTime = event.seconds;

  localStorage.setItem('videoplayer-current-time', currentTime);
}

const throttledHandleTimeUpdate = throttle(handleTimeUpdate, 1000);

player.on('timeupdate', throttledHandleTimeUpdate);

const savedTime = localStorage.getItem('videoplayer-current-time');

  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
