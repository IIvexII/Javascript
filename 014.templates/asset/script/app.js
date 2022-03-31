class App {  
  static showHeader = () => {
    this.headerTemplate = document.getElementById('header-template');

    const header = document.createElement('header');
    header.importNode(header);

    document.body.appendChild(header);
  }
}
App.showHeader();