"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MoneyUpdateContext: function() { return /* binding */ MoneyUpdateContext; },\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-client)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-client)/./src/app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"(app-client)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(app-client)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* __next_internal_client_entry_do_not_use__ MoneyUpdateContext,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst MoneyUpdateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(_c = ()=>{});\n_c1 = MoneyUpdateContext;\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const storedMoney = window.localStorage.getItem(\"money\");\n        return storedMoney ? parseFloat(storedMoney) : 0;\n    });\n    const [moneygen, setMoneygen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const storedMoneygen = window.localStorage.getItem(\"moneygen\");\n        return storedMoneygen ? parseFloat(storedMoneygen) : 0;\n    });\n    const timesmoney = parseFloat(window.localStorage.getItem(\"timesmoney\") || \"0\");\n    const [moneyPerSecond, setMoneyPerSecond] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const storedMoneyPerSecond = window.localStorage.getItem(\"mps \");\n        return storedMoneyPerSecond ? parseFloat(storedMoneyPerSecond) : 0;\n    });\n    const OnClickMoney = ()=>{\n        setMoney((prevMoney)=>prevMoney + timesmoney);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.localStorage.setItem(\"money\", JSON.stringify(money));\n    }, [\n        money,\n        timesmoney\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (moneygen >= 1) {\n            const timer = setInterval(()=>{\n                setMoney((prevMoney)=>prevMoney + moneygen / 10 * timesmoney);\n            }, 1000);\n            return ()=>{\n                clearInterval(timer);\n            };\n        }\n    }, [\n        moneygen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default().className),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"currmon\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                variant: \"h6\",\n                                children: [\n                                    \"Current Money: \",\n                                    money.toFixed(1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                variant: \"h6\",\n                                children: [\n                                    \"(\",\n                                    moneyPerSecond,\n                                    \"/s)\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                variant: \"contained\",\n                                color: \"secondary\",\n                                onClick: ()=>OnClickMoney(),\n                                children: \"Click for Money\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        sx: {\n                            flexGrow: 1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            position: \"static\",\n                            sx: {\n                                color: \"white\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/rank\",\n                                        children: \"Rank\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"children\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"znHM5NRtwY3B5QxOcQADu95xO3Y=\");\n_c2 = RootLayout;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MoneyUpdateContext$createContext\");\n$RefreshReg$(_c1, \"MoneyUpdateContext\");\n$RefreshReg$(_c2, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1NQTtBQUxnQjtBQUVvQztBQUM5QjtBQUM4QjtBQUUzQjtBQUNLO0FBQ1E7QUFDTTtBQUUzQyxNQUFNWSxtQ0FBcUJULG9EQUFhQSxNQUE2QixLQUFPLEdBQUc7O0FBQ3ZFLFNBQVNVLFdBQVcsS0FJbEM7UUFKa0MsRUFDakNDLFFBQVEsRUFHVCxHQUprQzs7SUFLakMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFTO1FBQ3pDLE1BQU1lLGNBQWNDLE9BQU9DLGFBQWFDLFFBQVE7UUFDaEQsT0FBT0gsY0FBY0ksV0FBV0osZUFBZTtJQUNqRDtJQUNBLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHckIsK0NBQVFBLENBQVM7UUFDL0MsTUFBTXNCLGlCQUFpQk4sT0FBT0MsYUFBYUMsUUFBUTtRQUNuRCxPQUFPSSxpQkFBaUJILFdBQVdHLGtCQUFrQjtJQUN2RDtJQUNBLE1BQU1DLGFBQWFKLFdBQVdILE9BQU9DLGFBQWFDLFFBQVEsaUJBQWlCO0lBQzNFLE1BQU0sQ0FBQ00sZ0JBQWdCQyxrQkFBa0IsR0FBR3pCLCtDQUFRQSxDQUFTO1FBQzNELE1BQU0wQix1QkFBdUJWLE9BQU9DLGFBQWFDLFFBQVE7UUFDekQsT0FBT1EsdUJBQXVCUCxXQUFXTyx3QkFBd0I7SUFDbkU7SUFDQSxNQUFNQyxlQUFlO1FBQ25CYixTQUFTYyxDQUFBQSxZQUFhQSxZQUFZTDtJQUNwQztJQUNBeEIsZ0RBQVNBLENBQUM7UUFDUmlCLE9BQU9DLGFBQWFZLFFBQVEsU0FBU0MsS0FBS0MsVUFBVWxCO0lBQ3hELEdBQUc7UUFBQ0E7UUFBTVU7S0FBVztJQUNyQnhCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBR3FCLFlBQVksR0FBRTtZQUNiLE1BQU1ZLFFBQVFDLFlBQVk7Z0JBQ3RCbkIsU0FBU2MsQ0FBQUEsWUFBYUEsWUFBWVIsV0FBVyxLQUFJRztZQUNyRCxHQUFFO1lBQ0YsT0FBTztnQkFDSFcsY0FBY0Y7WUFDbEI7UUFDTjtJQUFDLEdBQUU7UUFBQ1o7S0FBUztJQUNYLHFCQUNFLDhEQUFDZTtRQUFLQyxNQUFLO2tCQUNULDRFQUFDL0IscURBQVNBO1lBQUNnQyxXQUFXdkMsK0pBQWV1QztzQkFDbkMsNEVBQUNDO2dCQUFJQyxJQUFHOztrQ0FDUiw4REFBQ0Q7d0JBQUlDLElBQUc7OzBDQUNOLDhEQUFDOUIsZ0VBQVVBO2dDQUFDK0IsU0FBUTs7b0NBQUs7b0NBQWdCM0IsTUFBTTRCLFFBQVE7Ozs7Ozs7MENBQ3ZELDhEQUFDaEMsZ0VBQVVBO2dDQUFDK0IsU0FBUTs7b0NBQUs7b0NBQUVoQjtvQ0FBZTs7Ozs7OzswQ0FDMUMsOERBQUNwQixxREFBTUE7Z0NBQUNvQyxTQUFRO2dDQUFZRSxPQUFNO2dDQUFZQyxTQUFTLElBQU1oQjswQ0FBZ0I7Ozs7Ozs7Ozs7OztrQ0FFakYsOERBQUNwQix5REFBR0E7d0JBQUNxQyxJQUFJOzRCQUFFQyxVQUFVO3dCQUFFO2tDQUN2Qiw0RUFBQzFDLHFEQUFNQTs0QkFBQzJDLFVBQVM7NEJBQVNGLElBQUk7Z0NBQUVGLE9BQU07NEJBQU87c0NBQzNDLDRFQUFDbEMsOERBQU9BOztrREFDSiw4REFBQ04sa0RBQUlBO3dDQUFDNkMsTUFBSztrREFBSTs7Ozs7O2tEQUdmLDhEQUFDN0Msa0RBQUlBO3dDQUFDNkMsTUFBSztrREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNdkIsOERBQUNUO3dCQUFJQyxJQUFHO2tDQUNMM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWDtHQTdEd0JEO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGF5b3V0LnRzeD81N2E5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0ICcuL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSxjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQXBwQmFyLCBCdXR0b24sIENvbnRhaW5lciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcblxuZXhwb3J0IGNvbnN0IE1vbmV5VXBkYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8KG5ld01vbmV5OiBudW1iZXIpID0+IHZvaWQ+KCgpID0+IHt9KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb3RMYXlvdXQoe1xuICBjaGlsZHJlbixcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufSkge1xuICBjb25zdCBbbW9uZXksIHNldE1vbmV5XSA9IHVzZVN0YXRlPG51bWJlcj4oKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZE1vbmV5ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb25leScpO1xuICAgIHJldHVybiBzdG9yZWRNb25leSA/IHBhcnNlRmxvYXQoc3RvcmVkTW9uZXkpIDogMDtcbiAgfSk7XG4gIGNvbnN0IFttb25leWdlbiwgc2V0TW9uZXlnZW5dID0gdXNlU3RhdGU8bnVtYmVyPigoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkTW9uZXlnZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbmV5Z2VuJyk7XG4gICAgcmV0dXJuIHN0b3JlZE1vbmV5Z2VuID8gcGFyc2VGbG9hdChzdG9yZWRNb25leWdlbikgOiAwO1xuICB9KTtcbiAgY29uc3QgdGltZXNtb25leSA9IHBhcnNlRmxvYXQod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lc21vbmV5JykgfHwgJzAnKTtcbiAgY29uc3QgW21vbmV5UGVyU2Vjb25kLCBzZXRNb25leVBlclNlY29uZF0gPSB1c2VTdGF0ZTxudW1iZXI+KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRNb25leVBlclNlY29uZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXBzICcpO1xuICAgIHJldHVybiBzdG9yZWRNb25leVBlclNlY29uZCA/IHBhcnNlRmxvYXQoc3RvcmVkTW9uZXlQZXJTZWNvbmQpIDogMDtcbiAgfSk7XG4gIGNvbnN0IE9uQ2xpY2tNb25leSA9ICgpID0+IHtcbiAgICBzZXRNb25leShwcmV2TW9uZXkgPT4gcHJldk1vbmV5ICsgdGltZXNtb25leSlcbiAgfSBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vbmV5JywgSlNPTi5zdHJpbmdpZnkobW9uZXkpKTtcbn0sIFttb25leSx0aW1lc21vbmV5XSk7XG51c2VFZmZlY3QoKCkgPT4ge1xuICBpZihtb25leWdlbiA+PSAxKXtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHNldE1vbmV5KHByZXZNb25leSA9PiBwcmV2TW9uZXkgKyBtb25leWdlbiAvIDEwICp0aW1lc21vbmV5KVxuICAgICAgfSwxMDAwKVxuICAgICAgcmV0dXJuICgpID0+ICB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgIH1cbn19LFttb25leWdlbl0pXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17aW50ZXIuY2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdiBpZD1cImJvZHlcIj5cbiAgICAgICAgPGRpdiBpZD1cImN1cnJtb25cIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5DdXJyZW50IE1vbmV5OiB7bW9uZXkudG9GaXhlZCgxKX08L1R5cG9ncmFwaHk+IFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPih7bW9uZXlQZXJTZWNvbmR9L3MpPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gT25DbGlja01vbmV5KCl9PkNsaWNrIGZvciBNb25leTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgc3g9e3sgY29sb3I6J3doaXRlJ319PlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL3JhbmsnPlxuICAgICAgICAgICAgUmFua1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8ZGl2IGlkPVwiY2hpbGRyZW5cIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiTGluayIsIkFwcEJhciIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIlJlYWN0IiwiQm94IiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJNb25leVVwZGF0ZUNvbnRleHQiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJtb25leSIsInNldE1vbmV5Iiwic3RvcmVkTW9uZXkiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VGbG9hdCIsIm1vbmV5Z2VuIiwic2V0TW9uZXlnZW4iLCJzdG9yZWRNb25leWdlbiIsInRpbWVzbW9uZXkiLCJtb25leVBlclNlY29uZCIsInNldE1vbmV5UGVyU2Vjb25kIiwic3RvcmVkTW9uZXlQZXJTZWNvbmQiLCJPbkNsaWNrTW9uZXkiLCJwcmV2TW9uZXkiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaHRtbCIsImxhbmciLCJjbGFzc05hbWUiLCJkaXYiLCJpZCIsInZhcmlhbnQiLCJ0b0ZpeGVkIiwiY29sb3IiLCJvbkNsaWNrIiwic3giLCJmbGV4R3JvdyIsInBvc2l0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/layout.tsx\n"));

/***/ })

});