export default class TabNav {
    constructor(menu,content){
        this.tabmenu = document.querySelectorAll(menu)
        this.tabcontent = document.querySelectorAll(content)
        this.activeclass = 'ativo'
    }
    tab(index) {
        this.tabcontent.forEach((itens) => {
            itens.classList.remove(this.activeclass)
        })
        const direcao = this.tabcontent[index].dataset.anime
        this.tabcontent[index].classList.add(this.activeclass, direcao)
    }   
    
    addnavtabevent(){
        this.tabmenu.forEach((item, index) => {
            item.addEventListener('click', ()=> this.tab(index))
        })
    }

    init(){
        if(this.tabmenu.length && this.tabcontent.length){
            this.tab(0)
            this.addnavtabevent()
        }
    }
    
}