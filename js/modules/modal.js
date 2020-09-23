export default function initModal() {
    const btnAbrir = document.querySelector('[data-modal="abrir"]')
    const btnFechar = document.querySelector('[data-modal="fechar"]')
    const containerModal = document.querySelector('[data-modal="container"]')

    if (btnFechar && btnAbrir && containerModal) {
        function abrirModal(event){
            event.preventDefault()
            containerModal.classList.add('ativo')
        }
        btnAbrir.addEventListener('click', abrirModal)


        function fecharModal(){
            containerModal.classList.remove('ativo')
        }
        btnFechar.addEventListener('click', fecharModal)


        function cliqueforafechar(event){
            if(event.target === this){
                containerModal.classList.remove('ativo')
            }
        }
        containerModal.addEventListener('click', cliqueforafechar)
    }
}

