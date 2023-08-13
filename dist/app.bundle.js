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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(city) {\n\n\n    const loading = document.querySelector('#loading');\n    loading.textContent = \"Loading...\";\n    loading.style.display = \"block\";\n    const img = document.querySelector('img');\n    const cityInfo = document.querySelector('#city-info');\n    img.src = \"#\";\n    cityInfo.textContent = \"\";\n    const tempAndWind = document.querySelector('#temp-and-wind');\n    tempAndWind.textContent = \"\";\n\n\n\n    try {\n    \n    const response = await fetch(\n`https://api.weatherapi.com/v1/current.json?key=94f27891207f45c29e7154244231108&q=${city}`, {\n            method: 'GET',\n        });\n    \n    // Check the raw text of the response\n    const responseText = await response.text();\n    console.log(responseText);\n\n    // If the responseText looks like valid JSON, then try to parse it\n    const weatherData = JSON.parse(responseText);\n    console.log(weatherData);\n\n    console.log(weatherData.current.condition.icon);\n\n    img.src = \"https:\" + weatherData.current.condition.icon;\n    img.style.display = \"block\";\n\n    cityInfo.textContent = weatherData.location.name + \", \" + weatherData.location.region + \", \" + weatherData.location.country;\n\n    tempAndWind.textContent = weatherData.current.temp_f + \"°F, \" + weatherData.current.wind_mph + \" mph\";\n\n    } catch (error) {\n        console.log(error);\n    } finally {\n        console.log('This will always run');\n        loading.style.display = \"none\";\n    }\n};\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;