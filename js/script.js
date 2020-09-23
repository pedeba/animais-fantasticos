import initScrollSuave from  './modules/scroll-suave.js'
import initScrollAnima from './modules/scroll-animacao.js'
import Accordion from './modules/accordion-list.js'
import initTabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'
import initDataObject from './modules/data-object.js'
import initFetchAnimais from './modules/fetch-animais.js'

const accordion = new Accordion('.js-accordion dt')
accordion.init()
initScrollSuave()
initScrollAnima()

initTabNav()
initModal()
initTooltip()
initDropdownMenu()
initMenuMobile()
initFetchBitcoin()
initDataObject()
initFetchAnimais()
