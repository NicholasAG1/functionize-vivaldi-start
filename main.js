// Vivald JS Example

// When a Season Button is Clicked
document.getElementById('springBtn').addEventListener('click', setSpring);
document.getElementById('summerBtn').addEventListener('click', setSummer);
document.getElementById('autumnBtn').addEventListener('click', setAutumn);
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
    setSeason ('Winter', '#1C64B9') 
}

// Event Functions
function setSeason(name, color) {
    // - change concerto text
    document.getElementById('season-text').innerHTML = name;
    
    // - change main image
    document.getElementById('main-img').src = 'images/' + name + '.jpg';
     
    // - change page background color
    document.body.style.backgroundColor = color;
     
    // - change audio source
    document.getElementById('song').src = 'songs/vivaldi-' + name + '.mp3';
     
}
