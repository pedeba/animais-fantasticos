export default function initTabNav() {
    const tabmenu = document.querySelectorAll('.js-tabmenu li')
    const tabcontent = document.querySelectorAll('.js-tabcontent section')
    if(tabcontent.length && tabmenu.length){
        tabcontent[0].classList.add('ativo')
        function tab (index) {
            tabcontent.forEach((itens) => {
                itens.classList.remove('ativo')
            })
            const direcao = tabcontent[index].dataset.anime
            tabcontent[index].classList.add('ativo', direcao)
        }
        tabmenu.forEach((item, index) => {
            item.addEventListener('click', function(){
                tab(index)
            })
        })
    }
}
