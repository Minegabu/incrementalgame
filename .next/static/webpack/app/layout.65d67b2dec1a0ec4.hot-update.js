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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-client)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-client)/./src/app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n        const storedMoney = window.localStorage.getItem(\"money\");\n        return storedMoney ? parseFloat(storedMoney) : 0;\n    });\n    const timesmoney = parseFloat(window.localStorage.getItem(\"timesmoney\") || \"0\");\n    const OnClickMoney = ()=>{\n        setMoney((prevMoney)=>prevMoney + timesmoney);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default().className),\n            sx: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"currmon\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"Current Money: \",\n                                    money.toFixed(1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                variant: \"contained\",\n                                color: \"secondary\",\n                                onClick: ()=>OnClickMoney(),\n                                children: \"Click for Money\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        id: \"navbar\",\n                        sx: {\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            size: \"100px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                children: \"Money Generators\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/rank\",\n                                children: \"Rank\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Desktop\\\\incrementalgame-master\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"oXzemFGgfY7iw+dnG0ouEUjwI8w=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTU1BO0FBTGdCO0FBRXNCO0FBQ2hCO0FBQzhCO0FBSTNDLFNBQVNNLFdBQVcsS0FJbEM7UUFKa0MsRUFDakNDLFFBQVEsRUFHVCxHQUprQzs7SUFLakMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFTO1FBQ3pDLE1BQU1TLGNBQWNDLE9BQU9DLGFBQWFDLFFBQVE7UUFDaEQsT0FBT0gsY0FBY0ksV0FBV0osZUFBZTtJQUNqRDtJQUNBLE1BQU1LLGFBQWFELFdBQVdILE9BQU9DLGFBQWFDLFFBQVEsaUJBQWlCO0lBQzNFLE1BQU1HLGVBQWU7UUFDbkJQLFNBQVNRLENBQUFBLFlBQWFBLFlBQVlGO0lBQ3BDO0lBQ0EscUJBQ0UsOERBQUNHO1FBQUtDLE1BQUs7a0JBQ1QsNEVBQUNkLHFEQUFTQTtZQUFDZSxXQUFXcEIsK0pBQWVvQjtZQUFFQyxJQUFJO2dCQUFDQyxTQUFTO2dCQUFRQyxnQkFBZTtnQkFBU0MsWUFBVztZQUFRO3NCQUN0Ryw0RUFBQ0M7Z0JBQUlDLElBQUc7O2tDQUNSLDhEQUFDRDt3QkFBSUMsSUFBRzs7MENBQ04sOERBQUNDOztvQ0FBRztvQ0FBZ0JuQixNQUFNb0IsUUFBUTs7Ozs7OzswQ0FDbEMsOERBQUN4QixxREFBTUE7Z0NBQUN5QixTQUFRO2dDQUFZQyxPQUFNO2dDQUFZQyxTQUFTLElBQU1mOzBDQUFnQjs7Ozs7Ozs7Ozs7O2tDQUUvRSw4REFBQ2IscURBQU1BO3dCQUFDdUIsSUFBRzt3QkFBU0wsSUFBSTs0QkFBQ0MsU0FBUzs0QkFBUUMsZ0JBQWU7NEJBQVNDLFlBQVc7NEJBQVNRLE1BQUs7d0JBQU87OzBDQUM5Riw4REFBQzlCLGtEQUFJQTtnQ0FBQytCLE1BQUs7MENBQUk7Ozs7OzswQ0FDZiw4REFBQy9CLGtEQUFJQTtnQ0FBQytCLE1BQUs7MENBQVE7Ozs7Ozs7Ozs7OztvQkFFdEIxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVDtHQTlCd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGF5b3V0LnRzeD81N2E5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0ICcuL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEFwcEJhciwgQnV0dG9uLCBDb250YWluZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn0pIHtcbiAgY29uc3QgW21vbmV5LCBzZXRNb25leV0gPSB1c2VTdGF0ZTxudW1iZXI+KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRNb25leSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9uZXknKTtcbiAgICByZXR1cm4gc3RvcmVkTW9uZXkgPyBwYXJzZUZsb2F0KHN0b3JlZE1vbmV5KSA6IDA7XG4gIH0pO1xuICBjb25zdCB0aW1lc21vbmV5ID0gcGFyc2VGbG9hdCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVzbW9uZXknKSB8fCAnMCcpO1xuICBjb25zdCBPbkNsaWNrTW9uZXkgPSAoKSA9PiB7XG4gICAgc2V0TW9uZXkocHJldk1vbmV5ID0+IHByZXZNb25leSArIHRpbWVzbW9uZXkpXG4gIH0gXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17aW50ZXIuY2xhc3NOYW1lfSBzeD17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsYWxpZ25JdGVtczonY2VudGVyJ319PlxuICAgICAgICA8ZGl2IGlkPVwiYm9keVwiPlxuICAgICAgICA8ZGl2IGlkPVwiY3Vycm1vblwiPlxuICAgICAgICAgIDxoMT5DdXJyZW50IE1vbmV5OiB7bW9uZXkudG9GaXhlZCgxKX08L2gxPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gT25DbGlja01vbmV5KCl9PkNsaWNrIGZvciBNb25leTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFwcEJhciBpZD1cIm5hdmJhclwiIHN4PXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxhbGlnbkl0ZW1zOidjZW50ZXInLHNpemU6JzEwMHB4J319PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Nb25leSBHZW5lcmF0b3JzPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yYW5rXCI+UmFuazwvTGluaz5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsInVzZVN0YXRlIiwiTGluayIsIkFwcEJhciIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsIm1vbmV5Iiwic2V0TW9uZXkiLCJzdG9yZWRNb25leSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUZsb2F0IiwidGltZXNtb25leSIsIk9uQ2xpY2tNb25leSIsInByZXZNb25leSIsImh0bWwiLCJsYW5nIiwiY2xhc3NOYW1lIiwic3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGl2IiwiaWQiLCJoMSIsInRvRml4ZWQiLCJ2YXJpYW50IiwiY29sb3IiLCJvbkNsaWNrIiwic2l6ZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/layout.tsx\n"));

/***/ })

});