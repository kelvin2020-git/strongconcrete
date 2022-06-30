"use strict";
(() => {
var exports = {};
exports.id = 802;
exports.ids = [802];
exports.modules = {

/***/ 582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 860:
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ 993:
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ body)
/* harmony export */ });
function body(req, res) {
    const express = __webpack_require__(860);
    const cors = __webpack_require__(582);
    const app = express();
    app.use(cors());
    app.use(express.json());
    const { google  } = __webpack_require__(993);
    const { OAuth2  } = google.auth;
    const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";
    const oauth2Client = new OAuth2(process.env.GMAIL_CLIENTID, process.env.GMAIL_CLIENTSECRET, OAUTH_PLAYGROUND);
    oauth2Client.setCredentials({
        refresh_token: process.env.GMAIL_RFRESHTOKEN
    });
    const accessToken = oauth2Client.getAccessToken();
    let nodemailer = __webpack_require__(184);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            type: "OAuth2",
            user: process.env.GMAIL_ACC,
            clientId: process.env.GMAIL_CLIENTID,
            clientSecret: process.env.GMAIL_CLIENTSECRET,
            refreshToken: process.env.GMAIL_RFRESHTOKEN,
            accessToken: process.env.GMAIL_ACCESSTOKEN,
            accessToken
        }
    });
    const mailData = {
        from: req.body.email,
        to: "kelvincastillo429@gmail.com",
        subject: `Mensaje Desde Strong Concrete:  ${req.body.name}` + ` ${req.body.apellido}`,
        text: req.body.message + " | Numero telefono: " + req.body.telefono + " | Enviado De: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Numero telefono: ${req.body.telefono}</p><p>Enviado De: ${req.body.email}</p>`
    };
    transporter.sendMail(mailData, function(err, info) {
        if (err) {
            console.log(err);
            res.send("error" + JSON.stringify(err));
        } else {
            console.log("Email Enviado");
            res.send("sucesso");
        }
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(283));
module.exports = __webpack_exports__;

})();