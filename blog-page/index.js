const filterBtn = document.querySelectorAll(`.filter-btn`)
const posts = document.querySelectorAll(`.future-details`)

filterBtn.forEach(btn =>{
    btn.addEventListener(`click`, () =>{

        filterBtn.forEach(b => b.classList.remove(`active`))
        btn.classList.add(`active`)

        const filter = btn.textContent.toUpperCase()

        posts.forEach(post =>{
            const category = post.querySelector(`h5`).textContent.toUpperCase()

            if(filter === `ALL` || category === filter){
                post.style.display = 'flex'
            }else{
                post.style.display = 'none'
            }
        })
    })
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            