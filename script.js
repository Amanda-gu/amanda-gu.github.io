
window.addEventListener('mousemove', (e) => {
  // 1.Create a new div everytime it moves so there is a trail
  	let hLine = document.getElementById('h-line')
    let vLine = document.getElementById('v-line')

    hLine.style.left = `${e.pageX}px`
    hLine.style.top = `${e.pageY}px`

    vLine.style.left = `${e.pageX}px`
    vLine.style.top = `${e.pageY}px`
});