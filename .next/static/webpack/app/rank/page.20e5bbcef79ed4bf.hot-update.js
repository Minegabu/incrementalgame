"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/rank/page",{

/***/ "(app-client)/./src/app/rank/page.tsx":
/*!*******************************!*\
  !*** ./src/app/rank/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst RankHome = ()=>{\n    _s();\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const storedMoney = window.localStorage.getItem(\"money\");\n        return storedMoney ? parseFloat(storedMoney) : 0;\n    });\n    const [moneygen, setMoneygen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const storedMoneygen = window.localStorage.getItem(\"moneygen\");\n        return storedMoneygen ? parseFloat(storedMoneygen) : 0;\n    });\n    const [rank, setRank] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const storedRank = window.localStorage.getItem(\"rank\");\n        return storedRank ? parseFloat(storedRank) : 1;\n    });\n    const [rankPoint, setRankPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const storedRankPoint = window.localStorage.getItem(\"rankPoint\");\n        return storedRankPoint ? parseFloat(storedRankPoint) : 0;\n    });\n    const [bigMoneygen, setBigMoneygen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const storedBigMoneygen = window.localStorage.getItem(\"bigMoneygen\");\n        return storedBigMoneygen ? parseFloat(storedBigMoneygen) : 0;\n    });\n    const [timesmoney, setTimesMoney] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const storedTimesMoney = window.localStorage.getItem(\"timesmoney\");\n        return storedTimesMoney ? parseFloat(storedTimesMoney) : 0;\n    });\n    const OnClickMoney = ()=>{\n        setMoney((prevMoney)=>prevMoney + timesmoney);\n    };\n    const OnReset = ()=>{\n        if (money >= 10 * rank * 1.5) {\n            setMoneygen(0);\n            setMoney(0);\n            setRank((prevRank)=>prevRank + 1);\n            setTimesMoney((prevTimesMoney)=>prevTimesMoney * 2);\n            setRankPoint((prevRankPoint)=>prevRankPoint + 1);\n        }\n    };\n    const OnTestingReset = ()=>{\n        setMoneygen(0);\n        setMoney(0);\n        setRank(1);\n        setTimesMoney(1);\n        setBigMoneygen(0);\n        setRankPoint(0);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.localStorage.setItem(\"money\", JSON.stringify(money));\n        window.localStorage.setItem(\"moneygen\", JSON.stringify(moneygen));\n        window.localStorage.setItem(\"rank\", JSON.stringify(rank));\n        window.localStorage.setItem(\"timesmoney\", JSON.stringify(timesmoney));\n        window.localStorage.setItem(\"bigmoneygen\", JSON.stringify(bigmoneygen));\n        window.localStorage.setItem(\"rankpoint\", JSON.stringify(rankpoint));\n    }, [\n        money,\n        moneygen,\n        rank,\n        timesmoney,\n        bigMoneygen,\n        rankpoint\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"hi\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\rank\\\\page.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                variant: \"contained\",\n                color: \"secondary\",\n                onClick: ()=>OnReset(),\n                children: \"Click to upgrade Rank\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\rank\\\\page.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                variant: \"contained\",\n                color: \"secondary\",\n                onClick: ()=>OnTestingReset(),\n                children: \"Reset for testing\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\rank\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    \"Rank: \",\n                    rank.toFixed(0)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\rank\\\\page.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    \"Rank Points: \",\n                    rankPoint.toFixed(0)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\rank\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\rank\\\\page.tsx\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RankHome, \"jFwIFrVW3aSx/kIeJVh9toObcUc=\");\n_c = RankHome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RankHome);\nvar _c;\n$RefreshReg$(_c, \"RankHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFHeEQ7R0FuRU14QztLQUFBQTtBQXFFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3JhbmsvcGFnZS50c3g/M2FkMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5jb25zdCBSYW5rSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttb25leSwgc2V0TW9uZXldID0gdXNlU3RhdGU8bnVtYmVyPigoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkTW9uZXkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbmV5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JlZE1vbmV5ID8gcGFyc2VGbG9hdChzdG9yZWRNb25leSkgOiAwO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgW21vbmV5Z2VuLCBzZXRNb25leWdlbl0gPSB1c2VTdGF0ZTxudW1iZXI+KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzdG9yZWRNb25leWdlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9uZXlnZW4nKTtcclxuICAgICAgICByZXR1cm4gc3RvcmVkTW9uZXlnZW4gPyBwYXJzZUZsb2F0KHN0b3JlZE1vbmV5Z2VuKSA6IDA7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBbcmFuaywgc2V0UmFua10gPSB1c2VTdGF0ZTxudW1iZXI+KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzdG9yZWRSYW5rID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyYW5rJyk7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JlZFJhbmsgPyBwYXJzZUZsb2F0KHN0b3JlZFJhbmspIDogMTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IFtyYW5rUG9pbnQsIHNldFJhbmtQb2ludF0gPSB1c2VTdGF0ZTxudW1iZXI+KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzdG9yZWRSYW5rUG9pbnQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JhbmtQb2ludCcpO1xyXG4gICAgICAgIHJldHVybiBzdG9yZWRSYW5rUG9pbnQgPyBwYXJzZUZsb2F0KHN0b3JlZFJhbmtQb2ludCkgOiAwO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICBjb25zdCBbYmlnTW9uZXlnZW4sIHNldEJpZ01vbmV5Z2VuXSA9IHVzZVN0YXRlPG51bWJlcj4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlZEJpZ01vbmV5Z2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiaWdNb25leWdlbicpO1xyXG4gICAgICAgIHJldHVybiBzdG9yZWRCaWdNb25leWdlbiA/IHBhcnNlRmxvYXQoc3RvcmVkQmlnTW9uZXlnZW4pIDogMDtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgW3RpbWVzbW9uZXksIHNldFRpbWVzTW9uZXldID0gdXNlU3RhdGU8bnVtYmVyPigoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkVGltZXNNb25leSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZXNtb25leScpO1xyXG4gICAgICAgIHJldHVybiBzdG9yZWRUaW1lc01vbmV5ID8gcGFyc2VGbG9hdChzdG9yZWRUaW1lc01vbmV5KSA6IDA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgT25DbGlja01vbmV5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vbmV5KHByZXZNb25leSA9PiBwcmV2TW9uZXkgKyB0aW1lc21vbmV5KTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBPblJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtb25leSA+PSAxMCAqIHJhbmsgKiAxLjUpIHtcclxuICAgICAgICAgIHNldE1vbmV5Z2VuKDApO1xyXG4gICAgICAgICAgc2V0TW9uZXkoMCk7XHJcbiAgICAgICAgICBzZXRSYW5rKHByZXZSYW5rID0+IHByZXZSYW5rICsgMSk7XHJcbiAgICAgICAgICBzZXRUaW1lc01vbmV5KHByZXZUaW1lc01vbmV5ID0+IHByZXZUaW1lc01vbmV5ICogMik7XHJcbiAgICAgICAgICBzZXRSYW5rUG9pbnQocHJldlJhbmtQb2ludCA9PiBwcmV2UmFua1BvaW50ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IE9uVGVzdGluZ1Jlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vbmV5Z2VuKDApO1xyXG4gICAgICAgIHNldE1vbmV5KDApO1xyXG4gICAgICAgIHNldFJhbmsoMSk7XHJcbiAgICAgICAgc2V0VGltZXNNb25leSgxKTtcclxuICAgICAgICBzZXRCaWdNb25leWdlbigwKTtcclxuICAgICAgICBzZXRSYW5rUG9pbnQoMCk7XHJcbiAgICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9uZXknLCBKU09OLnN0cmluZ2lmeShtb25leSkpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9uZXlnZW4nLCBKU09OLnN0cmluZ2lmeShtb25leWdlbikpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmFuaycsIEpTT04uc3RyaW5naWZ5KHJhbmspKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWVzbW9uZXknLCBKU09OLnN0cmluZ2lmeSh0aW1lc21vbmV5KSlcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JpZ21vbmV5Z2VuJywgSlNPTi5zdHJpbmdpZnkoYmlnbW9uZXlnZW4pKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmFua3BvaW50JywgSlNPTi5zdHJpbmdpZnkocmFua3BvaW50KSlcclxuICAgIH0sIFttb25leSxtb25leWdlbixyYW5rLHRpbWVzbW9uZXksIGJpZ01vbmV5Z2VuLCByYW5rcG9pbnRdKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+aGk8L2gxPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2sgPSB7KCkgPT4gT25SZXNldCgpfT5DbGljayB0byB1cGdyYWRlIFJhbms8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrID0geygpID0+IE9uVGVzdGluZ1Jlc2V0KCl9PlJlc2V0IGZvciB0ZXN0aW5nPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlJhbms6IHtyYW5rLnRvRml4ZWQgKDApfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+UmFuayBQb2ludHM6IHtyYW5rUG9pbnQudG9GaXhlZCgwKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhbmtIb21lOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJSYW5rSG9tZSIsIm1vbmV5Iiwic2V0TW9uZXkiLCJzdG9yZWRNb25leSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUZsb2F0IiwibW9uZXlnZW4iLCJzZXRNb25leWdlbiIsInN0b3JlZE1vbmV5Z2VuIiwicmFuayIsInNldFJhbmsiLCJzdG9yZWRSYW5rIiwicmFua1BvaW50Iiwic2V0UmFua1BvaW50Iiwic3RvcmVkUmFua1BvaW50IiwiYmlnTW9uZXlnZW4iLCJzZXRCaWdNb25leWdlbiIsInN0b3JlZEJpZ01vbmV5Z2VuIiwidGltZXNtb25leSIsInNldFRpbWVzTW9uZXkiLCJzdG9yZWRUaW1lc01vbmV5IiwiT25DbGlja01vbmV5IiwicHJldk1vbmV5IiwiT25SZXNldCIsInByZXZSYW5rIiwicHJldlRpbWVzTW9uZXkiLCJwcmV2UmFua1BvaW50IiwiT25UZXN0aW5nUmVzZXQiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImJpZ21vbmV5Z2VuIiwicmFua3BvaW50IiwiZGl2IiwiaDEiLCJ2YXJpYW50IiwiY29sb3IiLCJvbkNsaWNrIiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/rank/page.tsx\n"));

/***/ })

});