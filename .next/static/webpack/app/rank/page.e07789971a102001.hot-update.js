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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst RankHome = ()=>{\n    _s();\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const storedMoney = window.localStorage.getItem(\"money\");\n        return storedMoney ? parseFloat(storedMoney) : 0;\n    });\n    const [moneygen, setMoneygen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const storedMoneygen = window.localStorage.getItem(\"moneygen\");\n        return storedMoneygen ? parseFloat(storedMoneygen) : 0;\n    });\n    const [rank, setRank] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const storedRank = window.localStorage.getItem(\"rank\");\n        return storedRank ? parseFloat(storedRank) : 1;\n    });\n    const timesmoney = parseFloat(window.localStorage.getItem(\"timesmoney\") || \"0\");\n    const OnClickMoney = ()=>{\n        setMoney((prevMoney)=>prevMoney + timesmoney);\n    };\n    const OnReset = ()=>{\n        if (money >= 10 * rank * 1.5) {\n            setMoneygen(0);\n            setMoney(0);\n            setRank((prevRank)=>prevRank + 1);\n            setTimesMoney((prevTimesMoney)=>prevTimesMoney * 2);\n            setRankPoint((prevRankPoint)=>prevRankPoint + 1);\n        }\n    };\n    const OnTestingReset = ()=>{\n        setMoneygen(0);\n        setMoney(0);\n        setRank(1);\n        setTimesMoney(1);\n        setBigMoneygen(0);\n        setRankPoint(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"hi\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\rank\\\\page.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                variant: \"contained\",\n                color: \"secondary\",\n                onClick: ()=>OnReset(),\n                children: \"Click to upgrade Rank\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\rank\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                variant: \"contained\",\n                color: \"secondary\",\n                onClick: ()=>OnTestingReset(),\n                children: \"Reset for testing\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\rank\\\\page.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\rank\\\\page.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RankHome, \"Vv70xjxGYy1lKJoUhBiC2xTs2go=\");\n_c = RankHome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RankHome);\nvar _c;\n$RefreshReg$(_c, \"RankHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9yYW5rL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUc0QztBQUU1QyxNQUFNQyxXQUFXOztJQUNiLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBUztRQUN2QyxNQUFNSSxjQUFjQyxPQUFPQyxhQUFhQyxRQUFRO1FBQ2hELE9BQU9ILGNBQWNJLFdBQVdKLGVBQWU7SUFDakQ7SUFDQSxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQVM7UUFDL0MsTUFBTVcsaUJBQWlCTixPQUFPQyxhQUFhQyxRQUFRO1FBQ25ELE9BQU9JLGlCQUFpQkgsV0FBV0csa0JBQWtCO0lBQ3ZEO0lBQ0EsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFTO1FBQ3ZDLE1BQU1jLGFBQWFULE9BQU9DLGFBQWFDLFFBQVE7UUFDL0MsT0FBT08sYUFBYU4sV0FBV00sY0FBYztJQUMvQztJQUVBLE1BQU1DLGFBQWFQLFdBQVdILE9BQU9DLGFBQWFDLFFBQVEsaUJBQWlCO0lBRTNFLE1BQU1TLGVBQWU7UUFDbkJiLFNBQVNjLENBQUFBLFlBQWFBLFlBQVlGO0lBQ3BDO0lBRUEsTUFBTUcsVUFBVTtRQUNkLElBQUloQixTQUFTLEtBQUtVLE9BQU8sS0FBSztZQUM1QkYsWUFBWTtZQUNaUCxTQUFTO1lBQ1RVLFFBQVFNLENBQUFBLFdBQVlBLFdBQVc7WUFDL0JDLGNBQWNDLENBQUFBLGlCQUFrQkEsaUJBQWlCO1lBQ2pEQyxhQUFhQyxDQUFBQSxnQkFBaUJBLGdCQUFnQjtRQUNoRDtJQUNGO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ3JCZCxZQUFZO1FBQ1pQLFNBQVM7UUFDVFUsUUFBUTtRQUNSTyxjQUFjO1FBQ2RLLGVBQWU7UUFDZkgsYUFBYTtJQUNmO0lBQ0YscUJBQ0ksOERBQUNJOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVE7Z0JBQVlDLE9BQU07Z0JBQVlDLFNBQVcsSUFBTWI7MEJBQVc7Ozs7OzswQkFDMUUsOERBQUNVO2dCQUFPQyxTQUFRO2dCQUFZQyxPQUFNO2dCQUFZQyxTQUFXLElBQU1QOzBCQUFrQjs7Ozs7Ozs7Ozs7O0FBRzdGO0dBN0NNdkI7S0FBQUE7QUErQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yYW5rL3BhZ2UudHN4PzNhZDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUmFua0hvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbW9uZXksIHNldE1vbmV5XSA9IHVzZVN0YXRlPG51bWJlcj4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlZE1vbmV5ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb25leScpO1xyXG4gICAgICAgIHJldHVybiBzdG9yZWRNb25leSA/IHBhcnNlRmxvYXQoc3RvcmVkTW9uZXkpIDogMDtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IFttb25leWdlbiwgc2V0TW9uZXlnZW5dID0gdXNlU3RhdGU8bnVtYmVyPigoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkTW9uZXlnZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbmV5Z2VuJyk7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JlZE1vbmV5Z2VuID8gcGFyc2VGbG9hdChzdG9yZWRNb25leWdlbikgOiAwO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgW3JhbmssIHNldFJhbmtdID0gdXNlU3RhdGU8bnVtYmVyPigoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkUmFuayA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmFuaycpO1xyXG4gICAgICAgIHJldHVybiBzdG9yZWRSYW5rID8gcGFyc2VGbG9hdChzdG9yZWRSYW5rKSA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IHRpbWVzbW9uZXkgPSBwYXJzZUZsb2F0KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZXNtb25leScpIHx8ICcwJyk7XHJcbiAgICBcclxuICAgICAgY29uc3QgT25DbGlja01vbmV5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vbmV5KHByZXZNb25leSA9PiBwcmV2TW9uZXkgKyB0aW1lc21vbmV5KTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBPblJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtb25leSA+PSAxMCAqIHJhbmsgKiAxLjUpIHtcclxuICAgICAgICAgIHNldE1vbmV5Z2VuKDApO1xyXG4gICAgICAgICAgc2V0TW9uZXkoMCk7XHJcbiAgICAgICAgICBzZXRSYW5rKHByZXZSYW5rID0+IHByZXZSYW5rICsgMSk7XHJcbiAgICAgICAgICBzZXRUaW1lc01vbmV5KHByZXZUaW1lc01vbmV5ID0+IHByZXZUaW1lc01vbmV5ICogMik7XHJcbiAgICAgICAgICBzZXRSYW5rUG9pbnQocHJldlJhbmtQb2ludCA9PiBwcmV2UmFua1BvaW50ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IE9uVGVzdGluZ1Jlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vbmV5Z2VuKDApO1xyXG4gICAgICAgIHNldE1vbmV5KDApO1xyXG4gICAgICAgIHNldFJhbmsoMSk7XHJcbiAgICAgICAgc2V0VGltZXNNb25leSgxKTtcclxuICAgICAgICBzZXRCaWdNb25leWdlbigwKTtcclxuICAgICAgICBzZXRSYW5rUG9pbnQoMCk7XHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPmhpPC9oMT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrID0geygpID0+IE9uUmVzZXQoKX0+Q2xpY2sgdG8gdXBncmFkZSBSYW5rPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljayA9IHsoKSA9PiBPblRlc3RpbmdSZXNldCgpfT5SZXNldCBmb3IgdGVzdGluZzwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYW5rSG9tZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSYW5rSG9tZSIsIm1vbmV5Iiwic2V0TW9uZXkiLCJzdG9yZWRNb25leSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUZsb2F0IiwibW9uZXlnZW4iLCJzZXRNb25leWdlbiIsInN0b3JlZE1vbmV5Z2VuIiwicmFuayIsInNldFJhbmsiLCJzdG9yZWRSYW5rIiwidGltZXNtb25leSIsIk9uQ2xpY2tNb25leSIsInByZXZNb25leSIsIk9uUmVzZXQiLCJwcmV2UmFuayIsInNldFRpbWVzTW9uZXkiLCJwcmV2VGltZXNNb25leSIsInNldFJhbmtQb2ludCIsInByZXZSYW5rUG9pbnQiLCJPblRlc3RpbmdSZXNldCIsInNldEJpZ01vbmV5Z2VuIiwiZGl2IiwiaDEiLCJCdXR0b24iLCJ2YXJpYW50IiwiY29sb3IiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/rank/page.tsx\n"));

/***/ })

});