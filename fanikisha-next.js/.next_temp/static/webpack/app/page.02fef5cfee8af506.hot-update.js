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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _barrel_optimize_names_RiDashboardLine_RiFileList3Line_RiLogoutBoxRLine_RiUser3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=RiDashboardLine,RiFileList3Line,RiLogoutBoxRLine,RiUser3Line!=!react-icons/ri */ \"(app-pages-browser)/./node_modules/react-icons/ri/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [showSignOutDropdown, setShowSignOutDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const navItems = [\n        {\n            name: \"Overview\",\n            icon: _barrel_optimize_names_RiDashboardLine_RiFileList3Line_RiLogoutBoxRLine_RiUser3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiDashboardLine,\n            path: \"/overview\"\n        },\n        {\n            name: \"Milk records\",\n            icon: _barrel_optimize_names_RiDashboardLine_RiFileList3Line_RiLogoutBoxRLine_RiUser3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiFileList3Line,\n            path: \"/milk-records\"\n        },\n        {\n            name: \"farmersaccounts\",\n            icon: _barrel_optimize_names_RiDashboardLine_RiFileList3Line_RiLogoutBoxRLine_RiUser3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiUser3Line,\n            path: \"#farmersaccounts\"\n        }\n    ];\n    const handleSignOut = ()=>{\n        console.log(\"User signed out\");\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-500 text-white h-screen w-64 flex flex-col items-center font-worksans relative:\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: \"/image/fanikisha.png\",\n                    alt: \"Fanikisha Logo\",\n                    width: 200,\n                    height: 40,\n                    className: \"object-contain\"\n                }, void 0, false, {\n                    fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex-grow flex flex-col justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"space-y-8 text-center w-full text-base\",\n                    children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: item.path,\n                                className: \"px-5 py-3 flex items-center justify-start \".concat(pathname === item.path ? \"border-l-4 border-white bg-blue-600\" : \"\", \" hover:font-bold hover:underline text-xl\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center w-10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                            size: 48,\n                                            className: \"mr-3\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"ml-3\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, undefined)\n                        }, item.name, false, {\n                            fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-10 w-full relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full flex items-center justify-center text-white hover:text-gray-200 py-3\",\n                        onClick: ()=>setShowSignOutDropdown(!showSignOutDropdown),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center w-10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiDashboardLine_RiFileList3Line_RiLogoutBoxRLine_RiUser3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiLogoutBoxRLine, {\n                                    size: 40,\n                                    className: \"mr-3\"\n                                }, void 0, false, {\n                                    fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-3 text-xl\",\n                                children: \"Sign Out\"\n                            }, void 0, false, {\n                                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    showSignOutDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-full left-0 w-full bg-white text-blue-500 rounded-t-md shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"p-3 text-center\",\n                                children: \"Are you sure you want to sign out?\"\n                            }, void 0, false, {\n                                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-around p-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600\",\n                                        onClick: handleSignOut,\n                                        children: \"Yes\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-gray-300 text-blue-500 px-4 py-2 rounded hover:bg-gray-400\",\n                                        onClick: ()=>setShowSignOutDropdown(false),\n                                        children: \"No\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/student/Inganji-Frontend/fanikisha-next.js/src/app/components/Sidebar/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"1JkzQRyaZWBXvp4wtxiNvLD6Tk0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ1g7QUFDRTtBQUMwQjtBQUN3QztBQUVqRyxNQUFNVSxVQUFVOztJQUNkLE1BQU1DLFdBQVdQLDREQUFXQTtJQUM1QixNQUFNUSxTQUFTUCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDUSxxQkFBcUJDLHVCQUF1QixHQUFHYiwrQ0FBUUEsQ0FBQztJQUUvRCxNQUFNYyxXQUFXO1FBQ2Y7WUFBRUMsTUFBTTtZQUFZQyxNQUFNWCwrSUFBZUE7WUFBRVksTUFBTTtRQUFZO1FBQzdEO1lBQUVGLE1BQU07WUFBZ0JDLE1BQU1WLCtJQUFlQTtZQUFFVyxNQUFNO1FBQWdCO1FBQ3JFO1lBQUVGLE1BQU07WUFBbUJDLE1BQU1ULDJJQUFXQTtZQUFFVSxNQUFNO1FBQW1CO0tBQ3hFO0lBRUQsTUFBTUMsZ0JBQWdCO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUM7UUFDWlQsT0FBT1UsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDckIsa0RBQUtBO29CQUNKc0IsS0FBSTtvQkFDSkMsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkosV0FBVTs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNLO2dCQUFJTCxXQUFVOzBCQUNiLDRFQUFDTTtvQkFBR04sV0FBVTs4QkFDWFQsU0FBU2dCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDYiw4REFBQ0M7NEJBQW1CVCxXQUFVO3NDQUM1Qiw0RUFBQ3RCLGlEQUFJQTtnQ0FDSGdDLE1BQU1GLEtBQUtkLElBQUk7Z0NBQ2ZNLFdBQVcsNkNBRVYsT0FEQ2IsYUFBYXFCLEtBQUtkLElBQUksR0FBRyx3Q0FBd0MsSUFDbEU7O2tEQUVELDhEQUFDSzt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ1EsS0FBS2YsSUFBSTs0Q0FBQ2tCLE1BQU07NENBQUlYLFdBQVU7Ozs7Ozs7Ozs7O2tEQUVqQyw4REFBQ1k7d0NBQUtaLFdBQVU7a0RBQVFRLEtBQUtoQixJQUFJOzs7Ozs7Ozs7Ozs7MkJBVjVCZ0IsS0FBS2hCLElBQUk7Ozs7Ozs7Ozs7Ozs7OzswQkFnQnhCLDhEQUFDTztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNhO3dCQUNDYixXQUFVO3dCQUNWYyxTQUFTLElBQU14Qix1QkFBdUIsQ0FBQ0Q7OzBDQUV2Qyw4REFBQ1U7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNmLGdKQUFnQkE7b0NBQUMwQixNQUFNO29DQUFJWCxXQUFVOzs7Ozs7Ozs7OzswQ0FFeEMsOERBQUNZO2dDQUFLWixXQUFVOzBDQUFlOzs7Ozs7Ozs7Ozs7b0JBRWhDWCxxQ0FDQyw4REFBQ1U7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDZTtnQ0FBRWYsV0FBVTswQ0FBa0I7Ozs7OzswQ0FDL0IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2E7d0NBQ0NiLFdBQVU7d0NBQ1ZjLFNBQVNuQjtrREFDVjs7Ozs7O2tEQUdELDhEQUFDa0I7d0NBQ0NiLFdBQVU7d0NBQ1ZjLFNBQVMsSUFBTXhCLHVCQUF1QjtrREFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBOUVNSjs7UUFDYU4sd0RBQVdBO1FBQ2JDLHNEQUFTQTs7O0tBRnBCSztBQWdGTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU2lkZWJhci9pbmRleC50c3g/MjJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBSaURhc2hib2FyZExpbmUsIFJpRmlsZUxpc3QzTGluZSwgUmlVc2VyM0xpbmUsIFJpTG9nb3V0Qm94UkxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzaG93U2lnbk91dERyb3Bkb3duLCBzZXRTaG93U2lnbk91dERyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICB7IG5hbWU6ICdPdmVydmlldycsIGljb246IFJpRGFzaGJvYXJkTGluZSwgcGF0aDogJy9vdmVydmlldycgfSxcbiAgICB7IG5hbWU6ICdNaWxrIHJlY29yZHMnLCBpY29uOiBSaUZpbGVMaXN0M0xpbmUsIHBhdGg6ICcvbWlsay1yZWNvcmRzJyB9LFxuICAgIHsgbmFtZTogJ2Zhcm1lcnNhY2NvdW50cycsIGljb246IFJpVXNlcjNMaW5lLCBwYXRoOiAnI2Zhcm1lcnNhY2NvdW50cycgfSxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVTaWduT3V0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdVc2VyIHNpZ25lZCBvdXQnKTtcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgaC1zY3JlZW4gdy02NCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBmb250LXdvcmtzYW5zIHJlbGF0aXZlOlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMFwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvaW1hZ2UvZmFuaWtpc2hhLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiRmFuaWtpc2hhIExvZ29cIlxuICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgaGVpZ2h0PXs0MH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTggdGV4dC1jZW50ZXIgdy1mdWxsIHRleHQtYmFzZVwiPlxuICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17aXRlbS5wYXRofVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTUgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0ICR7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSA9PT0gaXRlbS5wYXRoID8gJ2JvcmRlci1sLTQgYm9yZGVyLXdoaXRlIGJnLWJsdWUtNjAwJyA6ICcnXG4gICAgICAgICAgICAgICAgfSBob3Zlcjpmb250LWJvbGQgaG92ZXI6dW5kZXJsaW5lIHRleHQteGxgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTEwXCI+XG4gICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIHNpemU9ezQ4fSBjbGFzc05hbWU9XCJtci0zXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0zXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgdy1mdWxsIHJlbGF0aXZlXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktMjAwIHB5LTNcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTaWduT3V0RHJvcGRvd24oIXNob3dTaWduT3V0RHJvcGRvd24pfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTEwXCI+XG4gICAgICAgICAgICA8UmlMb2dvdXRCb3hSTGluZSBzaXplPXs0MH0gY2xhc3NOYW1lPVwibXItM1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMyB0ZXh0LXhsXCI+U2lnbiBPdXQ8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7c2hvd1NpZ25PdXREcm9wZG93biAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tZnVsbCBsZWZ0LTAgdy1mdWxsIGJnLXdoaXRlIHRleHQtYmx1ZS01MDAgcm91bmRlZC10LW1kIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC0zIHRleHQtY2VudGVyXCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHNpZ24gb3V0PzwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZCBwLTNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCB0ZXh0LWJsdWUtNTAwIHB4LTQgcHktMiByb3VuZGVkIGhvdmVyOmJnLWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U2lnbk91dERyb3Bkb3duKGZhbHNlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJJbWFnZSIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwiUmlEYXNoYm9hcmRMaW5lIiwiUmlGaWxlTGlzdDNMaW5lIiwiUmlVc2VyM0xpbmUiLCJSaUxvZ291dEJveFJMaW5lIiwiU2lkZWJhciIsInBhdGhuYW1lIiwicm91dGVyIiwic2hvd1NpZ25PdXREcm9wZG93biIsInNldFNob3dTaWduT3V0RHJvcGRvd24iLCJuYXZJdGVtcyIsIm5hbWUiLCJpY29uIiwicGF0aCIsImhhbmRsZVNpZ25PdXQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibmF2IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwic2l6ZSIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Sidebar/index.tsx\n"));

/***/ })

});