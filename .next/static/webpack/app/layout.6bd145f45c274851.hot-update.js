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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-client)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-client)/./src/app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-client)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Box */ \"(app-client)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(app-client)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _redux2_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux2/store */ \"(app-client)/./src/app/redux2/store.ts\");\n/* harmony import */ var _redux2_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux2/counter */ \"(app-client)/./src/app/redux2/counter.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const money = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.money);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const [moneygen, setMoneygen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const storedMoneygen = window.localStorage.getItem(\"moneygen\");\n        return storedMoneygen ? parseFloat(storedMoneygen) : 0;\n    });\n    const timesmoney = parseFloat(window.localStorage.getItem(\"timesmoney\") || \"0\");\n    const [moneyPerSecond, setMoneyPerSecond] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const storedMoneyPerSecond = window.localStorage.getItem(\"mps \");\n        return storedMoneyPerSecond ? parseFloat(storedMoneyPerSecond) : 0;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.localStorage.setItem(\"money\", JSON.stringify(money));\n    }, [\n        money,\n        timesmoney\n    ]);\n    /*useEffect(() => {\r\n    if (moneygen >= 1) {\r\n      const timer = setInterval(() => {\r\n        setMoney((prevMoney) => prevMoney + moneygen / 10 * timesmoney);\r\n      }, 1000);\r\n\r\n      return () => {\r\n        clearInterval(timer);\r\n      };\r\n    }\r\n  }, [moneygen]);\r\n  /** */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n            store: _redux2_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default().className),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"currmon\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        variant: \"h6\",\n                                        children: [\n                                            \"Current Money: \",\n                                            money.toFixed(1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        variant: \"h6\",\n                                        children: [\n                                            \"(\",\n                                            moneyPerSecond,\n                                            \"/s)\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        variant: \"contained\",\n                                        color: \"secondary\",\n                                        onClick: ()=>dispatch((0,_redux2_counter__WEBPACK_IMPORTED_MODULE_6__.increment)()),\n                                        children: \"Click for Money\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                sx: {\n                                    flexGrow: 1\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    position: \"static\",\n                                    sx: {\n                                        color: \"white\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                href: \"/\",\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                href: \"/rank\",\n                                                children: \"Rank\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"children\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"aQJ4BP9NoJYto9QdMwhm3QW9Xu0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT01BO0FBTmdCO0FBRW9DO0FBQ007QUFDcEM7QUFDOEI7QUFFM0I7QUFDSztBQUNRO0FBQ007QUFDaEI7QUFDVztBQUU5QixTQUFTZ0IsV0FBVyxLQUlsQztRQUprQyxFQUNqQ0MsUUFBUSxFQUdULEdBSmtDOztJQUtqQyxNQUFNQyxRQUFRZix3REFBV0EsQ0FBQyxDQUFDZ0IsUUFBVUEsTUFBTUQ7SUFDM0MsTUFBTUUsV0FBV2hCLHdEQUFXQTtJQUU1QixNQUFNLENBQUNpQixVQUFVQyxZQUFZLEdBQUdwQiwrQ0FBUUEsQ0FBUztRQUMvQyxNQUFNcUIsaUJBQWlCQyxPQUFPQyxhQUFhQyxRQUFRO1FBQ25ELE9BQU9ILGlCQUFpQkksV0FBV0osa0JBQWtCO0lBQ3ZEO0lBRUEsTUFBTUssYUFBYUQsV0FBV0gsT0FBT0MsYUFBYUMsUUFBUSxpQkFBaUI7SUFDM0UsTUFBTSxDQUFDRyxnQkFBZ0JDLGtCQUFrQixHQUFHNUIsK0NBQVFBLENBQVM7UUFDM0QsTUFBTTZCLHVCQUF1QlAsT0FBT0MsYUFBYUMsUUFBUTtRQUN6RCxPQUFPSyx1QkFBdUJKLFdBQVdJLHdCQUF3QjtJQUNuRTtJQUVBOUIsZ0RBQVNBLENBQUM7UUFDUnVCLE9BQU9DLGFBQWFPLFFBQVEsU0FBU0MsS0FBS0MsVUFBVWhCO0lBQ3RELEdBQUc7UUFBQ0E7UUFBT1U7S0FBVztJQUV0Qjs7Ozs7Ozs7Ozs7TUFXSSxHQUNKLHFCQUNFLDhEQUFDTztRQUFLQyxNQUFLO2tCQUNULDRFQUFDL0IsaURBQVFBO1lBQUNTLE9BQU9BLHFEQUFLQTtzQkFDdEIsNEVBQUN1QjswQkFDRCw0RUFBQzVCLHFEQUFTQTtvQkFBQzZCLFdBQVd0QywrSkFBZXNDOzhCQUNuQyw0RUFBQ0M7d0JBQUlDLElBQUc7OzBDQUNOLDhEQUFDRDtnQ0FBSUMsSUFBRzs7a0RBQ04sOERBQUMzQixnRUFBVUE7d0NBQUM0QixTQUFROzs0Q0FBSzs0Q0FBZ0J2QixNQUFNd0IsUUFBUTs7Ozs7OztrREFDdkQsOERBQUM3QixnRUFBVUE7d0NBQUM0QixTQUFROzs0Q0FBSzs0Q0FBRVo7NENBQWU7Ozs7Ozs7a0RBQ3hDLDhEQUFDckIsc0RBQU1BO3dDQUFDaUMsU0FBUTt3Q0FBWUUsT0FBTTt3Q0FBWUMsU0FBUyxJQUFNeEIsU0FBU0wsMERBQVNBO2tEQUFLOzs7Ozs7Ozs7Ozs7MENBSXhGLDhEQUFDSiwwREFBR0E7Z0NBQUNrQyxJQUFJO29DQUFFQyxVQUFVO2dDQUFFOzBDQUNyQiw0RUFBQ3ZDLHNEQUFNQTtvQ0FBQ3dDLFVBQVM7b0NBQVNGLElBQUk7d0NBQUVGLE9BQU87b0NBQVE7OENBQzdDLDRFQUFDL0IsOERBQU9BOzswREFDTiw4REFBQ04sa0RBQUlBO2dEQUFDMEMsTUFBSzswREFBSTs7Ozs7OzBEQUNmLDhEQUFDMUMsa0RBQUlBO2dEQUFDMEMsTUFBSzswREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJekIsOERBQUNUO2dDQUFJQyxJQUFHOzBDQUNMdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0FqRXdCRDs7UUFLUmIsb0RBQVdBO1FBQ1JDLG9EQUFXQTs7O0tBTk5ZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGF5b3V0LnRzeD81N2E5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgJy4vZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSxjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2gsIFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQXBwQmFyLCBCdXR0b24sIENvbnRhaW5lciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3JlZHV4Mi9zdG9yZSdcclxuaW1wb3J0IHsgaW5jcmVtZW50IH0gZnJvbSAnLi9yZWR1eDIvY291bnRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtcclxuICBjaGlsZHJlbixcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxufSkge1xyXG4gIGNvbnN0IG1vbmV5ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tb25leSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbbW9uZXlnZW4sIHNldE1vbmV5Z2VuXSA9IHVzZVN0YXRlPG51bWJlcj4oKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkTW9uZXlnZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbmV5Z2VuJyk7XHJcbiAgICByZXR1cm4gc3RvcmVkTW9uZXlnZW4gPyBwYXJzZUZsb2F0KHN0b3JlZE1vbmV5Z2VuKSA6IDA7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRpbWVzbW9uZXkgPSBwYXJzZUZsb2F0KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZXNtb25leScpIHx8ICcwJyk7XHJcbiAgY29uc3QgW21vbmV5UGVyU2Vjb25kLCBzZXRNb25leVBlclNlY29uZF0gPSB1c2VTdGF0ZTxudW1iZXI+KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZE1vbmV5UGVyU2Vjb25kID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtcHMgJyk7XHJcbiAgICByZXR1cm4gc3RvcmVkTW9uZXlQZXJTZWNvbmQgPyBwYXJzZUZsb2F0KHN0b3JlZE1vbmV5UGVyU2Vjb25kKSA6IDA7XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vbmV5JywgSlNPTi5zdHJpbmdpZnkobW9uZXkpKTtcclxuICB9LCBbbW9uZXksIHRpbWVzbW9uZXldKTtcclxuXHJcbiAgLyp1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG1vbmV5Z2VuID49IDEpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TW9uZXkoKHByZXZNb25leSkgPT4gcHJldk1vbmV5ICsgbW9uZXlnZW4gLyAxMCAqIHRpbWVzbW9uZXkpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwgW21vbmV5Z2VuXSk7XHJcbiAgLyoqICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPG1haW4+XHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtpbnRlci5jbGFzc05hbWV9PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY3Vycm1vblwiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5DdXJyZW50IE1vbmV5OiB7bW9uZXkudG9GaXhlZCgxKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPih7bW9uZXlQZXJTZWNvbmR9L3MpPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goaW5jcmVtZW50KCkpfT5cclxuICAgICAgICAgICAgICAgIENsaWNrIGZvciBNb25leVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgc3g9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JhbmtcIj5SYW5rPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJjaGlsZHJlblwiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgPC9tYWluPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiaW50ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJQcm92aWRlciIsIkxpbmsiLCJBcHBCYXIiLCJCdXR0b24iLCJDb250YWluZXIiLCJSZWFjdCIsIkJveCIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5Iiwic3RvcmUiLCJpbmNyZW1lbnQiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJtb25leSIsInN0YXRlIiwiZGlzcGF0Y2giLCJtb25leWdlbiIsInNldE1vbmV5Z2VuIiwic3RvcmVkTW9uZXlnZW4iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VGbG9hdCIsInRpbWVzbW9uZXkiLCJtb25leVBlclNlY29uZCIsInNldE1vbmV5UGVyU2Vjb25kIiwic3RvcmVkTW9uZXlQZXJTZWNvbmQiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImh0bWwiLCJsYW5nIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImlkIiwidmFyaWFudCIsInRvRml4ZWQiLCJjb2xvciIsIm9uQ2xpY2siLCJzeCIsImZsZXhHcm93IiwicG9zaXRpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/layout.tsx\n"));

/***/ })

});