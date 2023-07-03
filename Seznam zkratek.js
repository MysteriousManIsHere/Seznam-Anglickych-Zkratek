var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];
var index = 0;

function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}

setInterval(changeBackgroundColor, 1000);
