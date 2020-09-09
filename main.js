// Vivald JS Example

// When a Season Button is Clicked
document.getElementById('springbtn').addEventListener('click', setSpring);
document.getElementById('summerbtn').addEventListener('click', setSummer);
document.getElementById('autumnbtn').addEventListener('click', setAutumn);
document.getElementById('winterBtn').addEventListener('click', setWinter);

function setSpring(){
    setSeason('Spring', '#0E94D1')
}

function setSummer(){
    setSeason('Summer', '#1BA848')
}

function setAutumn(){
    setSeason('Autumn', '#FE6732' )
}

function setWinter(){
    setSeason ('winter', '#1C64B9' )
}

// Event Functions
function setSeason(name, color) {
    // - change concerto text
    document.getElementById('season-text').innerHTML = name;
    
    // - change main image
    document.getElementById('main-img').src = 'images/' + name.tolowercase() + '.jpg';
     
    // - change page background color
    document.body.style.backgroundColor = color;
     
    // - change audio source
    document.getElementById('song').src = 'songs/vivaldi-' + name.tolowercase() + '.mp3';
     
}

