export default function initAnimaNumeros(){

}

function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')
    numeros.forEach((numero)=>{
    const total = +numero.innerText
    const encremento = Math.floor(total/100)
    let start = 0
    const timer = setInterval(()=>{
        start = start + encremento
        numero.innerText = start
        if(start>total) {
            numero.innerText = total
             clearInterval(timer)
        }
    },25 * Math.random())
})
}


function aaa(mutation){
    if(mutation[0].target.classList.contains('ativo')){
        observer.disconnect()
        animaNumeros()
    }
}
const observado = document.querySelector('.numeros')
const observer = new MutationObserver(aaa)
observer.observe(observado, {attributes: true})