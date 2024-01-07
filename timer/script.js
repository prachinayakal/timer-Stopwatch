
let timer = 0
let timerID;
let lapCount = 1;
const Id = document.getElementById('parentID')
const lapsList = document.getElementById('laps');

const start = () => {
  timerID = setInterval(() => {
    Id.textContent = ++timer
  },1000)
};

const stop = () => {
  clearInterval(timerID);
};
const lap = () => {
  const lapTime = timer;
  const lapItem = document.createElement('li'); 
  lapItem.innerHTML = `Lap ${lapCount}: ${lapTime}`;
  lapsList.appendChild(lapItem); 
  lapCount++;
  document.getElementById('parentID').innerHTML = ++timer;
};