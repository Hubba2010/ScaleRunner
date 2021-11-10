import Timer from './timer.js';

const tempoDisplay = document.querySelector('.tempo');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');

const click1 = new Audio('./sound/click1.mp3');
const click2 = new Audio('./sound/click2.mp3');

let bpm = 140;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;

decreaseTempoBtn.addEventListener('click', () => {
	if (bpm <= 20) {
		return;
	}
	bpm--;
	validateTempo();
	updateMetronome();
});
increaseTempoBtn.addEventListener('click', () => {
	if (bpm >= 280) {
		return;
	}
	bpm++;
	validateTempo();
	updateMetronome();
});
tempoSlider.addEventListener('input', () => {
	bpm = tempoSlider.value;
	validateTempo();
	updateMetronome();
});

subtractBeats.addEventListener('click', () => {
	if (beatsPerMeasure <= 2) {
		return;
	}
	beatsPerMeasure--;
	measureCount.textContent = beatsPerMeasure;
	count = 0;
});
addBeats.addEventListener('click', () => {
	if (beatsPerMeasure >= 12) {
		return;
	}
	beatsPerMeasure++;
	measureCount.textContent = beatsPerMeasure;
	count = 0;
});

startStopBtn.addEventListener('click', () => {
	count = 0;
	if (!isRunning) {
		metronomePlay.start();
		isRunning = true;
		startStopBtn.textContent = 'STOP';
	} else {
		stopMetronome();
	}
});

function updateMetronome() {
	tempoDisplay.textContent = bpm;
	tempoSlider.value = bpm;
	metronomePlay.timeInterval = 60000 / bpm;
}
function validateTempo() {
	if (bpm <= 20) {
		return;
	}
	if (bpm >= 280) {
		return;
	}
}

function playClick() {
	console.log(count);
	if (count === beatsPerMeasure) {
		count = 0;
	}
	if (count === 0) {
		click2.play();
		click2.currentTime = 0;
	} else {
		click1.play();
		click1.currentTime = 0;
	}
	count++;
}

function stopMetronome() {
	metronomePlay.stop();
	isRunning = false;
	startStopBtn.textContent = 'START';
}

const metronomePlay = new Timer(playClick, 60000 / bpm, { immediate: true });

///////// DOM

const metronomeBtn = document.querySelector('.metronome-btn');
const responsiveMetronomeBtn = document.querySelector(
	'.metronome-toggle__responsive'
);
const metronome = document.querySelector('.metronome__container');

const toggleMetronome = function () {
	if (toggler.classList.contains('active')) {
		toggler.style.backgroundColor = 'gray';
		metronome.classList.add('hide-metronome');
	} else {
		toggler.style.backgroundColor = 'black';
		metronome.classList.remove('hide-metronome');
	}
	toggler.classList.toggle('active');
	responsiveMetronomeBtn.childNodes[1].classList.toggle('fa-toggle-on');
	responsiveMetronomeBtn.childNodes[1].classList.toggle('fa-toggle-off');
};

metronomeBtn.addEventListener('click', function () {
	toggleMetronome();
	stopMetronome();
});
responsiveMetronomeBtn.addEventListener('click', function () {
	toggleMetronome();
	stopMetronome();
});
