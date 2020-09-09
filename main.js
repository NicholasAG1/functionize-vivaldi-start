// Vivald JS Example

// When a Season Button is Clicked
document.getElementById('summerBtn').addEventListener('click', setSeason('Summer', '#1BA848' ));
document.getElementById('autumnBtn').addEventListener('click', setSeason('Autumn', '#FE6732'));
document.getElementById('winterBtn').addEventListener('click', setSeason('Winter', '#1C64B9'));
document.getElementById('springBtn').addEventListener('click', setSeason('Spring', '#0E94D1')); 

// Event Functions
function setSeason(name, color) {
    // - change concerto text
    document.getElementById('season-text').innerHTML = name;
    
    // - change main image
    document.getElementById('main-img').src = 'images/' + name.tolowercase() + '.jpg';
     
    // - change page background color
    document.body.style.backgroundColor = 'color';
     
    // - change audio source
    document.getElementById('song').src = 'songs/vivaldi-' + name.tolowercase() + '.mp3';
     
}

