var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    var img = new Image(); 
var div = document.getElementById('countdown'); 
 
img.onload = function() { 
  div.appendChild(img); 
}; 
 
img.src = "guvi-independence-day-wishes4.jpg"
//img.src = "https://www.teahub.io/photos/full/36-364539_indian-independence-day-gif-2018.gif"
    
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " Second Remaining...";
  }
  timeleft -= 1;
}, 1000);