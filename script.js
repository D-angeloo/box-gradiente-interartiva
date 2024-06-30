const card = document.querySelector('.card')

if (card) {
window.addEventListener('mousemove', ({ clientX, clientY}) => {
    const {x, y, width, height} = card.getBoundingClientRect()
    const dx = clientX - (x +  0.5 * width)
    const dy = clientY - (y + 0.5 * height)
    const angle = Math.atan2(dy, dx) * 180 / Math.PI

card.style.setProperty('--startDeg', `${angle +90}deg`)

}, false)
}else {
    console.error('Elemento .card nao encontrado.')
}
