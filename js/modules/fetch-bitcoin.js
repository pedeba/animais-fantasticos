
export default function fetchBitcoin(url, target){
    
        fetch(url)
        .then(response=>response.json())
        .then((json)=>{
        const btcpreco = document.querySelector(target)
        btcpreco.innerText = (100/json.BRL['buy']).toFixed(4)
        })
        .catch((erro)=>{
            console.log(Error(erro))
        })
    
}

