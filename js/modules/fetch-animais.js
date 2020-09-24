import AnimaNumeros from './anima-numeros.js'
export default function fetchAnimais(url, target){
    async function criarAnimais(){
        const animaisResponse = await fetch(url)
        const animaisJson = await animaisResponse.json()
        const numerosGrid = document.querySelector(target)
        animaisJson.forEach((animal)=>{
            const divAnimal = createAnimal(animal)
            numerosGrid.appendChild(divAnimal)
        })
        const animanumeros =  new AnimaNumeros('[data-numero]','.numeros', 'ativo')
        animanumeros.init()
    }
    
    function createAnimal(animal){
        const div = document.createElement('div')
        div.classList.add('numero-animal')
        div.innerHTML= `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
        return div
    }
    
    return criarAnimais()    
}

