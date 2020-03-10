/*Nav menu button handler for mobile*/

window.onresize = function(){check()};
        
function check(){
    if(window.innerWidth > 650){
        document.getElementById('nav').style.display = 'block';
    } else{
        document.getElementById('nav').style.display = 'none';
    }
}

function displayMenu(){
  if(document.getElementById('nav').style.display == 'grid'){
      document.getElementById('nav').style.display = 'none';
  } else{
      document.getElementById('nav').style.display = 'grid';
  }
}