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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-client)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-client)/./src/app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const storedMoney = window.localStorage.getItem(\"money\");\n        return storedMoney ? parseFloat(storedMoney) : 0;\n    });\n    const timesmoney = parseFloat(window.localStorage.getItem(\"timesmoney\") || \"0\");\n    const OnClickMoney = ()=>{\n        setMoney((prevMoney)=>prevMoney + timesmoney);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default().className),\n            sx: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"currmon\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"Current Money: \",\n                                    money.toFixed(1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                variant: \"contained\",\n                                color: \"secondary\",\n                                onClick: ()=>OnClickMoney(),\n                                children: \"Click for Money\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                        sx: {\n                            flexGrow: 1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            position: \"static\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Toolbar, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconButton, {\n                                        size: \"large\",\n                                        edge: \"start\",\n                                        color: \"inherit\",\n                                        \"aria-label\": \"menu\",\n                                        sx: {\n                                            mr: 2\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuIcon, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {\n                                        variant: \"h6\",\n                                        component: \"div\",\n                                        sx: {\n                                            flexGrow: 1\n                                        },\n                                        children: \"News\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        color: \"inherit\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"oXzemFGgfY7iw+dnG0ouEUjwI8w=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQU1NQTtBQUxnQjtBQUVzQjtBQUVjO0FBSTNDLFNBQVNLLFdBQVcsS0FJbEM7UUFKa0MsRUFDakNDLFFBQVEsRUFHVCxHQUprQzs7SUFLakMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFTO1FBQ3pDLE1BQU1RLGNBQWNDLE9BQU9DLGFBQWFDLFFBQVE7UUFDaEQsT0FBT0gsY0FBY0ksV0FBV0osZUFBZTtJQUNqRDtJQUNBLE1BQU1LLGFBQWFELFdBQVdILE9BQU9DLGFBQWFDLFFBQVEsaUJBQWlCO0lBQzNFLE1BQU1HLGVBQWU7UUFDbkJQLFNBQVNRLENBQUFBLFlBQWFBLFlBQVlGO0lBQ3BDO0lBQ0EscUJBQ0UsOERBQUNHO1FBQUtDLE1BQUs7a0JBQ1QsNEVBQUNkLHFEQUFTQTtZQUFDZSxXQUFXbkIsK0pBQWVtQjtZQUFFQyxJQUFJO2dCQUFDQyxTQUFTO2dCQUFRQyxnQkFBZTtnQkFBU0MsWUFBVztZQUFRO3NCQUN0Ryw0RUFBQ0M7Z0JBQUlDLElBQUc7O2tDQUNSLDhEQUFDRDt3QkFBSUMsSUFBRzs7MENBQ04sOERBQUNDOztvQ0FBRztvQ0FBZ0JuQixNQUFNb0IsUUFBUTs7Ozs7OzswQ0FDbEMsOERBQUN4QixxREFBTUE7Z0NBQUN5QixTQUFRO2dDQUFZQyxPQUFNO2dDQUFZQyxTQUFTLElBQU1mOzBDQUFnQjs7Ozs7Ozs7Ozs7O2tDQUUvRSw4REFBQ2dCO3dCQUFJWCxJQUFJOzRCQUFFWSxVQUFVO3dCQUFFO2tDQUN6Qiw0RUFBQzlCLHFEQUFNQTs0QkFBQytCLFVBQVM7c0NBQ2YsNEVBQUNDOztrREFDQyw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xSLE9BQU07d0NBQ05TLGNBQVc7d0NBQ1hsQixJQUFJOzRDQUFFbUIsSUFBSTt3Q0FBRTtrREFFWiw0RUFBQ0M7Ozs7Ozs7Ozs7a0RBRUgsOERBQUNDO3dDQUFXYixTQUFRO3dDQUFLYyxXQUFVO3dDQUFNdEIsSUFBSTs0Q0FBRVksVUFBVTt3Q0FBRTtrREFBRzs7Ozs7O2tEQUc5RCw4REFBQzdCLHFEQUFNQTt3Q0FBQzBCLE9BQU07a0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBSXpCdkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Q7R0E3Q3dCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xheW91dC50c3g/NTdhOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCAnLi9nbG9iYWxzLmNzcydcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBBcHBCYXIsIEJ1dHRvbiwgQ29udGFpbmVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XG4gIGNoaWxkcmVuLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59KSB7XG4gIGNvbnN0IFttb25leSwgc2V0TW9uZXldID0gdXNlU3RhdGU8bnVtYmVyPigoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkTW9uZXkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbmV5Jyk7XG4gICAgcmV0dXJuIHN0b3JlZE1vbmV5ID8gcGFyc2VGbG9hdChzdG9yZWRNb25leSkgOiAwO1xuICB9KTtcbiAgY29uc3QgdGltZXNtb25leSA9IHBhcnNlRmxvYXQod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lc21vbmV5JykgfHwgJzAnKTtcbiAgY29uc3QgT25DbGlja01vbmV5ID0gKCkgPT4ge1xuICAgIHNldE1vbmV5KHByZXZNb25leSA9PiBwcmV2TW9uZXkgKyB0aW1lc21vbmV5KVxuICB9IFxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0gc3g9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLGFsaWduSXRlbXM6J2NlbnRlcid9fT5cbiAgICAgICAgPGRpdiBpZD1cImJvZHlcIj5cbiAgICAgICAgPGRpdiBpZD1cImN1cnJtb25cIj5cbiAgICAgICAgICA8aDE+Q3VycmVudCBNb25leToge21vbmV5LnRvRml4ZWQoMSl9PC9oMT5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IE9uQ2xpY2tNb25leSgpfT5DbGljayBmb3IgTW9uZXk8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXG4gICAgICAgICAgICBzeD17eyBtcjogMiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICAgIE5ld3NcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L0JveD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwidXNlU3RhdGUiLCJBcHBCYXIiLCJCdXR0b24iLCJDb250YWluZXIiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJtb25leSIsInNldE1vbmV5Iiwic3RvcmVkTW9uZXkiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VGbG9hdCIsInRpbWVzbW9uZXkiLCJPbkNsaWNrTW9uZXkiLCJwcmV2TW9uZXkiLCJodG1sIiwibGFuZyIsImNsYXNzTmFtZSIsInN4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImRpdiIsImlkIiwiaDEiLCJ0b0ZpeGVkIiwidmFyaWFudCIsImNvbG9yIiwib25DbGljayIsIkJveCIsImZsZXhHcm93IiwicG9zaXRpb24iLCJUb29sYmFyIiwiSWNvbkJ1dHRvbiIsInNpemUiLCJlZGdlIiwiYXJpYS1sYWJlbCIsIm1yIiwiTWVudUljb24iLCJUeXBvZ3JhcGh5IiwiY29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/layout.tsx\n"));

/***/ })

});