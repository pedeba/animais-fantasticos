export default class AnimaNumeros{
    constructor(numeros,observertarget, observerclass){
        this.numeros = document.querySelectorAll(numeros)
        this.observertarget = document.querySelector(observertarget)
        this.observerclass = observerclass
        this.aaa = this.aaa.bind(this)
    }
    static incrementarNumero(){
        const total = +numero.innerText
        const incremento = Math.floor(total/100)
        let start = 0
        const timer = setInterval(()=>{
            start = start + incremento
            numero.innerText = start
            if(start>total) {
                numero.innerText = total
                 clearInterval(timer)
            }
        },25 * Math.random())
    }
    animaNumeros() {
        this.numeros.forEach(numero=> this.constructor.incrementarNumero(numero))
    }
    aaa(mutation){
        if(mutation[0].target.classList.contains(this.observerclass)){
            this.observer.disconnect()
            this.animaNumeros()
        }
    }
    addmutationobserver(){
        this.observer = new MutationObserver(this.aaa)
        this.observer.observe(this.observertarget, {attributes: true})
    }
    init(){
        this.addmutationobserver()
    }
}




