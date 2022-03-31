const stopAnalyticsBtn = document.getElementById('stop-analytics-btn');
const ms = 3000;
// It will run once after some time.
const timeoutId = setTimeout((sec = ms/1000)=> {
  const text = document.createElement('h1');
  text.textContent += `Timeout after ${sec} seconds`; 
  document.body.append(text);
}, ms);
const intervalId = setInterval(() => {
  console.log('Sending analytics....');  
},1000);

stopAnalyticsBtn.addEventListener('click',()=>{
  clearInterval(intervalId);
  clearTimeout(timeoutId);
});