class App {
  constructor () {
    this.allProjects = document.querySelectorAll('li');
  }
  render() {
    for (const project of this.allProjects) {
      const infoBtn = project.querySelector('button:first-of-type');
      const statusBtn = project.querySelector('button:last-of-type');
      infoBtn.addEventListener('click', this.buttonEvent.bind(project, infoBtn));
      statusBtn.addEventListener('click', this.buttonEvent.bind(project, statusBtn));
    }
  }
  buttonEvent(btn) {
    if (btn.textContent === 'Finish') {
      const finishedProjects = document.querySelector('#finished-projects ul');  
      btn.textContent = 'Activate';
      finishedProjects.appendChild(this);
    }
    else if (btn.textContent === 'Activate') {
      const finishedProjects = document.querySelector('#active-projects ul');  
      btn.textContent = 'Finish';
      finishedProjects.appendChild(this);
    }
    else if (btn.textContent === 'More Info') {
      const newELm = document.createElement('div');
      newELm.className = 'card';
      newELm.textContent = this.dataset.extraInfo;
      document.body.insertAdjacentElement('afterBegin', newELm);
    }
  }
}

const app = new App();
app.render();