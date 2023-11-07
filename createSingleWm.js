"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWaterMark = void 0;
var createWaterMark = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.container, container = _c === void 0 ? document.body : _c, _d = _b.width, width = _d === void 0 ? '300px' : _d, _e = _b.height, height = _e === void 0 ? '300px' : _e, _f = _b.textAlign, textAlign = _f === void 0 ? 'center' : _f, _g = _b.textBaseline, textBaseline = _g === void 0 ? 'middle' : _g, _h = _b.font, font = _h === void 0 ? "12px Microsoft Yahei" : _h, _j = _b.fillStyle, fillStyle = _j === void 0 ? 'rgba(185, 193, 202, 0.15)' : _j, _k = _b.text, text = _k === void 0 ? "" : _k, _l = _b.rotate, rotate = _l === void 0 ? -20 : _l, _m = _b.zIndex, zIndex = _m === void 0 ? 10000 : _m, _o = _b.top, top = _o === void 0 ? "0px" : _o, _p = _b.left, left = _p === void 0 ? "0px" : _p;
    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    var ctx = canvas.getContext("2d");
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font;
    ctx.fillStyle = fillStyle;
    ctx.rotate(rotate * Math.PI / 180);
    ctx.fillText(text, parseFloat(width) / 2, parseFloat(height) / 2);
    var base64Url = canvas.toDataURL();
    var __wm = document.querySelector(".__wm".concat(top, "_").concat(left));
    var watermarkDiv = __wm || document.createElement("div");
    var styleStr = "\n    position:fixed;\n    top:".concat(top, ";\n    left:").concat(left, ";\n    bottom:0;\n    right:0;\n    width:100%;\n    height:100%;\n    z-index:").concat(zIndex, ";\n    pointer-events:none;\n    background-repeat:repeat;\n    background-image:url('").concat(base64Url, "')\n  ");
    watermarkDiv.setAttribute('style', styleStr);
    watermarkDiv.classList.add('__wm');
    if (!__wm) {
        container.style.position = 'relative';
        container.insertBefore(watermarkDiv, container.firstChild);
    }
    return function () {
        watermarkDiv.remove();
    };
};
exports.createWaterMark = createWaterMark;
//# sourceMappingURL=createSingleWm.js.map