/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const contentDiv = document.getElementById(\"content\");\n    const newDiv = document.createElement(\"div\");\n    newDiv.innerHTML = ` <div id=\"textContent\">\n    <h1>Where to find us: </h1>\n    <div id=\"map-container\">\n        <iframe\n          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2dLongitude!3dLatitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM0JzIwLjYiTiA4OMKwNDcnMTcuMCJF!5e0!3m2!1sen!2sus!4v1234567890123\"\n          allowfullscreen=\"\"\n          loading=\"lazy\"\n        ></iframe>\n      </div>\n    \n    <h1>Contact us: </h1>\n    <form action=\"#\" method=\"post\" id=\"contactForm\">\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" id=\"name\" name=\"name\" required />\n\n      <label for=\"email\">Email:</label>\n      <input type=\"email\" id=\"email\" name=\"email\" required />\n\n      <label for=\"message\">Message:</label>\n      <textarea id=\"message\" name=\"message\" rows=\"4\" required></textarea>\n\n      <input type=\"submit\" value=\"Submit\" />\n    </form>\n  </div>\n</div>`;\n    contentDiv.appendChild(newDiv);\n  }\n  \n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _indexPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexPage.js */ \"./src/indexPage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n//loadIndex();\nconst homeButton = document.getElementById('home');\nhomeButton.addEventListener('click', _indexPage_js__WEBPACK_IMPORTED_MODULE_0__.loadIndex);\nconst menuButton = document.getElementById('menu');\nmenuButton.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.renderMenu);\nconst contactButton = document.getElementById('contact');\ncontactButton.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact);\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/indexPage.js":
/*!**************************!*\
  !*** ./src/indexPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadIndex: () => (/* binding */ loadIndex)\n/* harmony export */ });\nfunction loadIndex() {\n  const contentDiv = document.getElementById(\"content\");\n  const newDiv = document.createElement(\"div\");\n  newDiv.innerHTML = `\n<div id=\"textContent\">\n<p class=\"textPicture\">Step into a realm where pasta swirls like enchanted ribbons, pizza dough\nrises with a touch of magic, and gelato flavors are spun from dreams.\nWelcome to La Trattoria del Cuore, a fantastical Italian haven where\nevery bite is a journey into a culinary fairy tale!\n<img src=\"pics/pizza.jpg\" alt=\"Pizza\" width=\"300vw\">\n</p>\n<br>\n<p class=\"textPicture\">Picture this:\ncobblestone streets, twinkling fairy lights, and the aroma of amore\nwafting through the air. At La Trattoria del Cuore, we've conjured a\ndining experience that transcends the ordinary and catapults you into a\nworld where flavors are fanciful and the ambiance is pure enchantment.\n<img src=\"pics/meatballs.jpg\" alt=\"Meatballs\" width=\"300vw\">\n</p>\n<br>\n<br>\n<br>\n<p class=\"textPicture\"> Chef's wand (ahem, we mean hands) crafts dishes that dance on your\ntaste buds—each bite tells a tale of culinary sorcery. From the Amore\nPesto Pasta that captures the essence of a moonlit garden to the\nFantasia Pizza that teleports you to a cheese lover's paradise, every\ndish is a chapter in the story of La Trattoria del Cuore.\n<img src=\"pics/pizza2.jpeg\" alt=\"Pizza\" width=\"300vw\">\n</p>\n<br>\n<br>\n<br>\n<p class=\"textPicture\"> But the magic\ndoesn't stop there. Our gelato bar is a swirling vortex of delight,\nwhere flavors like Moonlit Mango and Unicorn Mint await your discovery.\nAnd for those looking to embark on a communal feast, our La Famiglia\nFeast is a spellbinding spread meant to be shared, uniting friends and\nfamily in a gastronomic celebration.\n<img src=\"pics/lasanga.jpg\" alt=\"Pizza\" width=\"300vw\">\n</p>\n<br>\n<br>\n<br>\n<p class=\"textPicture\"> So, grab a seat at our whimsical\ntables, let the imaginary Italian melodies serenade your senses, and\nprepare for a dining experience that transcends reality. La Trattoria\ndel Cuore: where every meal is a page in a culinary fairy tale, and\nevery guest is a character in the story of flavor and fun! Buon Appetito\nand welcome to our magical world! 🍝✨\n<img src=\"pics/wine.webp\" alt=\"Pizza\" width=\"300vw\">\n</p>\n</div>`;\n  contentDiv.appendChild(newDiv);\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/indexPage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  function fillRow(name, price) {\n    const tableRow = document.createElement(\"tr\");\n    tableRow.innerHTML = `<td>${name} :</td> <td>${price}€</td>`;\n    return tableRow;\n  }\n  function fillCategory(category) {\n    const tableRow = document.createElement(\"tr\");\n    tableRow.innerHTML = `<td class=\"category\">${category}</td>`;\n    return tableRow;\n  }\n\n  function displayMenu(menuData) {\n    const menuTable = document.getElementById(\"menu\");\n\n    menuData.menu.forEach((category) => {\n      menuTable.appendChild(fillCategory(category.category));\n      category.items.forEach((item) => {\n        menuTable.appendChild(fillRow(item.name, item.price));\n      });\n    });\n  }\n  fetch(\"./menu.json\")\n    .then((response) => response.json())\n    .then((menuData) => {\n      // Call the displayMenu function with the loaded menu data\n      displayMenu(menuData);\n    })\n    .catch((error) => console.error(\"Error fetching menu data:\", error));\n}\n\nfunction renderMenu() {\n  const contentDiv = document.getElementById(\"content\");\n  const newDiv = document.createElement(\"div\");\n  newDiv.innerHTML = `<div id=\"textContent\"><table id=\"menu\"></table></div>`;\ncontentDiv.appendChild(newDiv);\nloadMenu();\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;