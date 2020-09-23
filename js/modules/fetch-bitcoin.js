
export default function initFetchBitcoin(){
    
        fetch('https://blockchain.info/ticker')
        .then(response=>response.json())
        .then((json)=>{
        const btcpreco = document.querySelector('.btc-preco')
        btcpreco.innerText = (100/json.BRL['buy']).toFixed(4)
        })
        .catch((erro)=>{
            console.log(Error(erro))
        })
    
}

