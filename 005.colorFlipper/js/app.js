const colors = ['#fad2e1', '#e2ece9', '#cddafd', '#fff1e6'];
const clickMeBtn = document.getElementById('clickMeBtn');

rgbButton(clickMeBtn);

function rgbButton(btn)
{
  let i = 0;
  setInterval(() => {
    if (!colors[i])
    {
      i = 0;
    }
    else
    {
      i++;
    }
    btn.style.backgroundColor = colors[i];
  }, 100);
}