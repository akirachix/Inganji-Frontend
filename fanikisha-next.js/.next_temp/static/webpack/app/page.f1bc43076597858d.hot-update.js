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

/***/ "(app-pages-browser)/./src/app/components/Sidebar/index.tsx":
/*!**********************************************!*\
  !*** ./src/app/components/Sidebar/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _barrel_optimize_names_RiDashboardLine_RiFileList3Line_RiLogoutBoxRLine_RiUser3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=RiDashboardLine,RiFileList3Line,RiLogoutBoxRLine,RiUser3Line!=!react-icons/ri */ \"(app-pages-browser)/./node_modules/react-icons/ri/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [showSignOutDropdown, setShowSignOutDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const navItems = [\n        {\n            name: \"Overview\",\n            icon: _barrel_optimize_names_RiDashboardLine_RiFileList3Line_RiLogoutBoxRLine_RiUser3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiDashboardLine,\n            path: \"/overview\"\n        },\n        {\n            name: \"Milk records\",\n            icon: _barrel_optimize_names_RiDashboardLine_RiFileList3Line_RiLogoutBoxRLine_RiUser3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiFileList3Line,\n            path: \"/milk-records\"\n        },\n        {\n            name: \"\",\n            icon: _barrel_optimize_names_RiDashboardLine_RiFileList3Line_RiLogoutBoxRLine_RiUser3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiUser3Line,\n            path: \"#farmersaccounts\"\n        }\n    ];\n    const handleSignOut = ()=>{\n        console.log(\"User signed out\");\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-500 text-white h-screen w-64 flex flex-col items-center font-worksans relative:\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: \"/image/fanikisha.png\",\n                    alt: \"Fanikisha Logo\",\n                    width: 200,\n                    height: 40,\n                    className: \"object-contain\"\n                }, void 0, false, {\n                    fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex-grow flex flex-col justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"space-y-8 text-center w-full text-base\",\n                    children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: item.path,\n                                className: \"px-5 py-3 flex items-center justify-start \".concat(pathname === item.path ? \"border-l-4 border-white bg-blue-600\" : \"\", \" hover:font-bold hover:underline text-xl\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center w-10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                            size: 48,\n                                            className: \"mr-3\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"ml-3\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, undefined)\n                        }, item.name, false, {\n                            fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-10 w-full relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full flex items-center justify-center text-white hover:text-gray-200 py-3\",\n                        onClick: ()=>setShowSignOutDropdown(!showSignOutDropdown),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center w-10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiDashboardLine_RiFileList3Line_RiLogoutBoxRLine_RiUser3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiLogoutBoxRLine, {\n                                    size: 40,\n                                    className: \"mr-3\"\n                                }, void 0, false, {\n                                    fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-3 text-xl\",\n                                children: \"Sign Out\"\n                            }, void 0, false, {\n                                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    showSignOutDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-full left-0 w-full bg-white text-blue-500 rounded-t-md shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"p-3 text-center\",\n                                children: \"Are you sure you want to sign out?\"\n                            }, void 0, false, {\n                                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-around p-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600\",\n                                        onClick: handleSignOut,\n                                        children: \"Yes\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-gray-300 text-blue-500 px-4 py-2 rounded hover:bg-gray-400\",\n                                        onClick: ()=>setShowSignOutDropdown(false),\n                                        children: \"No\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"1JkzQRyaZWBXvp4wtxiNvLD6Tk0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ1g7QUFDRTtBQUMwQjtBQUN3QztBQUVqRyxNQUFNVSxVQUFVOztJQUNkLE1BQU1DLFdBQVdQLDREQUFXQTtJQUM1QixNQUFNUSxTQUFTUCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDUSxxQkFBcUJDLHVCQUF1QixHQUFHYiwrQ0FBUUEsQ0FBQztJQUUvRCxNQUFNYyxXQUFXO1FBQ2Y7WUFBRUMsTUFBTTtZQUFZQyxNQUFNWCwrSUFBZUE7WUFBRVksTUFBTTtRQUFZO1FBQzdEO1lBQUVGLE1BQU07WUFBZ0JDLE1BQU1WLCtJQUFlQTtZQUFFVyxNQUFNO1FBQWdCO1FBQ3JFO1lBQUVGLE1BQU07WUFBSUMsTUFBTVQsMklBQVdBO1lBQUVVLE1BQU07UUFBbUI7S0FDekQ7SUFFRCxNQUFNQyxnQkFBZ0I7UUFDcEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaVCxPQUFPVSxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNyQixrREFBS0E7b0JBQ0pzQixLQUFJO29CQUNKQyxLQUFJO29CQUNKQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSSixXQUFVOzs7Ozs7Ozs7OzswQkFHZCw4REFBQ0s7Z0JBQUlMLFdBQVU7MEJBQ2IsNEVBQUNNO29CQUFHTixXQUFVOzhCQUNYVCxTQUFTZ0IsR0FBRyxDQUFDLENBQUNDLHFCQUNiLDhEQUFDQzs0QkFBbUJULFdBQVU7c0NBQzVCLDRFQUFDdEIsaURBQUlBO2dDQUNIZ0MsTUFBTUYsS0FBS2QsSUFBSTtnQ0FDZk0sV0FBVyw2Q0FFVixPQURDYixhQUFhcUIsS0FBS2QsSUFBSSxHQUFHLHdDQUF3QyxJQUNsRTs7a0RBRUQsOERBQUNLO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDUSxLQUFLZixJQUFJOzRDQUFDa0IsTUFBTTs0Q0FBSVgsV0FBVTs7Ozs7Ozs7Ozs7a0RBRWpDLDhEQUFDWTt3Q0FBS1osV0FBVTtrREFBUVEsS0FBS2hCLElBQUk7Ozs7Ozs7Ozs7OzsyQkFWNUJnQixLQUFLaEIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OzBCQWdCeEIsOERBQUNPO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2E7d0JBQ0NiLFdBQVU7d0JBQ1ZjLFNBQVMsSUFBTXhCLHVCQUF1QixDQUFDRDs7MENBRXZDLDhEQUFDVTtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ2YsZ0pBQWdCQTtvQ0FBQzBCLE1BQU07b0NBQUlYLFdBQVU7Ozs7Ozs7Ozs7OzBDQUV4Qyw4REFBQ1k7Z0NBQUtaLFdBQVU7MENBQWU7Ozs7Ozs7Ozs7OztvQkFFaENYLHFDQUNDLDhEQUFDVTt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNlO2dDQUFFZixXQUFVOzBDQUFrQjs7Ozs7OzBDQUMvQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDYTt3Q0FDQ2IsV0FBVTt3Q0FDVmMsU0FBU25CO2tEQUNWOzs7Ozs7a0RBR0QsOERBQUNrQjt3Q0FDQ2IsV0FBVTt3Q0FDVmMsU0FBUyxJQUFNeEIsdUJBQXVCO2tEQUN2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0E5RU1KOztRQUNhTix3REFBV0E7UUFDYkMsc0RBQVNBOzs7S0FGcEJLO0FBZ0ZOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LnRzeD8yMmVhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IFJpRGFzaGJvYXJkTGluZSwgUmlGaWxlTGlzdDNMaW5lLCBSaVVzZXIzTGluZSwgUmlMb2dvdXRCb3hSTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Nob3dTaWduT3V0RHJvcGRvd24sIHNldFNob3dTaWduT3V0RHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gW1xuICAgIHsgbmFtZTogJ092ZXJ2aWV3JywgaWNvbjogUmlEYXNoYm9hcmRMaW5lLCBwYXRoOiAnL292ZXJ2aWV3JyB9LFxuICAgIHsgbmFtZTogJ01pbGsgcmVjb3JkcycsIGljb246IFJpRmlsZUxpc3QzTGluZSwgcGF0aDogJy9taWxrLXJlY29yZHMnIH0sXG4gICAgeyBuYW1lOiAnJywgaWNvbjogUmlVc2VyM0xpbmUsIHBhdGg6ICcjZmFybWVyc2FjY291bnRzJyB9LFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1VzZXIgc2lnbmVkIG91dCcpO1xuICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBoLXNjcmVlbiB3LTY0IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGZvbnQtd29ya3NhbnMgcmVsYXRpdmU6XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEwXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9pbWFnZS9mYW5pa2lzaGEucG5nXCJcbiAgICAgICAgICBhbHQ9XCJGYW5pa2lzaGEgTG9nb1wiXG4gICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktOCB0ZXh0LWNlbnRlciB3LWZ1bGwgdGV4dC1iYXNlXCI+XG4gICAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnBhdGh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNSBweS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgJHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lID09PSBpdGVtLnBhdGggPyAnYm9yZGVyLWwtNCBib3JkZXItd2hpdGUgYmctYmx1ZS02MDAnIDogJydcbiAgICAgICAgICAgICAgICB9IGhvdmVyOmZvbnQtYm9sZCBob3Zlcjp1bmRlcmxpbmUgdGV4dC14bGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMTBcIj5cbiAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gc2l6ZT17NDh9IGNsYXNzTmFtZT1cIm1yLTNcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTNcIj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMCB3LWZ1bGwgcmVsYXRpdmVcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ3JheS0yMDAgcHktM1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1NpZ25PdXREcm9wZG93bighc2hvd1NpZ25PdXREcm9wZG93bil9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMTBcIj5cbiAgICAgICAgICAgIDxSaUxvZ291dEJveFJMaW5lIHNpemU9ezQwfSBjbGFzc05hbWU9XCJtci0zXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0zIHRleHQteGxcIj5TaWduIE91dDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHtzaG93U2lnbk91dERyb3Bkb3duICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS1mdWxsIGxlZnQtMCB3LWZ1bGwgYmctd2hpdGUgdGV4dC1ibHVlLTUwMCByb3VuZGVkLXQtbWQgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTMgdGV4dC1jZW50ZXJcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc2lnbiBvdXQ/PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kIHAtM1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnbk91dH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtYmx1ZS01MDAgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctZ3JheS00MDBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTaWduT3V0RHJvcGRvd24oZmFsc2UpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkltYWdlIiwidXNlUGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJSaURhc2hib2FyZExpbmUiLCJSaUZpbGVMaXN0M0xpbmUiLCJSaVVzZXIzTGluZSIsIlJpTG9nb3V0Qm94UkxpbmUiLCJTaWRlYmFyIiwicGF0aG5hbWUiLCJyb3V0ZXIiLCJzaG93U2lnbk91dERyb3Bkb3duIiwic2V0U2hvd1NpZ25PdXREcm9wZG93biIsIm5hdkl0ZW1zIiwibmFtZSIsImljb24iLCJwYXRoIiwiaGFuZGxlU2lnbk91dCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYXYiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsImhyZWYiLCJzaXplIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Sidebar/index.tsx\n"));

/***/ })

});