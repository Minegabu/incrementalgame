"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Home = ()=>{\n    _s();\n    // When adding a new rank reset/feature\n    // first add the set consts\n    // then add the function for the button\n    // then get/add it to the local storage\n    // create the button\n    // storing money\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Number);\n    const [moneygen, setMoneygen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Number);\n    const [bigmoneygen, setBigMoneygen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Number);\n    // storing amount of ranks\n    const [rank, setRank] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [timesmoney, setTimesMoney] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [rankpoint, setRankPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Number);\n    const [moneypersecond, setMoneyPerSecond] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(moneygen / 10 * timesmoney);\n    // Buy Money gen\n    const OnClickMoneyGen = ()=>{\n        if (money >= 10 ** 1.2 * moneygen) {\n            setMoneygen((prevMoneygen)=>prevMoneygen + 1);\n            setMoney((prevMoney)=>prevMoney - 10 ** 1.2 * moneygen);\n        }\n    };\n    //Buy Big Money gen\n    const OnBigMoneygen = ()=>{\n        if (rankpoint >= 10) {\n            setBigMoneygen((prevBigMoneygen)=>prevBigMoneygen + 1);\n            setRankPoint((prevRankPoint)=>prevRankPoint - 10);\n        }\n    };\n    // Getting all the variables after refresh\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedMoney = window.localStorage.getItem(\"money\");\n        const storedMoneygen = window.localStorage.getItem(\"moneygen\");\n        const storedRank = window.localStorage.getItem(\"rank\");\n        const storedTimesMoney = window.localStorage.getItem(\"timesmoney\");\n        const storedBigMoneygen = window.localStorage.getItem(\"bigmoneygen\");\n        const storedRankPoint = window.localStorage.getItem(\"rankpoint\");\n        if (storedTimesMoney !== null) {\n            setTimesMoney(JSON.parse(storedTimesMoney));\n        }\n        if (storedMoney !== null) {\n            setMoney(JSON.parse(storedMoney));\n        }\n        if (storedMoneygen !== null) {\n            setMoneygen(JSON.parse(storedMoneygen));\n        }\n        if (storedRank !== null) {\n            setRank(JSON.parse(storedRank));\n        }\n        if (storedBigMoneygen !== null) {\n            setBigMoneygen(JSON.parse(storedBigMoneygen));\n        }\n        if (storedRankPoint !== null) {\n            setRankPoint(JSON.parse(storedRankPoint));\n        }\n    }, []);\n    // storing all the variables before reset\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.localStorage.setItem(\"money\", JSON.stringify(money));\n        window.localStorage.setItem(\"moneygen\", JSON.stringify(moneygen));\n        window.localStorage.setItem(\"rank\", JSON.stringify(rank));\n        window.localStorage.setItem(\"timesmoney\", JSON.stringify(timesmoney));\n        window.localStorage.setItem(\"bigmoneygen\", JSON.stringify(bigmoneygen));\n        window.localStorage.setItem(\"rankpoint\", JSON.stringify(rankpoint));\n    }, [\n        money,\n        moneygen,\n        rank,\n        timesmoney,\n        bigmoneygen,\n        rankpoint\n    ]);\n    // Make it so every second you gain money from your money gens\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (moneygen >= 1) {\n            const timer = setInterval(()=>{\n                setMoney((prevMoney)=>prevMoney + moneygen / 10 * timesmoney);\n                setMoneyPerSecond(moneygen / 10 * timesmoney);\n            }, 1000);\n            return ()=>{\n                clearInterval(timer);\n            };\n        }\n    }, [\n        moneygen\n    ]);\n    //Make it so money gens are earned every second from Big Money gens\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (bigmoneygen >= 1) {\n            const timer = setInterval(()=>{\n                setMoneygen((prevMoneygen)=>prevMoneygen + bigmoneygen / 10 * 1.4);\n            }, 1000);\n            return ()=>{\n                clearInterval(timer);\n            };\n        }\n    }, [\n        moneygen\n    ]);\n    // Return the html of the website\n    // To edit css go to globals.css\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    \"Money Generators: \",\n                    moneygen.toFixed(1),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"contained\",\n                color: \"secondary\",\n                onClick: ()=>OnClickMoneyGen(),\n                children: \"Buy Money Generators\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    \"Big Money Generators: \",\n                    bigmoneygen.toFixed(0)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"contained\",\n                color: \"secondary\",\n                onClick: ()=>OnBigMoneygen(),\n                children: \"Buy BIG Money Generators\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"KS2LjNBr6MD/tFS66DWfV2HzFqs=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHUSxZQUFZLEdBQUU7WUFDYixNQUFNK0IsUUFBUUMsWUFBWTtnQkFDdEJsQyxTQUFTZ0IsQ0FBQUEsWUFBYUEsWUFBWWQsV0FBVyxLQUFJTTtnQkFDakRLLGtCQUFrQlgsV0FBVyxLQUFJTTtZQUNyQyxHQUFFO1lBQ0YsT0FBTztnQkFDSDJCLGNBQWNGO1lBQ2xCO1FBQ1o7SUFBQyxHQUFFO1FBQUMvQjtLQUFTO0lBQ2IsbUVBQW1FO0lBQ25FUixnREFBU0EsQ0FBQztRQUNOLElBQUdVLGVBQWUsR0FBRTtZQUNoQixNQUFNNkIsUUFBUUMsWUFBWTtnQkFDdEIvQixZQUFZWSxDQUFBQSxlQUFnQkEsZUFBZVgsY0FBYyxLQUFHO1lBQ2hFLEdBQUU7WUFDRixPQUFPO2dCQUNIK0IsY0FBY0Y7WUFDbEI7UUFDUjtJQUFDLEdBQUU7UUFBQy9CO0tBQVM7SUFDVCxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLHFCQUNJLDhEQUFDa0M7OzBCQUNHLDhEQUFDeEMscURBQVVBOztvQkFBQztvQkFBbUJNLFNBQVNtQyxRQUFRO29CQUFHOzs7Ozs7OzBCQUNuRCw4REFBQ3hDLHFEQUFNQTtnQkFBQ3lDLFNBQVE7Z0JBQVlDLE9BQU07Z0JBQVlDLFNBQVcsSUFBTTFCOzBCQUFtQjs7Ozs7OzBCQUNsRiw4REFBQ2xCLHFEQUFVQTs7b0JBQUM7b0JBQXVCUSxZQUFZaUMsUUFBUTs7Ozs7OzswQkFDdkQsOERBQUN4QyxxREFBTUE7Z0JBQUN5QyxTQUFRO2dCQUFZQyxPQUFNO2dCQUFZQyxTQUFXLElBQU12QjswQkFBaUI7Ozs7Ozs7Ozs7OztBQUc1RjtHQXJHTW5CO0tBQUFBO0FBdUdOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gICAgLy8gV2hlbiBhZGRpbmcgYSBuZXcgcmFuayByZXNldC9mZWF0dXJlXG4gICAgLy8gZmlyc3QgYWRkIHRoZSBzZXQgY29uc3RzXG4gICAgLy8gdGhlbiBhZGQgdGhlIGZ1bmN0aW9uIGZvciB0aGUgYnV0dG9uXG4gICAgLy8gdGhlbiBnZXQvYWRkIGl0IHRvIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgLy8gY3JlYXRlIHRoZSBidXR0b25cblxuICAgIC8vIHN0b3JpbmcgbW9uZXlcbiAgICBjb25zdCBbbW9uZXksIHNldE1vbmV5XSA9IHVzZVN0YXRlPG51bWJlcj4oTnVtYmVyKTtcbiAgICBjb25zdCBbbW9uZXlnZW4sc2V0TW9uZXlnZW5dID0gdXNlU3RhdGU8bnVtYmVyPihOdW1iZXIpO1xuICAgIGNvbnN0IFtiaWdtb25leWdlbiwgc2V0QmlnTW9uZXlnZW5dID0gdXNlU3RhdGU8bnVtYmVyPihOdW1iZXIpO1xuICAgIC8vIHN0b3JpbmcgYW1vdW50IG9mIHJhbmtzXG4gICAgY29uc3QgW3JhbmssIHNldFJhbmtdID0gdXNlU3RhdGU8bnVtYmVyPigxKVxuICAgIGNvbnN0IFt0aW1lc21vbmV5LHNldFRpbWVzTW9uZXldID0gdXNlU3RhdGU8bnVtYmVyPigxKVxuICAgIGNvbnN0IFtyYW5rcG9pbnQsIHNldFJhbmtQb2ludF0gPSB1c2VTdGF0ZTxudW1iZXI+KE51bWJlcik7XG4gICAgY29uc3QgW21vbmV5cGVyc2Vjb25kLHNldE1vbmV5UGVyU2Vjb25kXSA9IHVzZVN0YXRlKG1vbmV5Z2VuLzEwICogdGltZXNtb25leSlcbiAgICAvLyBCdXkgTW9uZXkgZ2VuXG4gICAgY29uc3QgT25DbGlja01vbmV5R2VuID0gKCkgPT4ge1xuICAgICAgICBpZihtb25leSA+PSAxMCoqMS4yKm1vbmV5Z2VuKXtcbiAgICAgICAgICAgIHNldE1vbmV5Z2VuKHByZXZNb25leWdlbiA9PiBwcmV2TW9uZXlnZW4gKyAxKVxuICAgICAgICAgICAgc2V0TW9uZXkocHJldk1vbmV5ID0+IHByZXZNb25leSAtIDEwKioxLjIqbW9uZXlnZW4pXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9CdXkgQmlnIE1vbmV5IGdlblxuICAgIGNvbnN0IE9uQmlnTW9uZXlnZW4gPSAoKSA9PiB7XG4gICAgICAgIGlmKHJhbmtwb2ludCA+PSAxMCl7XG4gICAgICAgICAgICBzZXRCaWdNb25leWdlbihwcmV2QmlnTW9uZXlnZW4gPT4gcHJldkJpZ01vbmV5Z2VuICsgMSlcbiAgICAgICAgICAgIHNldFJhbmtQb2ludChwcmV2UmFua1BvaW50ID0+IHByZXZSYW5rUG9pbnQgLSAxMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldHRpbmcgYWxsIHRoZSB2YXJpYWJsZXMgYWZ0ZXIgcmVmcmVzaFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlZE1vbmV5ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb25leScpO1xuICAgICAgICBjb25zdCBzdG9yZWRNb25leWdlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9uZXlnZW4nKTtcbiAgICAgICAgY29uc3Qgc3RvcmVkUmFuayA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmFuaycpO1xuICAgICAgICBjb25zdCBzdG9yZWRUaW1lc01vbmV5ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lc21vbmV5JylcbiAgICAgICAgY29uc3Qgc3RvcmVkQmlnTW9uZXlnZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JpZ21vbmV5Z2VuJylcbiAgICAgICAgY29uc3Qgc3RvcmVkUmFua1BvaW50ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyYW5rcG9pbnQnKVxuICAgICAgICBpZiAoc3RvcmVkVGltZXNNb25leSAhPT0gbnVsbCl7XG4gICAgICAgICAgICBzZXRUaW1lc01vbmV5KEpTT04ucGFyc2Uoc3RvcmVkVGltZXNNb25leSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0b3JlZE1vbmV5ICE9PSBudWxsKSB7XG4gICAgICAgICAgc2V0TW9uZXkoSlNPTi5wYXJzZShzdG9yZWRNb25leSkpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaWYgKHN0b3JlZE1vbmV5Z2VuICE9PSBudWxsKSB7XG4gICAgICAgICAgc2V0TW9uZXlnZW4oSlNPTi5wYXJzZShzdG9yZWRNb25leWdlbikpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaWYgKHN0b3JlZFJhbmsgIT09IG51bGwpIHtcbiAgICAgICAgICBzZXRSYW5rKEpTT04ucGFyc2Uoc3RvcmVkUmFuaykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdG9yZWRCaWdNb25leWdlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0QmlnTW9uZXlnZW4oSlNPTi5wYXJzZShzdG9yZWRCaWdNb25leWdlbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RvcmVkUmFua1BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRSYW5rUG9pbnQoSlNPTi5wYXJzZShzdG9yZWRSYW5rUG9pbnQpKTtcbiAgICAgICAgICB9XG4gICAgICB9LCBbXSk7XG4gICAgLy8gc3RvcmluZyBhbGwgdGhlIHZhcmlhYmxlcyBiZWZvcmUgcmVzZXRcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vbmV5JywgSlNPTi5zdHJpbmdpZnkobW9uZXkpKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb25leWdlbicsIEpTT04uc3RyaW5naWZ5KG1vbmV5Z2VuKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmFuaycsIEpTT04uc3RyaW5naWZ5KHJhbmspKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lc21vbmV5JywgSlNPTi5zdHJpbmdpZnkodGltZXNtb25leSkpXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmlnbW9uZXlnZW4nLCBKU09OLnN0cmluZ2lmeShiaWdtb25leWdlbikpXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmFua3BvaW50JywgSlNPTi5zdHJpbmdpZnkocmFua3BvaW50KSlcbiAgICB9LCBbbW9uZXksbW9uZXlnZW4scmFuayx0aW1lc21vbmV5LCBiaWdtb25leWdlbiwgcmFua3BvaW50XSk7XG4gICAgLy8gTWFrZSBpdCBzbyBldmVyeSBzZWNvbmQgeW91IGdhaW4gbW9uZXkgZnJvbSB5b3VyIG1vbmV5IGdlbnNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihtb25leWdlbiA+PSAxKXtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldE1vbmV5KHByZXZNb25leSA9PiBwcmV2TW9uZXkgKyBtb25leWdlbiAvIDEwICp0aW1lc21vbmV5KVxuICAgICAgICAgICAgICAgIHNldE1vbmV5UGVyU2Vjb25kKG1vbmV5Z2VuIC8gMTAgKnRpbWVzbW9uZXkpXG4gICAgICAgICAgICB9LDEwMDApXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgICAgICAgICB9XG59fSxbbW9uZXlnZW5dKVxuLy9NYWtlIGl0IHNvIG1vbmV5IGdlbnMgYXJlIGVhcm5lZCBldmVyeSBzZWNvbmQgZnJvbSBCaWcgTW9uZXkgZ2Vuc1xudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihiaWdtb25leWdlbiA+PSAxKXtcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRNb25leWdlbihwcmV2TW9uZXlnZW4gPT4gcHJldk1vbmV5Z2VuICsgYmlnbW9uZXlnZW4gLyAxMCoxLjQpXG4gICAgICAgIH0sMTAwMClcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgICAgIH1cbn19LFttb25leWdlbl0pXG4gICAgLy8gUmV0dXJuIHRoZSBodG1sIG9mIHRoZSB3ZWJzaXRlXG4gICAgLy8gVG8gZWRpdCBjc3MgZ28gdG8gZ2xvYmFscy5jc3NcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+TW9uZXkgR2VuZXJhdG9yczoge21vbmV5Z2VuLnRvRml4ZWQoMSl9IDwvVHlwb2dyYXBoeT4gXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2sgPSB7KCkgPT4gT25DbGlja01vbmV5R2VuKCl9PkJ1eSBNb25leSBHZW5lcmF0b3JzPC9CdXR0b24+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5CaWcgTW9uZXkgR2VuZXJhdG9yczoge2JpZ21vbmV5Z2VuLnRvRml4ZWQoMCl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrID0geygpID0+IE9uQmlnTW9uZXlnZW4oKX0+QnV5IEJJRyBNb25leSBHZW5lcmF0b3JzPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiSG9tZSIsIm1vbmV5Iiwic2V0TW9uZXkiLCJOdW1iZXIiLCJtb25leWdlbiIsInNldE1vbmV5Z2VuIiwiYmlnbW9uZXlnZW4iLCJzZXRCaWdNb25leWdlbiIsInJhbmsiLCJzZXRSYW5rIiwidGltZXNtb25leSIsInNldFRpbWVzTW9uZXkiLCJyYW5rcG9pbnQiLCJzZXRSYW5rUG9pbnQiLCJtb25leXBlcnNlY29uZCIsInNldE1vbmV5UGVyU2Vjb25kIiwiT25DbGlja01vbmV5R2VuIiwicHJldk1vbmV5Z2VuIiwicHJldk1vbmV5IiwiT25CaWdNb25leWdlbiIsInByZXZCaWdNb25leWdlbiIsInByZXZSYW5rUG9pbnQiLCJzdG9yZWRNb25leSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRNb25leWdlbiIsInN0b3JlZFJhbmsiLCJzdG9yZWRUaW1lc01vbmV5Iiwic3RvcmVkQmlnTW9uZXlnZW4iLCJzdG9yZWRSYW5rUG9pbnQiLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJ0b0ZpeGVkIiwidmFyaWFudCIsImNvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});