let copy = document.querySelector('.copiami');

copy.addEventListener('copy', e => {
    console.log(`Ehi! 'Zzo fai? Il mio contetnuto è protetto da copyright!`);
    e.target.classList.add('error');
});

let box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.innerHTML = `x pos = ${e.offsetX} <br> y pos = ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});