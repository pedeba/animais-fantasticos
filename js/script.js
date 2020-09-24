import initScrollSuave from  './modules/scroll-suave.js'
import ScrollAnima from './modules/scroll-animacao.js'
import Accordion from './modules/accordion-list.js'
import TabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import initDataObject from './modules/data-object.js'
import fetchAnimais from './modules/fetch-animais.js'

const accordion = new Accordion('.js-accordion dt')
accordion.init()

const tabnav = new TabNav('.js-tabmenu li', '.js-tabcontent section')
tabnav.init()

fetchAnimais('../../animaisapi.json','.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco')

const scrollanima = new ScrollAnima('.js-scroll')
scrollanima.init()
initScrollSuave()
initScrollAnima()


initModal()
initTooltip()
initDropdownMenu()
initMenuMobile()
initFetchBitcoin()
initDataObject()
