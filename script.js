let modal = document.querySelector('.modal-parent')
let main = document.querySelector('.main')
let close = document.querySelector('.close')
let button = document.querySelector('button')

button.addEventListener('click',function(){
    modal.style.display='block'
    main.style.filter='blur(10px)'
})

close.addEventListener('click',function(){
    modal.style.display='none'
    main.style.filter='blur(0px)'
})

document.body.addEventListener('keydown',function(event){
    if (event.code === 'Escape') {
        modal.style.display='none'
        main.style.filter='blur(0px)'
    }
})


