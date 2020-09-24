/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/accordion-list.js":
/*!**************************************!*\
  !*** ./js/modules/accordion-list.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Accordion; });\nclass Accordion {\r\n  constructor(list){\r\n    this.accordionLista = document.querySelectorAll(list);\r\n    this.activeClass = 'ativo'\r\n  }\r\n  toggleAccordion(item) {\r\n      item.classList.toggle(this.activeClass);\r\n      item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n  addaccordionevent(){\r\n    this.accordionLista.forEach((item) => {\r\n      item.addEventListener('click', ()=> this.toggleAccordion(item));\r\n    });\r\n  }\r\n  init(){\r\n    this.addaccordionevent()\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/accordion-list.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimaNumeros; });\nclass AnimaNumeros{\r\n    constructor(numeros,observertarget, observerclass){\r\n        this.numeros = document.querySelectorAll(numeros)\r\n        this.observertarget = document.querySelector(observertarget)\r\n        this.observerclass = observerclass\r\n        this.aaa = this.aaa.bind(this)\r\n    }\r\n    static incrementarNumero(){\r\n        const total = +numero.innerText\r\n        const incremento = Math.floor(total/100)\r\n        let start = 0\r\n        const timer = setInterval(()=>{\r\n            start = start + incremento\r\n            numero.innerText = start\r\n            if(start>total) {\r\n                numero.innerText = total\r\n                 clearInterval(timer)\r\n            }\r\n        },25 * Math.random())\r\n    }\r\n    animaNumeros() {\r\n        this.numeros.forEach(numero=> this.constructor.incrementarNumero(numero))\r\n    }\r\n    aaa(mutation){\r\n        if(mutation[0].target.classList.contains(this.observerclass)){\r\n            this.observer.disconnect()\r\n            this.animaNumeros()\r\n        }\r\n    }\r\n    addmutationobserver(){\r\n        this.observer = new MutationObserver(this.aaa)\r\n        this.observer.observe(this.observertarget, {attributes: true})\r\n    }\r\n    init(){\r\n        this.addmutationobserver()\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/data-object.js":
/*!***********************************!*\
  !*** ./js/modules/data-object.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initDataObject; });\nfunction initDataObject() {\r\n\r\n}\r\n// const agora = new Date()\r\n// console.log(agora.getDay()) \r\n// console.log(agora.getTime())\r\n// const futuro =  new Date('Dec 24 2021')\r\n// function transformaDias(tempo){\r\n//     return tempo/ (24 * 60 * 60 * 1000)\r\n// }\r\n// const diasAgr = transformaDias(agora.getTime())\r\n// const diasFuturo = transformaDias(futuro.getTime())\r\n// console.log(Math.floor(diasFuturo - diasAgr))\r\n\r\nconst funcionamento = document.querySelector(\"[data-semana]\")\r\nconst diasSemana = funcionamento.dataset.semana.split(',').map(Number)\r\nconst horaSemana = funcionamento.dataset.horario.split(',').map(Number)\r\nconst dataAgora = new Date()\r\nconst diaAgora = dataAgora.getDay()\r\nconst horaAgora = dataAgora.getHours()\r\nconst abertoSemana = diasSemana.includes(diaAgora)\r\nconst horaAberto = (horaAgora >= horaSemana[0] && horaAgora< horaSemana[1]) \r\nif(abertoSemana && horaAberto){\r\n    funcionamento.classList.add('aberto')\r\n} else {\r\n    funcionamento.classList.remove('aberto')\r\n}\n\n//# sourceURL=webpack:///./js/modules/data-object.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initDropdownMenu; });\nfunction initDropdownMenu(){\r\n    const dropdownMenus = document.querySelectorAll('[data-dropdown]')\r\n\r\ndropdownMenus.forEach((menu)=>{\r\n    menu.addEventListener('click', handleClick)\r\n    menu.addEventListener('touchstart', handleClick)\r\n})\r\n\r\nfunction handleClick(event) {\r\n    event.preventDefault()\r\n    this.classList.toggle('ativo')\r\n    outsideClick(this, function(){\r\n        console.log('ativou')\r\n    })\r\n}\r\n\r\n\r\nfunction outsideClick(element, callback) {\r\n    const html = document.documentElement\r\n    html.addEventListener('click', handleoutsideClick)\r\n    function handleoutsideClick() {\r\n        console.log(element)\r\n        callback()\r\n    }\r\n}\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFetchAnimais; });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\nfunction initFetchAnimais(){\r\n    async function fetchAnimais(url){\r\n        const animaisResponse = await fetch(url)\r\n        const animaisJson = await animaisResponse.json()\r\n        const numerosGrid = document.querySelector('.numeros-grid')\r\n        animaisJson.forEach((animal)=>{\r\n            const divAnimal = createAnimal(animal)\r\n            numerosGrid.appendChild(divAnimal)\r\n        })\r\n        const animanumeros =  new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-numero]','.numeros', 'ativo')\r\n        animanumeros.init()\r\n    }\r\n    \r\n    function createAnimal(animal){\r\n        const div = document.createElement('div')\r\n        div.classList.add('numero-animal')\r\n        div.innerHTML= `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`\r\n        return div\r\n    }\r\n    \r\n    \r\n    fetchAnimais('./animaisapi.json')    \r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFetchBitcoin; });\n\r\nfunction initFetchBitcoin(){\r\n    \r\n        fetch('https://blockchain.info/ticker')\r\n        .then(response=>response.json())\r\n        .then((json)=>{\r\n        const btcpreco = document.querySelector('.btc-preco')\r\n        btcpreco.innerText = (100/json.BRL['buy']).toFixed(4)\r\n        })\r\n        .catch((erro)=>{\r\n            console.log(Error(erro))\r\n        })\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initMenuMobile; });\nfunction initMenuMobile(){\r\n    const menuButton = document.querySelector('[data-menu=\"button\"]')\r\n    const menuList = document.querySelector('[data-menu=\"list\"]')\r\n    \r\n    \r\n    function openMenu(){\r\n        menuList.classList.toggle('ativo')\r\n        menuButton.classList.toggle('ativo')\r\n    }\r\n    \r\n    menuButton.addEventListener('click', openMenu)   \r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initModal; });\nfunction initModal() {\r\n    const btnAbrir = document.querySelector('[data-modal=\"abrir\"]')\r\n    const btnFechar = document.querySelector('[data-modal=\"fechar\"]')\r\n    const containerModal = document.querySelector('[data-modal=\"container\"]')\r\n\r\n    if (btnFechar && btnAbrir && containerModal) {\r\n        function abrirModal(event){\r\n            event.preventDefault()\r\n            containerModal.classList.add('ativo')\r\n        }\r\n        btnAbrir.addEventListener('click', abrirModal)\r\n\r\n\r\n        function fecharModal(){\r\n            containerModal.classList.remove('ativo')\r\n        }\r\n        btnFechar.addEventListener('click', fecharModal)\r\n\r\n\r\n        function cliqueforafechar(event){\r\n            if(event.target === this){\r\n                containerModal.classList.remove('ativo')\r\n            }\r\n        }\r\n        containerModal.addEventListener('click', cliqueforafechar)\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initScrollAnima; });\nfunction initScrollAnima(){\r\n    const sections = document.querySelectorAll('.js-scroll')\r\n    const windowMetade = window.innerHeight*0.6\r\n    if(sections.length){\r\n        function animaScroll(){\r\n            sections.forEach((section) =>{\r\n                const sectionTop = section.getBoundingClientRect().top - windowMetade\r\n                if(sectionTop<0) {\r\n                    section.classList.add('ativo')\r\n                } else if(section.classList.contains('ativo')){\r\n                    section.classList.remove('ativo')\r\n                }\r\n            })   \r\n\r\n        }\r\n        animaScroll()  \r\n        window.addEventListener('scroll', animaScroll)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initScrollSuave; });\nfunction initScrollSuave() {\r\n    const linksInternos = document.querySelectorAll('.js-menu a[href^=\"#\"]')\r\n    const section = document.querySelectorAll('.grid-section')   \r\n    function scrollToSection(event, index) {\r\n        event.preventDefault()\r\n        const topo = section[index].offsetTop\r\n        window.scrollTo({\r\n            top: topo,\r\n            behavior: 'smooth'\r\n        })\r\n    \r\n    }\r\n    linksInternos.forEach((link, index) => {\r\n        link.addEventListener('click', () =>{\r\n        scrollToSection(event,index)\r\n    })\r\n})\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TabNav; });\nclass TabNav {\r\n    constructor(menu,content){\r\n        this.tabmenu = document.querySelectorAll(menu)\r\n        this.tabcontent = document.querySelectorAll(content)\r\n        this.activeclass = 'ativo'\r\n    }\r\n    tab(index) {\r\n        this.tabcontent.forEach((itens) => {\r\n            itens.classList.remove(this.activeclass)\r\n        })\r\n        const direcao = this.tabcontent[index].dataset.anime\r\n        this.tabcontent[index].classList.add(this.activeclass, direcao)\r\n    }   \r\n    \r\n    addnavtabevent(){\r\n        this.tabmenu.forEach((item, index) => {\r\n            item.addEventListener('click', ()=> this.tab(index))\r\n        })\r\n    }\r\n\r\n    init(){\r\n        if(this.tabmenu.length && this.tabcontent.length){\r\n            this.tab(0)\r\n            this.addnavtabevent()\r\n        }\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack:///./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initTooltip; });\n\r\n\r\nfunction initTooltip() {\r\n    const tooltips = document.querySelectorAll('[data-tooltip]');\r\n  \r\n    tooltips.forEach((item) => {\r\n      item.addEventListener('mouseover', onMouseOver);\r\n    })\r\n  \r\n    function onMouseOver(event) {\r\n      const tooltipBox = criarTooltipBox(this);\r\n  \r\n      onMouseMove.tooltipBox = tooltipBox;\r\n      this.addEventListener('mousemove', onMouseMove);\r\n  \r\n      onMouseLeave.tooltipBox = tooltipBox;\r\n      onMouseLeave.element = this;\r\n      this.addEventListener('mouseleave', onMouseLeave);\r\n    }\r\n  \r\n    const onMouseLeave = {\r\n      handleEvent() {\r\n        this.tooltipBox.remove();\r\n        this.element.removeEventListener('mouseleave', onMouseLeave);\r\n        this.element.removeEventListener('mousemove', onMouseMove);\r\n      }\r\n    }\r\n  \r\n    const onMouseMove = {\r\n      handleEvent(event) {\r\n        this.tooltipBox.style.top = event.pageY + 20 + 'px';\r\n        this.tooltipBox.style.left = event.pageX + 20 + 'px';\r\n      }\r\n    }\r\n  \r\n    function criarTooltipBox(element) {\r\n      const tooltipBox = document.createElement('div');\r\n      const text = element.getAttribute('aria-label');\r\n      tooltipBox.classList.add('tooltip');\r\n      tooltipBox.innerText = text;\r\n      document.body.appendChild(tooltipBox);\r\n      return tooltipBox;\r\n    }\r\n  }\r\n  \r\n  \n\n//# sourceURL=webpack:///./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion-list.js */ \"./js/modules/accordion-list.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_data_object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/data-object.js */ \"./js/modules/data-object.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst accordion = new _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.js-accordion dt')\r\naccordion.init()\r\n\r\nconst tabnav = new _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('.js-tabmenu li', '.js-tabcontent section')\r\ntabnav.init()\r\nObject(_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\nObject(_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n\r\nObject(_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\nObject(_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\nObject(_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\nObject(_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\nObject(_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\nObject(_modules_data_object_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\nObject(_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\r\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });