export default class Accordion {
  constructor(list){
    this.accordionLista = document.querySelectorAll(list);
    this.activeClass = 'ativo'
  }
  toggleAccordion(item) {
      item.classList.toggle(this.activeClass);
      item.nextElementSibling.classList.toggle(this.activeClass);
  }
  addaccordionevent(){
    this.accordionLista.forEach((item) => {
      item.addEventListener('click', ()=> this.toggleAccordion(item));
    });
  }
  init(){
    this.addaccordionevent()
  }
}
