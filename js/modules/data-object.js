export default function initDataObject() {

}
// const agora = new Date()
// console.log(agora.getDay()) 
// console.log(agora.getTime())
// const futuro =  new Date('Dec 24 2021')
// function transformaDias(tempo){
//     return tempo/ (24 * 60 * 60 * 1000)
// }
// const diasAgr = transformaDias(agora.getTime())
// const diasFuturo = transformaDias(futuro.getTime())
// console.log(Math.floor(diasFuturo - diasAgr))

const funcionamento = document.querySelector("[data-semana]")
const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
const horaSemana = funcionamento.dataset.horario.split(',').map(Number)
const dataAgora = new Date()
const diaAgora = dataAgora.getDay()
const horaAgora = dataAgora.getHours()
const abertoSemana = diasSemana.includes(diaAgora)
const horaAberto = (horaAgora >= horaSemana[0] && horaAgora< horaSemana[1]) 
if(abertoSemana && horaAberto){
    funcionamento.classList.add('aberto')
} else {
    funcionamento.classList.remove('aberto')
}