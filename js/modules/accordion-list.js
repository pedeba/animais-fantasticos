export default function initAccordion() {
  const accordionLista = document.querySelectorAll('.js-accordion dt');
  if (accordionLista.length) {
    // eslint-disable-next-line no-inner-declarations
    function activeAccordion(event) {
      event.currentTarget.classList.toggle('ativo');
      event.currentTarget.nextElementSibling.classList.toggle('ativo');
    }
    accordionLista.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
