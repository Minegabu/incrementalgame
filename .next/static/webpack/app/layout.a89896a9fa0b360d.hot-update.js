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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-client)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-client)/./src/app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"(app-client)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(app-client)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const storedMoney = window.localStorage.getItem(\"money\");\n        return storedMoney ? parseFloat(storedMoney) : 0;\n    });\n    const timesmoney = parseFloat(window.localStorage.getItem(\"timesmoney\") || \"0\");\n    const OnClickMoney = ()=>{\n        setMoney((prevMoney)=>prevMoney + timesmoney);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default().className),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"currmon\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"Current Money: \",\n                                    money.toFixed(1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                variant: \"contained\",\n                                color: \"secondary\",\n                                onClick: ()=>OnClickMoney(),\n                                children: \"Click for Money\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        sx: {\n                            flexGrow: 1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            position: \"static\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        variant: \"h6\",\n                                        component: \"a\",\n                                        href: \"/\",\n                                        sx: {\n                                            flexGrow: 1,\n                                            textDecoration: \"none\"\n                                        },\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        variant: \"h6\",\n                                        component: \"a\",\n                                        href: \"/rank\",\n                                        sx: {\n                                            flexGrow: 1,\n                                            textDecoration: \"none\",\n                                            colour: \"white\"\n                                        },\n                                        children: \"Rank\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"children\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"oXzemFGgfY7iw+dnG0ouEUjwI8w=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1NQTtBQUxnQjtBQUVzQjtBQUVjO0FBRTNCO0FBQ0s7QUFDUTtBQUNNO0FBSW5DLFNBQVNTLFdBQVcsS0FJbEM7UUFKa0MsRUFDakNDLFFBQVEsRUFHVCxHQUprQzs7SUFLakMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFTO1FBQ3pDLE1BQU1ZLGNBQWNDLE9BQU9DLGFBQWFDLFFBQVE7UUFDaEQsT0FBT0gsY0FBY0ksV0FBV0osZUFBZTtJQUNqRDtJQUNBLE1BQU1LLGFBQWFELFdBQVdILE9BQU9DLGFBQWFDLFFBQVEsaUJBQWlCO0lBQzNFLE1BQU1HLGVBQWU7UUFDbkJQLFNBQVNRLENBQUFBLFlBQWFBLFlBQVlGO0lBQ3BDO0lBQ0EscUJBQ0UsOERBQUNHO1FBQUtDLE1BQUs7a0JBQ1QsNEVBQUNsQixxREFBU0E7WUFBQ21CLFdBQVd2QiwrSkFBZXVCO3NCQUNuQyw0RUFBQ0M7Z0JBQUlDLElBQUc7O2tDQUNSLDhEQUFDRDt3QkFBSUMsSUFBRzs7MENBQ04sOERBQUNDOztvQ0FBRztvQ0FBZ0JmLE1BQU1nQixRQUFROzs7Ozs7OzBDQUNsQyw4REFBQ3hCLHFEQUFNQTtnQ0FBQ3lCLFNBQVE7Z0NBQVlDLE9BQU07Z0NBQVlDLFNBQVMsSUFBTVg7MENBQWdCOzs7Ozs7Ozs7Ozs7a0NBRWpGLDhEQUFDYix5REFBR0E7d0JBQUN5QixJQUFJOzRCQUFFQyxVQUFVO3dCQUFFO2tDQUN2Qiw0RUFBQzlCLHFEQUFNQTs0QkFBQytCLFVBQVM7c0NBQ2YsNEVBQUMxQiw2REFBT0E7O2tEQUNKLDhEQUFDQyxnRUFBVUE7d0NBQUNvQixTQUFRO3dDQUFLTSxXQUFVO3dDQUFJQyxNQUFLO3dDQUFJSixJQUFJOzRDQUFFQyxVQUFVOzRDQUFHSSxnQkFBZTt3Q0FBTTtrREFBSTs7Ozs7O2tEQUc1Riw4REFBQzVCLGdFQUFVQTt3Q0FBQ29CLFNBQVE7d0NBQUtNLFdBQVU7d0NBQUlDLE1BQUs7d0NBQVFKLElBQUk7NENBQUVDLFVBQVU7NENBQUVJLGdCQUFlOzRDQUFRQyxRQUFPO3dDQUFPO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1sSCw4REFBQ2I7d0JBQUlDLElBQUc7a0NBQ1BmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0F4Q3dCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xheW91dC50c3g/NTdhOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCAnLi9nbG9iYWxzLmNzcydcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBBcHBCYXIsIEJ1dHRvbiwgQ29udGFpbmVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn0pIHtcbiAgY29uc3QgW21vbmV5LCBzZXRNb25leV0gPSB1c2VTdGF0ZTxudW1iZXI+KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRNb25leSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9uZXknKTtcbiAgICByZXR1cm4gc3RvcmVkTW9uZXkgPyBwYXJzZUZsb2F0KHN0b3JlZE1vbmV5KSA6IDA7XG4gIH0pO1xuICBjb25zdCB0aW1lc21vbmV5ID0gcGFyc2VGbG9hdCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVzbW9uZXknKSB8fCAnMCcpO1xuICBjb25zdCBPbkNsaWNrTW9uZXkgPSAoKSA9PiB7XG4gICAgc2V0TW9uZXkocHJldk1vbmV5ID0+IHByZXZNb25leSArIHRpbWVzbW9uZXkpXG4gIH0gXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17aW50ZXIuY2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdiBpZD1cImJvZHlcIj5cbiAgICAgICAgPGRpdiBpZD1cImN1cnJtb25cIj5cbiAgICAgICAgICA8aDE+Q3VycmVudCBNb25leToge21vbmV5LnRvRml4ZWQoMSl9PC9oMT5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IE9uQ2xpY2tNb25leSgpfT5DbGljayBmb3IgTW9uZXk8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxIH19PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImFcIiBocmVmPScvJyBzeD17eyBmbGV4R3JvdzogMSwgdGV4dERlY29yYXRpb246J25vbmUnfX0gPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiYVwiIGhyZWY9Jy9yYW5rJyBzeD17eyBmbGV4R3JvdzogMSx0ZXh0RGVjb3JhdGlvbjonbm9uZScsIGNvbG91cjond2hpdGUnfX0+XG4gICAgICAgICAgICBSYW5rXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxkaXYgaWQ9XCJjaGlsZHJlblwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwidXNlU3RhdGUiLCJBcHBCYXIiLCJCdXR0b24iLCJDb250YWluZXIiLCJSZWFjdCIsIkJveCIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwibW9uZXkiLCJzZXRNb25leSIsInN0b3JlZE1vbmV5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlRmxvYXQiLCJ0aW1lc21vbmV5IiwiT25DbGlja01vbmV5IiwicHJldk1vbmV5IiwiaHRtbCIsImxhbmciLCJjbGFzc05hbWUiLCJkaXYiLCJpZCIsImgxIiwidG9GaXhlZCIsInZhcmlhbnQiLCJjb2xvciIsIm9uQ2xpY2siLCJzeCIsImZsZXhHcm93IiwicG9zaXRpb24iLCJjb21wb25lbnQiLCJocmVmIiwidGV4dERlY29yYXRpb24iLCJjb2xvdXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/layout.tsx\n"));

/***/ })

});