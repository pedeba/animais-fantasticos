export default function initMenuMobile(){
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    
    
    function openMenu(){
        menuList.classList.toggle('ativo')
        menuButton.classList.toggle('ativo')
    }
    
    menuButton.addEventListener('click', openMenu)   
}

