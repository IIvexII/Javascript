class Clock {
  constructor () {
    this.hours = document.querySelector('#display-screen #time #hours');
    this.minutes = document.querySelector('#display-screen #time #minutes');
    this.seconds = document.querySelector('#display-screen #time #seconds');
    this.reset();
  }
  start = () => {
    this.intervalId = setInterval(() => {
      let seconds = +this.seconds.textContent + 1;
      if (seconds <= 60){
        this.seconds.textContent = this.numberAsString(seconds);
      }
      else 
      {
        this.seconds.textContent = this.numberAsString(0);
        if (+this.minutes.textContent + 1 === 60) {
          this.minutes.textContent = this.numberAsString(0);
          if (+this.hours.textContent + 1 === 24) {
            this.hours.textContent = this.numberAsString(0);
          }
          else {
            this.hours.textContent = this.numberAsString(+this.hours.textContent + 1);
          }
        }
        else
        {
          this.minutes.textContent = this.numberAsString(+this.minutes.textContent + 1);
        }
      }
    }, 16.6);
  }

  stop = () =>{
    clearInterval(this.intervalId);
  }
  reset = () => {
    this.hours.textContent = '00'; 
    this.minutes.textContent = '00'; 
    this.seconds.textContent = '00'; 

    clearInterval(this.intervalId);
  }

  // Private functions
  
  numberAsString = (num) => {
    let str = num;
    if (num <= 9) {
      num = '0' + num;
    }
    return num;
  }
}