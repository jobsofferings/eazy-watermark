"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImageWm = exports.createWmSingle = exports.createWm = void 0;
var createWmSingle_1 = require("./createWmSingle");
Object.defineProperty(exports, "createImageWm", { enumerable: true, get: function () { return createWmSingle_1.createImageWm; } });
var KEY = '__EAZY_WATHERMARK_DESTORY__';
var createDestoryFN = function (fn) {
    // @ts-ignore
    window[KEY] = function () {
        fn();
        // @ts-ignore
        delete window[KEY];
    };
};
var emitDestoryFN = function () {
    // @ts-ignore
    if (typeof window[KEY] === 'function') {
        // @ts-ignore
        window[KEY]();
    }
};
var createWm = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.container, container = _c === void 0 ? document.body : _c, _d = _b.width, width = _d === void 0 ? 300 : _d, _e = _b.height, height = _e === void 0 ? 300 : _e, _f = _b.textAlign, textAlign = _f === void 0 ? 'center' : _f, _g = _b.textBaseline, textBaseline = _g === void 0 ? 'middle' : _g, _h = _b.font, font = _h === void 0 ? '13px Microsoft Yahei' : _h, _j = _b.fillStyle, fillStyle = _j === void 0 ? 'rgba(185, 193, 202, 0.2)' : _j, _k = _b.text, text = _k === void 0 ? '' : _k, _l = _b.rotate, rotate = _l === void 0 ? -20 : _l, _m = _b.zIndex, zIndex = _m === void 0 ? 10000 : _m, _o = _b.repeat, repeat = _o === void 0 ? 1 : _o;
    emitDestoryFN();
    var callbackFnList = new Array(repeat).fill(true).map(function (item, index) {
        return (0, createWmSingle_1.defaultCreateWm)({
            container: container,
            width: width,
            height: height,
            textAlign: textAlign,
            textBaseline: textBaseline,
            font: font,
            fillStyle: fillStyle,
            text: text,
            rotate: rotate,
            zIndex: zIndex,
            top: "".concat(index * (height / repeat), "px"),
            left: "".concat(index * (width / repeat), "px"),
        });
    });
    createDestoryFN(function () {
        callbackFnList.map(function (fn) {
            fn();
        });
    });
    return function () {
        emitDestoryFN();
    };
};
exports.createWm = createWm;
var createWmSingle = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.container, container = _c === void 0 ? document.body : _c, _d = _b.width, width = _d === void 0 ? 300 : _d, _e = _b.height, height = _e === void 0 ? 300 : _e, _f = _b.textAlign, textAlign = _f === void 0 ? 'center' : _f, _g = _b.textBaseline, textBaseline = _g === void 0 ? 'middle' : _g, _h = _b.font, font = _h === void 0 ? "13px Microsoft Yahei" : _h, _j = _b.fillStyle, fillStyle = _j === void 0 ? 'rgba(185, 193, 202, 0.2)' : _j, _k = _b.text, text = _k === void 0 ? '' : _k, _l = _b.rotate, rotate = _l === void 0 ? -20 : _l, _m = _b.zIndex, zIndex = _m === void 0 ? 10000 : _m;
    var destroy = (0, createWmSingle_1.defaultCreateWm)({
        container: container,
        width: width,
        height: height,
        textAlign: textAlign,
        textBaseline: textBaseline,
        font: font,
        fillStyle: fillStyle,
        text: text,
        rotate: rotate,
        zIndex: zIndex,
    });
    return function () {
        destroy();
    };
};
exports.createWmSingle = createWmSingle;
//# sourceMappingURL=index.js.map