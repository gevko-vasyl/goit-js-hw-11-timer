import './styles.css';

const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

daysRef.textContent = '00';
hoursRef.textContent = '00';
minsRef.textContent = '00';
secsRef.textContent = '00';

class CountdownTimer{
    constructor({ selector, targetDate } ) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    startCountdown() {
        const timerId = setInterval(() => {
            const currentTime = Date.now();
            const targetTime = this.targetDate.getTime();
            const deltaTime = targetTime - currentTime;
            if (deltaTime <= 0) {
                clearInterval(timerId)
            };
            this.updateClockFace(deltaTime);
        },1000);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    updateClockFace(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        daysRef.textContent = `${days}`;
        hoursRef.textContent = `${hours}`;
        minsRef.textContent = `${mins}`;
        secsRef.textContent = `${secs}`;

        if (days <= 0) {
           daysRef.textContent = '00'; 
        };
        if (hours <= 0) {
           hoursRef.textContent = '00'; 
        };
        if (mins <= 0) {
           minsRef.textContent = '00'; 
        };
        if (secs <= 0) {
           secsRef.textContent = '00'; 
        };

    }
};


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.startCountdown();