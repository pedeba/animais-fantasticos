export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
    const section = document.querySelectorAll('.grid-section')   
    function scrollToSection(event, index) {
        event.preventDefault()
        const topo = section[index].offsetTop
        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        })
    
    }
    linksInternos.forEach((link, index) => {
        link.addEventListener('click', () =>{
        scrollToSection(event,index)
    })
})
}
