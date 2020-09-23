export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')

dropdownMenus.forEach((menu)=>{
    menu.addEventListener('click', handleClick)
    menu.addEventListener('touchstart', handleClick)
})

function handleClick(event) {
    event.preventDefault()
    this.classList.toggle('ativo')
    outsideClick(this, function(){
        console.log('ativou')
    })
}


function outsideClick(element, callback) {
    const html = document.documentElement
    html.addEventListener('click', handleoutsideClick)
    function handleoutsideClick() {
        console.log(element)
        callback()
    }
}
}



