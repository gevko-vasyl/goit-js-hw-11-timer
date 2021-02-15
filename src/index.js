import './styles.css';

// const daysRef = document.querySelector('[data-value="days"]');
// const hoursRef = document.querySelector('[data-value="hours"]');
// const minsRef = document.querySelector('[data-value="mins"]');
// const secsRef = document.querySelector('[data-value="secs"]');

// daysRef.textContent = '00';
// hoursRef.textContent = '00';
// minsRef.textContent = '00';
// secsRef.textContent = '00';

class CountdownTimer{

    constructor({ selector, targetDate }) {

        this.template = `<div class="field">
    <span class="value" data-value="days">11</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">11</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">11</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">11</span>
    <span class="label">Seconds</span>
  </div>`;
        
        this.selector = selector;
        this.root = document.querySelector(this.selector)
        this.targetDate = targetDate;
        this.root.insertAdjacentHTML('beforeend', this.template);
        this.refs = {
            days : this.root.querySelector('[data-value="days"]'),
            hours : this.root.querySelector('[data-value="hours"]'),
            mins : this.root.querySelector('[data-value="mins"]'),
            secs : this.root.querySelector('[data-value="secs"]'),
        }
        this.startCountdown();
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

        this.refs.days.textContent = `${days}`;
        this.refs.hours.textContent = `${hours}`;
        this.refs.mins.textContent = `${mins}`;
        this.refs.secs.textContent = `${secs}`;

        if (days <= 0) {
           this.refs.days.textContent = '00'; 
        };
        if (hours <= 0) {
           this.refs.hours.textContent = '00'; 
        };
        if (mins <= 0) {
           this.refs.mins.textContent = '00'; 
        };
        if (secs <= 0) {
           this.refs.secs.textContent = '00'; 
        };

    }
};


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});


const timer2= new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Feb 17, 2021'),
});

const timer3= new CountdownTimer({
  selector: '#timer-3',
  targetDate: new Date('Feb 28, 2021'),
});

