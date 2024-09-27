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

/***/ "(app-pages-browser)/./src/app/hooks/useFetchFarmers.ts":
/*!******************************************!*\
  !*** ./src/app/hooks/useFetchFarmers.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useFetchFarmers: function() { return /* binding */ useFetchFarmers; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_fetchFarmers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/fetchFarmers */ \"(app-pages-browser)/./utils/fetchFarmers.ts\");\n\n\nconst useFetchFarmers = ()=>{\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const fetchFarmers = async ()=>{\n            try {\n                const result = await (0,_utils_fetchFarmers__WEBPACK_IMPORTED_MODULE_1__.displayFarmers)(\"https://fanikisha-3beb7fcefffe.herokuapp.com/api/farmers\");\n                if (Array.isArray(result)) {\n                    setData(result);\n                } else {\n                    throw new Error(\"Fetched data is not an array\");\n                }\n            } catch (err) {\n                if (err instanceof Error) {\n                    setError(err);\n                } else {\n                    setError(new Error(\"An unknown error occurred\"));\n                }\n            } finally{\n                setIsLoading(false);\n            }\n        };\n        fetchFarmers();\n    }, []);\n    return {\n        data,\n        isLoading,\n        error\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9va3MvdXNlRmV0Y2hGYXJtZXJzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFFaUI7QUFFdEQsTUFBTUcsa0JBQWtCO0lBQzdCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQWU7SUFFakRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsZUFBZTtZQUNuQixJQUFJO2dCQUNGLE1BQU1DLFNBQVMsTUFBTVQsbUVBQWNBLENBQ2pDO2dCQUlGLElBQUlVLE1BQU1DLE9BQU8sQ0FBQ0YsU0FBUztvQkFDekJOLFFBQVFNO2dCQUNWLE9BQU87b0JBQ0wsTUFBTSxJQUFJRyxNQUFNO2dCQUNsQjtZQUNGLEVBQUUsT0FBT0MsS0FBSztnQkFDWixJQUFJQSxlQUFlRCxPQUFPO29CQUN4QkwsU0FBU007Z0JBQ1gsT0FBTztvQkFDTE4sU0FBUyxJQUFJSyxNQUFNO2dCQUNyQjtZQUNGLFNBQVU7Z0JBQ1JQLGFBQWE7WUFDZjtRQUNGO1FBRUFHO0lBQ0YsR0FBRyxFQUFFO0lBRUwsT0FBTztRQUFFTjtRQUFNRTtRQUFXRTtJQUFNO0FBQ2xDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob29rcy91c2VGZXRjaEZhcm1lcnMudHM/YjBiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYXJtZXIgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdHlwZXNcIjtcbmltcG9ydCB7IGRpc3BsYXlGYXJtZXJzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2ZldGNoRmFybWVyc1wiO1xuXG5leHBvcnQgY29uc3QgdXNlRmV0Y2hGYXJtZXJzID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxGYXJtZXJbXT4oW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8RXJyb3IgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRmFybWVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRpc3BsYXlGYXJtZXJzKFxuICAgICAgICAgIFwiaHR0cHM6Ly9mYW5pa2lzaGEtM2JlYjdmY2VmZmZlLmhlcm9rdWFwcC5jb20vYXBpL2Zhcm1lcnNcIlxuICAgICAgICApO1xuXG4gICAgICBcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgIHNldERhdGEocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGZXRjaGVkIGRhdGEgaXMgbm90IGFuIGFycmF5XCIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvcihuZXcgRXJyb3IoXCJBbiB1bmtub3duIGVycm9yIG9jY3VycmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hGYXJtZXJzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4geyBkYXRhLCBpc0xvYWRpbmcsIGVycm9yIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGlzcGxheUZhcm1lcnMiLCJ1c2VGZXRjaEZhcm1lcnMiLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaEZhcm1lcnMiLCJyZXN1bHQiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/hooks/useFetchFarmers.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./utils/fetchFarmers.ts":
/*!*******************************!*\
  !*** ./utils/fetchFarmers.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayFarmers: function() { return /* binding */ displayFarmers; }\n/* harmony export */ });\nconst displayFarmers = async function(endpoint) {\n    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    try {\n        const response = await fetch(endpoint, options);\n        if (!response.ok) {\n            throw new Error(\"Error: \".concat(response.status, \" \").concat(response.statusText));\n        }\n        return await response.json();\n    } catch (error) {\n        throw new Error(\"Failed to fetch data\");\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL2ZldGNoRmFybWVycy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsaUJBQWlCLGVBQU9DO1FBQWtCQywyRUFBVSxDQUFDO0lBQ2hFLElBQUk7UUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU1ILFVBQVVDO1FBQ3ZDLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO1lBQ2QsTUFBTSxJQUFJQyxNQUFNLFVBQTZCSCxPQUFuQkEsU0FBU0ksTUFBTSxFQUFDLEtBQXVCLE9BQXBCSixTQUFTSyxVQUFVO1FBQ3BFO1FBQ0EsT0FBTyxNQUFNTCxTQUFTTSxJQUFJO0lBQzlCLEVBQUUsT0FBT0MsT0FBTztRQUNaLE1BQU0sSUFBSUosTUFBTTtJQUNwQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hGYXJtZXJzLnRzPzMzNWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRpc3BsYXlGYXJtZXJzID0gYXN5bmMgKGVuZHBvaW50OiBzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwgb3B0aW9ucyk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJyk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZGlzcGxheUZhcm1lcnMiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/fetchFarmers.ts\n"));

/***/ })

});