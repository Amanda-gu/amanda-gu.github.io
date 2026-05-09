//code taken from links, but instead of creating new shape, i defined the shapes in html and styled them in css, and then just move them with js
window.addEventListener('pointermove', (e) => {
 
  	let hLine = document.getElementById('h-line')
    let vLine = document.getElementById('v-line')
    let sq = document.getElementById('sq')

    hLine.style.left = `${e.pageX}px`
    hLine.style.top = `${e.pageY}px`

    vLine.style.left = `${e.pageX}px`
    vLine.style.top = `${e.pageY}px`

    sq.style.left = `${e.pageX}px`
    sq.style.top = `${e.pageY}px`
});