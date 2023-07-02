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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-client)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-client)/./src/app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-client)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(app-client)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const storedMoney = window.localStorage.getItem(\"money\");\n        return storedMoney ? parseFloat(storedMoney) : 0;\n    });\n    const [moneygen, setMoneygen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const storedMoneygen = window.localStorage.getItem(\"moneygen\");\n        return storedMoneygen ? parseFloat(storedMoneygen) : 0;\n    });\n    const timesmoney = parseFloat(window.localStorage.getItem(\"timesmoney\") || \"0\");\n    const [moneyPerSecond, setMoneyPerSecond] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const storedMoneyPerSecond = window.localStorage.getItem(\"moneypersecond\");\n        return storedMoneyPerSecond ? parseFloat(storedMoneyPerSecond) : 0;\n    });\n    const OnClickMoney = ()=>{\n        setMoney((prevMoney)=>prevMoney + timesmoney);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.localStorage.setItem(\"money\", JSON.stringify(money));\n    }, [\n        money,\n        timesmoney\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (moneygen >= 1) {\n            const timer = setInterval(()=>{\n                setMoney((prevMoney)=>prevMoney + moneygen / 10 * timesmoney);\n            }, 1000);\n            return ()=>{\n                clearInterval(timer);\n            };\n        }\n    }, [\n        moneygen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default().className),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"currmon\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                variant: \"h6\",\n                                children: [\n                                    \"Current Money: \",\n                                    money.toFixed(1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                variant: \"h6\",\n                                children: [\n                                    \"(\",\n                                    moneyPerSecond,\n                                    \"/s)\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                variant: \"contained\",\n                                color: \"secondary\",\n                                onClick: ()=>OnClickMoney(),\n                                children: \"Click for Money\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        sx: {\n                            flexGrow: 1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            position: \"static\",\n                            sx: {\n                                color: \"white\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        variant: \"h6\",\n                                        component: \"a\",\n                                        href: \"/\",\n                                        sx: {\n                                            flexGrow: 1,\n                                            textDecoration: \"none\"\n                                        },\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        variant: \"h6\",\n                                        component: \"a\",\n                                        href: \"/rank\",\n                                        sx: {\n                                            flexGrow: 1,\n                                            textDecoration: \"none\"\n                                        },\n                                        children: \"Rank\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"children\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"8AWVAYv1Z0XmNwzlrmpiOXgR5ag=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1NQTtBQUxnQjtBQUVzQjtBQUVjO0FBRTNCO0FBQ0s7QUFDUTtBQUNNO0FBSW5DLFNBQVNVLFdBQVcsS0FJbEM7UUFKa0MsRUFDakNDLFFBQVEsRUFHVCxHQUprQzs7SUFLakMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFTO1FBQ3pDLE1BQU1ZLGNBQWNDLE9BQU9DLGFBQWFDLFFBQVE7UUFDaEQsT0FBT0gsY0FBY0ksV0FBV0osZUFBZTtJQUNqRDtJQUNBLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHbEIsK0NBQVFBLENBQVM7UUFDL0MsTUFBTW1CLGlCQUFpQk4sT0FBT0MsYUFBYUMsUUFBUTtRQUNuRCxPQUFPSSxpQkFBaUJILFdBQVdHLGtCQUFrQjtJQUN2RDtJQUNBLE1BQU1DLGFBQWFKLFdBQVdILE9BQU9DLGFBQWFDLFFBQVEsaUJBQWlCO0lBQzNFLE1BQU0sQ0FBQ00sZ0JBQWdCQyxrQkFBa0IsR0FBR3RCLCtDQUFRQSxDQUFTO1FBQzNELE1BQU11Qix1QkFBdUJWLE9BQU9DLGFBQWFDLFFBQVE7UUFDekQsT0FBT1EsdUJBQXVCUCxXQUFXTyx3QkFBd0I7SUFDbkU7SUFDQSxNQUFNQyxlQUFlO1FBQ25CYixTQUFTYyxDQUFBQSxZQUFhQSxZQUFZTDtJQUNwQztJQUNBckIsZ0RBQVNBLENBQUM7UUFDUmMsT0FBT0MsYUFBYVksUUFBUSxTQUFTQyxLQUFLQyxVQUFVbEI7SUFDeEQsR0FBRztRQUFDQTtRQUFNVTtLQUFXO0lBQ3JCckIsZ0RBQVNBLENBQUM7UUFDUixJQUFHa0IsWUFBWSxHQUFFO1lBQ2IsTUFBTVksUUFBUUMsWUFBWTtnQkFDdEJuQixTQUFTYyxDQUFBQSxZQUFhQSxZQUFZUixXQUFXLEtBQUlHO1lBQ3JELEdBQUU7WUFDRixPQUFPO2dCQUNIVyxjQUFjRjtZQUNsQjtRQUNOO0lBQUMsR0FBRTtRQUFDWjtLQUFTO0lBQ1gscUJBQ0UsOERBQUNlO1FBQUtDLE1BQUs7a0JBQ1QsNEVBQUM5QixxREFBU0E7WUFBQytCLFdBQVdwQywrSkFBZW9DO3NCQUNuQyw0RUFBQ0M7Z0JBQUlDLElBQUc7O2tDQUNSLDhEQUFDRDt3QkFBSUMsSUFBRzs7MENBQ04sOERBQUM3QixnRUFBVUE7Z0NBQUM4QixTQUFROztvQ0FBSztvQ0FBZ0IzQixNQUFNNEIsUUFBUTs7Ozs7OzswQ0FDdkQsOERBQUMvQixnRUFBVUE7Z0NBQUM4QixTQUFROztvQ0FBSztvQ0FBRWhCO29DQUFlOzs7Ozs7OzBDQUMxQyw4REFBQ25CLHFEQUFNQTtnQ0FBQ21DLFNBQVE7Z0NBQVlFLE9BQU07Z0NBQVlDLFNBQVMsSUFBTWhCOzBDQUFnQjs7Ozs7Ozs7Ozs7O2tDQUVqRiw4REFBQ25CLHlEQUFHQTt3QkFBQ29DLElBQUk7NEJBQUVDLFVBQVU7d0JBQUU7a0NBQ3ZCLDRFQUFDekMscURBQU1BOzRCQUFDMEMsVUFBUzs0QkFBU0YsSUFBSTtnQ0FBRUYsT0FBTTs0QkFBTztzQ0FDM0MsNEVBQUNqQyw2REFBT0E7O2tEQUNKLDhEQUFDQyxnRUFBVUE7d0NBQUM4QixTQUFRO3dDQUFLTyxXQUFVO3dDQUFJQyxNQUFLO3dDQUFJSixJQUFJOzRDQUFFQyxVQUFVOzRDQUFHSSxnQkFBZTt3Q0FBTTtrREFBSTs7Ozs7O2tEQUc1Riw4REFBQ3ZDLGdFQUFVQTt3Q0FBQzhCLFNBQVE7d0NBQUtPLFdBQVU7d0NBQUlDLE1BQUs7d0NBQVFKLElBQUk7NENBQUVDLFVBQVU7NENBQUVJLGdCQUFlO3dDQUFPO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1uRyw4REFBQ1g7d0JBQUlDLElBQUc7a0NBQ1AzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBN0R3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sYXlvdXQudHN4PzU3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgJy4vZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQXBwQmFyLCBCdXR0b24sIENvbnRhaW5lciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XG4gIGNoaWxkcmVuLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59KSB7XG4gIGNvbnN0IFttb25leSwgc2V0TW9uZXldID0gdXNlU3RhdGU8bnVtYmVyPigoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkTW9uZXkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbmV5Jyk7XG4gICAgcmV0dXJuIHN0b3JlZE1vbmV5ID8gcGFyc2VGbG9hdChzdG9yZWRNb25leSkgOiAwO1xuICB9KTtcbiAgY29uc3QgW21vbmV5Z2VuLCBzZXRNb25leWdlbl0gPSB1c2VTdGF0ZTxudW1iZXI+KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRNb25leWdlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9uZXlnZW4nKTtcbiAgICByZXR1cm4gc3RvcmVkTW9uZXlnZW4gPyBwYXJzZUZsb2F0KHN0b3JlZE1vbmV5Z2VuKSA6IDA7XG4gIH0pO1xuICBjb25zdCB0aW1lc21vbmV5ID0gcGFyc2VGbG9hdCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVzbW9uZXknKSB8fCAnMCcpO1xuICBjb25zdCBbbW9uZXlQZXJTZWNvbmQsIHNldE1vbmV5UGVyU2Vjb25kXSA9IHVzZVN0YXRlPG51bWJlcj4oKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZE1vbmV5UGVyU2Vjb25kID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb25leXBlcnNlY29uZCcpO1xuICAgIHJldHVybiBzdG9yZWRNb25leVBlclNlY29uZCA/IHBhcnNlRmxvYXQoc3RvcmVkTW9uZXlQZXJTZWNvbmQpIDogMDtcbiAgfSk7XG4gIGNvbnN0IE9uQ2xpY2tNb25leSA9ICgpID0+IHtcbiAgICBzZXRNb25leShwcmV2TW9uZXkgPT4gcHJldk1vbmV5ICsgdGltZXNtb25leSlcbiAgfSBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vbmV5JywgSlNPTi5zdHJpbmdpZnkobW9uZXkpKTtcbn0sIFttb25leSx0aW1lc21vbmV5XSk7XG51c2VFZmZlY3QoKCkgPT4ge1xuICBpZihtb25leWdlbiA+PSAxKXtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHNldE1vbmV5KHByZXZNb25leSA9PiBwcmV2TW9uZXkgKyBtb25leWdlbiAvIDEwICp0aW1lc21vbmV5KVxuICAgICAgfSwxMDAwKVxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgfVxufX0sW21vbmV5Z2VuXSlcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtpbnRlci5jbGFzc05hbWV9PlxuICAgICAgICA8ZGl2IGlkPVwiYm9keVwiPlxuICAgICAgICA8ZGl2IGlkPVwiY3Vycm1vblwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkN1cnJlbnQgTW9uZXk6IHttb25leS50b0ZpeGVkKDEpfTwvVHlwb2dyYXBoeT4gXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+KHttb25leVBlclNlY29uZH0vcyk8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBPbkNsaWNrTW9uZXkoKX0+Q2xpY2sgZm9yIE1vbmV5PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBzeD17eyBjb2xvcjond2hpdGUnfX0+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiYVwiIGhyZWY9Jy8nIHN4PXt7IGZsZXhHcm93OiAxLCB0ZXh0RGVjb3JhdGlvbjonbm9uZSd9fSA+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJhXCIgaHJlZj0nL3JhbmsnIHN4PXt7IGZsZXhHcm93OiAxLHRleHREZWNvcmF0aW9uOidub25lJyx9fT5cbiAgICAgICAgICAgIFJhbmtcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPGRpdiBpZD1cImNoaWxkcmVuXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9odG1sPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwcEJhciIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIlJlYWN0IiwiQm94IiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJtb25leSIsInNldE1vbmV5Iiwic3RvcmVkTW9uZXkiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VGbG9hdCIsIm1vbmV5Z2VuIiwic2V0TW9uZXlnZW4iLCJzdG9yZWRNb25leWdlbiIsInRpbWVzbW9uZXkiLCJtb25leVBlclNlY29uZCIsInNldE1vbmV5UGVyU2Vjb25kIiwic3RvcmVkTW9uZXlQZXJTZWNvbmQiLCJPbkNsaWNrTW9uZXkiLCJwcmV2TW9uZXkiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaHRtbCIsImxhbmciLCJjbGFzc05hbWUiLCJkaXYiLCJpZCIsInZhcmlhbnQiLCJ0b0ZpeGVkIiwiY29sb3IiLCJvbkNsaWNrIiwic3giLCJmbGV4R3JvdyIsInBvc2l0aW9uIiwiY29tcG9uZW50IiwiaHJlZiIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/layout.tsx\n"));

/***/ })

});