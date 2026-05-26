document.querySelectorAll('.wishlist').forEach(heart => {
    heart.addEventListener('click', () => {
        heart.style.color = heart.style.color === 'red' ? '#e6a06c' : 'red'
    })
})