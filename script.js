document.addEventListener('touchmove', (e) => {
    console.log(e.touches[0].clientX);
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${( Math.round(e.touches[0].clientX) - window.innerWidth / 2 ) * .1}deg;
            --move-y: ${( Math.round(e.touches[0].clientY) - window.innerHeight / 2) * -.05}deg;
        `
    })
})

document.addEventListener('mousemove', (e) => {

    Object.assign(document.documentElement, {
        style: `
            --move-x: ${( e.clientX - window.innerWidth / 2 ) * -.01}deg;
            --move-y: ${( e.clientY - window.innerHeight / 2) * .02}deg;
        `
    })
})

let a = 0;
function move() {
    a = Math.round( Math.random() * 40 );
    document.querySelector('.test').style.transform = `rotateZ(${a}deg)`;
    setTimeout(move, 2000)
}

// move();