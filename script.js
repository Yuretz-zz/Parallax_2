document.addEventListener('touchmove', (e) => {
    console.log(e.touches[0].clientX);
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${( Math.round(e.touches[0].clientX) - window.innerWidth / 2 ) * .1}deg;
            --move-y: ${( Math.round(e.touches[0].clientY) - window.innerHeight / 2) * -.05}deg;
        `
    })
})