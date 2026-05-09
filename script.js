
window.addEventListener('mousemove', (e) => {
  // 1.Create a new div everytime it moves so there is a trail
  	let particle = document.getElementById('div')
  //assign them class in css
	particle.className = 'trail-particle'

  	particle.style.left = `${e.pageX}px`
  	particle.style.top = `${e.pageY}px`
});