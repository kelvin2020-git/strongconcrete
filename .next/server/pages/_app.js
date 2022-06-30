"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "next/Link"
const Link_namespaceObject = require("next/Link");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
;// CONCATENATED MODULE: ./public/logo.webp
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.514b019c.webp","height":124,"width":124,"blurDataURL":"data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABYFTbtpLz/wdG7hKAOa2I4NKAJA4tGBOJDhGRCACBgHoGAdX3NgrMfd0eE4kxLhaC3ClKM1OEuedkseIHAFZQOCBUAAAAUAIAnQEqCAAIAAJAOCWwAnS6ASYAPMA7TxooAPsZwgjLJjrPplQHOlfZzflWAyMZwmP0anJ+SMO1WPiR2ikW2r/jSPmLdgA90UibJe4no7yuHAAA"});
;// CONCATENATED MODULE: ./components/Navbar.js





function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "navbar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#inicio",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "logo",
                        src: logo,
                        alt: "logo",
                        width: "120px",
                        height: "120px"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "navbar3 lista__item--outer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "lista--enlace",
                                    href: "#inicio",
                                    children: "INICIOS"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "lista lista--inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "lista__item--inner",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: " lista--enlace",
                                                href: "#servicios",
                                                children: "SERVICIOS"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "#nosotros",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "navbar3",
                                children: "NOSOTROS"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "#proyecto",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "navbar3",
                                children: "PROYECTOS"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "#contacto",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "navbar3",
                                children: "CONTACTOS"
                            })
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "INICIO"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Lideres en acabados!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "About - STRONG CONCRETE"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "Lideres en acabados!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://myclothingstore.com/about"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675], () => (__webpack_exec__(728)));
module.exports = __webpack_exports__;

})();