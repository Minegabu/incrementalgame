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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Home = ()=>{\n    _s();\n    // When adding a new rank reset/feature\n    // first add the set consts\n    // then add the function for the button\n    // then get/add it to the local storage\n    // create the button\n    // storing money\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Number);\n    const [moneygen, setMoneygen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Number);\n    const [bigmoneygen, setBigMoneygen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Number);\n    // storing amount of ranks\n    const [rank, setRank] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [timesmoney, setTimesMoney] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [rankpoint, setRankPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Number);\n    const [moneypersecond, setMoneyPerSecond] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(moneygen / 10 * timesmoney);\n    // Buy Money gen\n    const OnClickMoneyGen = ()=>{\n        if (money >= 10 ** 1.2 * moneygen) {\n            setMoneygen((prevMoneygen)=>prevMoneygen + 1);\n            setMoney((prevMoney)=>prevMoney - 10 ** 1.2 * moneygen);\n            setMoneyPerSecond((prevmoneypersecond)=>prevmoneypersecond + moneygen / 10 * timesmoney);\n        }\n    };\n    //Buy Big Money gen\n    const OnBigMoneygen = ()=>{\n        if (rankpoint >= 10) {\n            setBigMoneygen((prevBigMoneygen)=>prevBigMoneygen + 1);\n            setRankPoint((prevRankPoint)=>prevRankPoint - 10);\n            setMoneyPerSecond((prevmoneypersecond)=>prevmoneypersecond + (bigmoneygen / 10 * 1.4 - (bigmoneygen - 1 / 10 * 1.4)));\n        }\n    };\n    // Getting all the variables after refresh\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedMoney = window.localStorage.getItem(\"money\");\n        const storedMoneygen = window.localStorage.getItem(\"moneygen\");\n        const storedRank = window.localStorage.getItem(\"rank\");\n        const storedTimesMoney = window.localStorage.getItem(\"timesmoney\");\n        const storedBigMoneygen = window.localStorage.getItem(\"bigmoneygen\");\n        const storedRankPoint = window.localStorage.getItem(\"rankpoint\");\n        if (storedTimesMoney !== null) {\n            setTimesMoney(JSON.parse(storedTimesMoney));\n        }\n        if (storedMoney !== null) {\n            setMoney(JSON.parse(storedMoney));\n        }\n        if (storedMoneygen !== null) {\n            setMoneygen(JSON.parse(storedMoneygen));\n        }\n        if (storedRank !== null) {\n            setRank(JSON.parse(storedRank));\n        }\n        if (storedBigMoneygen !== null) {\n            setBigMoneygen(JSON.parse(storedBigMoneygen));\n        }\n        if (storedRankPoint !== null) {\n            setRankPoint(JSON.parse(storedRankPoint));\n        }\n    }, []);\n    // storing all the variables before reset\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.localStorage.setItem(\"money\", JSON.stringify(money));\n        window.localStorage.setItem(\"moneygen\", JSON.stringify(moneygen));\n        window.localStorage.setItem(\"rank\", JSON.stringify(rank));\n        window.localStorage.setItem(\"timesmoney\", JSON.stringify(timesmoney));\n        window.localStorage.setItem(\"bigmoneygen\", JSON.stringify(bigmoneygen));\n        window.localStorage.setItem(\"rankpoint\", JSON.stringify(rankpoint));\n        window.localStorage.setItem(\"mps\", JSON.stringify(moneypersecond));\n    }, [\n        money,\n        moneygen,\n        rank,\n        timesmoney,\n        bigmoneygen,\n        rankpoint\n    ]);\n    // Make it so every second you gain money from your money gens\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (moneygen >= 1) {\n            const timer = setInterval(()=>{\n                setMoney((prevMoney)=>prevMoney + moneygen / 10 * timesmoney);\n                setMoneyPerSecond(moneygen / 10 * timesmoney);\n            }, 1000);\n            return ()=>{\n                clearInterval(timer);\n            };\n        }\n    }, [\n        moneygen\n    ]);\n    //Make it so money gens are earned every second from Big Money gens\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (bigmoneygen >= 1) {\n            const timer = setInterval(()=>{\n                setMoneygen((prevMoneygen)=>prevMoneygen + bigmoneygen / 10 * 1.4);\n            }, 1000);\n            return ()=>{\n                clearInterval(timer);\n            };\n        }\n    }, [\n        moneygen\n    ]);\n    // Return the html of the website\n    // To edit css go to globals.css\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    \"Money Generators: \",\n                    moneygen.toFixed(1),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"contained\",\n                color: \"secondary\",\n                onClick: ()=>OnClickMoneyGen(),\n                children: \"Buy Money Generators\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    \"Big Money Generators: \",\n                    bigmoneygen.toFixed(0)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"contained\",\n                color: \"secondary\",\n                onClick: ()=>OnBigMoneygen(),\n                children: \"Buy BIG Money Generators\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 104,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"KS2LjNBr6MD/tFS66DWfV2HzFqs=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSxCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICAgIC8vIFdoZW4gYWRkaW5nIGEgbmV3IHJhbmsgcmVzZXQvZmVhdHVyZVxuICAgIC8vIGZpcnN0IGFkZCB0aGUgc2V0IGNvbnN0c1xuICAgIC8vIHRoZW4gYWRkIHRoZSBmdW5jdGlvbiBmb3IgdGhlIGJ1dHRvblxuICAgIC8vIHRoZW4gZ2V0L2FkZCBpdCB0byB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIC8vIGNyZWF0ZSB0aGUgYnV0dG9uXG5cbiAgICAvLyBzdG9yaW5nIG1vbmV5XG4gICAgY29uc3QgW21vbmV5LCBzZXRNb25leV0gPSB1c2VTdGF0ZTxudW1iZXI+KE51bWJlcik7XG4gICAgY29uc3QgW21vbmV5Z2VuLHNldE1vbmV5Z2VuXSA9IHVzZVN0YXRlPG51bWJlcj4oTnVtYmVyKTtcbiAgICBjb25zdCBbYmlnbW9uZXlnZW4sIHNldEJpZ01vbmV5Z2VuXSA9IHVzZVN0YXRlPG51bWJlcj4oTnVtYmVyKTtcbiAgICAvLyBzdG9yaW5nIGFtb3VudCBvZiByYW5rc1xuICAgIGNvbnN0IFtyYW5rLCBzZXRSYW5rXSA9IHVzZVN0YXRlPG51bWJlcj4oMSlcbiAgICBjb25zdCBbdGltZXNtb25leSxzZXRUaW1lc01vbmV5XSA9IHVzZVN0YXRlPG51bWJlcj4oMSlcbiAgICBjb25zdCBbcmFua3BvaW50LCBzZXRSYW5rUG9pbnRdID0gdXNlU3RhdGU8bnVtYmVyPihOdW1iZXIpO1xuICAgIGNvbnN0IFttb25leXBlcnNlY29uZCxzZXRNb25leVBlclNlY29uZF0gPSB1c2VTdGF0ZShtb25leWdlbi8xMCAqIHRpbWVzbW9uZXkpXG4gICAgLy8gQnV5IE1vbmV5IGdlblxuICAgIGNvbnN0IE9uQ2xpY2tNb25leUdlbiA9ICgpID0+IHtcbiAgICAgICAgaWYobW9uZXkgPj0gMTAqKjEuMiptb25leWdlbil7XG4gICAgICAgICAgICBzZXRNb25leWdlbihwcmV2TW9uZXlnZW4gPT4gcHJldk1vbmV5Z2VuICsgMSlcbiAgICAgICAgICAgIHNldE1vbmV5KHByZXZNb25leSA9PiBwcmV2TW9uZXkgLSAxMCoqMS4yKm1vbmV5Z2VuKVxuICAgICAgICAgICAgc2V0TW9uZXlQZXJTZWNvbmQocHJldm1vbmV5cGVyc2Vjb25kID0+IHByZXZtb25leXBlcnNlY29uZCArIG1vbmV5Z2VuIC8gMTAgKnRpbWVzbW9uZXkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9CdXkgQmlnIE1vbmV5IGdlblxuICAgIGNvbnN0IE9uQmlnTW9uZXlnZW4gPSAoKSA9PiB7XG4gICAgICAgIGlmKHJhbmtwb2ludCA+PSAxMCl7XG4gICAgICAgICAgICBzZXRCaWdNb25leWdlbihwcmV2QmlnTW9uZXlnZW4gPT4gcHJldkJpZ01vbmV5Z2VuICsgMSlcbiAgICAgICAgICAgIHNldFJhbmtQb2ludChwcmV2UmFua1BvaW50ID0+IHByZXZSYW5rUG9pbnQgLSAxMClcbiAgICAgICAgICAgIHNldE1vbmV5UGVyU2Vjb25kKHByZXZtb25leXBlcnNlY29uZCA9PiBwcmV2bW9uZXlwZXJzZWNvbmQgKyhiaWdtb25leWdlbiAvIDEwKjEuNCAtIChiaWdtb25leWdlbi0xIC8gMTAqMS40KSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXR0aW5nIGFsbCB0aGUgdmFyaWFibGVzIGFmdGVyIHJlZnJlc2hcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZWRNb25leSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9uZXknKTtcbiAgICAgICAgY29uc3Qgc3RvcmVkTW9uZXlnZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbmV5Z2VuJyk7XG4gICAgICAgIGNvbnN0IHN0b3JlZFJhbmsgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JhbmsnKTtcbiAgICAgICAgY29uc3Qgc3RvcmVkVGltZXNNb25leSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZXNtb25leScpXG4gICAgICAgIGNvbnN0IHN0b3JlZEJpZ01vbmV5Z2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiaWdtb25leWdlbicpXG4gICAgICAgIGNvbnN0IHN0b3JlZFJhbmtQb2ludCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmFua3BvaW50JylcbiAgICAgICAgaWYgKHN0b3JlZFRpbWVzTW9uZXkgIT09IG51bGwpe1xuICAgICAgICAgICAgc2V0VGltZXNNb25leShKU09OLnBhcnNlKHN0b3JlZFRpbWVzTW9uZXkpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdG9yZWRNb25leSAhPT0gbnVsbCkge1xuICAgICAgICAgIHNldE1vbmV5KEpTT04ucGFyc2Uoc3RvcmVkTW9uZXkpKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGlmIChzdG9yZWRNb25leWdlbiAhPT0gbnVsbCkge1xuICAgICAgICAgIHNldE1vbmV5Z2VuKEpTT04ucGFyc2Uoc3RvcmVkTW9uZXlnZW4pKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGlmIChzdG9yZWRSYW5rICE9PSBudWxsKSB7XG4gICAgICAgICAgc2V0UmFuayhKU09OLnBhcnNlKHN0b3JlZFJhbmspKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RvcmVkQmlnTW9uZXlnZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldEJpZ01vbmV5Z2VuKEpTT04ucGFyc2Uoc3RvcmVkQmlnTW9uZXlnZW4pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0b3JlZFJhbmtQb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0UmFua1BvaW50KEpTT04ucGFyc2Uoc3RvcmVkUmFua1BvaW50KSk7XG4gICAgICAgICAgfVxuICAgICAgfSwgW10pO1xuICAgIC8vIHN0b3JpbmcgYWxsIHRoZSB2YXJpYWJsZXMgYmVmb3JlIHJlc2V0XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb25leScsIEpTT04uc3RyaW5naWZ5KG1vbmV5KSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9uZXlnZW4nLCBKU09OLnN0cmluZ2lmeShtb25leWdlbikpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JhbmsnLCBKU09OLnN0cmluZ2lmeShyYW5rKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGltZXNtb25leScsIEpTT04uc3RyaW5naWZ5KHRpbWVzbW9uZXkpKVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JpZ21vbmV5Z2VuJywgSlNPTi5zdHJpbmdpZnkoYmlnbW9uZXlnZW4pKVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Jhbmtwb2ludCcsIEpTT04uc3RyaW5naWZ5KHJhbmtwb2ludCkpXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXBzJyxKU09OLnN0cmluZ2lmeShtb25leXBlcnNlY29uZCkpXG4gICAgfSwgW21vbmV5LG1vbmV5Z2VuLHJhbmssdGltZXNtb25leSwgYmlnbW9uZXlnZW4sIHJhbmtwb2ludF0pO1xuICAgIC8vIE1ha2UgaXQgc28gZXZlcnkgc2Vjb25kIHlvdSBnYWluIG1vbmV5IGZyb20geW91ciBtb25leSBnZW5zXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYobW9uZXlnZW4gPj0gMSl7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRNb25leShwcmV2TW9uZXkgPT4gcHJldk1vbmV5ICsgbW9uZXlnZW4gLyAxMCAqdGltZXNtb25leSlcbiAgICAgICAgICAgICAgICBzZXRNb25leVBlclNlY29uZChtb25leWdlbiAvIDEwICp0aW1lc21vbmV5KVxuICAgICAgICAgICAgfSwxMDAwKVxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgICAgICAgfVxufX0sW21vbmV5Z2VuXSlcbi8vTWFrZSBpdCBzbyBtb25leSBnZW5zIGFyZSBlYXJuZWQgZXZlcnkgc2Vjb25kIGZyb20gQmlnIE1vbmV5IGdlbnNcbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoYmlnbW9uZXlnZW4gPj0gMSl7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TW9uZXlnZW4ocHJldk1vbmV5Z2VuID0+IHByZXZNb25leWdlbiArIGJpZ21vbmV5Z2VuIC8gMTAqMS40KVxuICAgICAgICB9LDEwMDApXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgICB9XG59fSxbbW9uZXlnZW5dKVxuICAgIC8vIFJldHVybiB0aGUgaHRtbCBvZiB0aGUgd2Vic2l0ZVxuICAgIC8vIFRvIGVkaXQgY3NzIGdvIHRvIGdsb2JhbHMuY3NzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk1vbmV5IEdlbmVyYXRvcnM6IHttb25leWdlbi50b0ZpeGVkKDEpfSA8L1R5cG9ncmFwaHk+IFxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrID0geygpID0+IE9uQ2xpY2tNb25leUdlbigpfT5CdXkgTW9uZXkgR2VuZXJhdG9yczwvQnV0dG9uPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+QmlnIE1vbmV5IEdlbmVyYXRvcnM6IHtiaWdtb25leWdlbi50b0ZpeGVkKDApfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljayA9IHsoKSA9PiBPbkJpZ01vbmV5Z2VuKCl9PkJ1eSBCSUcgTW9uZXkgR2VuZXJhdG9yczwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIkhvbWUiLCJtb25leSIsInNldE1vbmV5IiwiTnVtYmVyIiwibW9uZXlnZW4iLCJzZXRNb25leWdlbiIsImJpZ21vbmV5Z2VuIiwic2V0QmlnTW9uZXlnZW4iLCJyYW5rIiwic2V0UmFuayIsInRpbWVzbW9uZXkiLCJzZXRUaW1lc01vbmV5IiwicmFua3BvaW50Iiwic2V0UmFua1BvaW50IiwibW9uZXlwZXJzZWNvbmQiLCJzZXRNb25leVBlclNlY29uZCIsIk9uQ2xpY2tNb25leUdlbiIsInByZXZNb25leWdlbiIsInByZXZNb25leSIsInByZXZtb25leXBlcnNlY29uZCIsIk9uQmlnTW9uZXlnZW4iLCJwcmV2QmlnTW9uZXlnZW4iLCJwcmV2UmFua1BvaW50Iiwic3RvcmVkTW9uZXkiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkTW9uZXlnZW4iLCJzdG9yZWRSYW5rIiwic3RvcmVkVGltZXNNb25leSIsInN0b3JlZEJpZ01vbmV5Z2VuIiwic3RvcmVkUmFua1BvaW50IiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwidG9GaXhlZCIsInZhcmlhbnQiLCJjb2xvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});