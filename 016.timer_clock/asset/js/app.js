class App {
  static clock = new Clock;
  static stopBtn = document.getElementById('stop-btn');
  static startBtn = document.getElementById('start-btn');
  static resetBtn = document.getElementById('reset-btn');

  static init() {
    this.startBtn.addEventListener('click', this.clock.start);
    this.stopBtn.addEventListener('click', this.clock.stop);
    this.resetBtn.addEventListener('click', this.clock.reset);
  }
};
App.init();