const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    console.log('clicked')
}
)

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'red'
})

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'blue'
})

const btn2 = document.querySelector('#btn2')

btn2.addEventListener('mouseover', () => {
    console.log('Mouse over me');
    const h = Math.floor(Math.random() * window.innerHeight);
    const w = Math.floor(Math.random() * window.innerWidth);
    btn2.style.left = `${w}px`;
    btn2.style.top = `${h}px`;
})

