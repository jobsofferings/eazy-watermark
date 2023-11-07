"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImageWm = exports.defaultCreateWm = void 0;
var defaultCreateWm = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.container, container = _c === void 0 ? document.body : _c, _d = _b.width, width = _d === void 0 ? 300 : _d, _e = _b.height, height = _e === void 0 ? 300 : _e, _f = _b.textAlign, textAlign = _f === void 0 ? 'center' : _f, _g = _b.textBaseline, textBaseline = _g === void 0 ? 'middle' : _g, _h = _b.font, font = _h === void 0 ? "12px Microsoft Yahei" : _h, _j = _b.fillStyle, fillStyle = _j === void 0 ? 'rgba(185, 193, 202, 0.15)' : _j, _k = _b.text, text = _k === void 0 ? "" : _k, _l = _b.rotate, rotate = _l === void 0 ? -20 : _l, _m = _b.zIndex, zIndex = _m === void 0 ? 10000 : _m, _o = _b.top, top = _o === void 0 ? "0px" : _o, _p = _b.left, left = _p === void 0 ? "0px" : _p;
    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', "".concat(width, "px"));
    canvas.setAttribute('height', "".concat(height, "px"));
    var ctx = canvas.getContext("2d");
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font;
    ctx.fillStyle = fillStyle;
    ctx.rotate(rotate * Math.PI / 180);
    ctx.fillText(text, Number(width) / 2, Number(height) / 2);
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
exports.defaultCreateWm = defaultCreateWm;
var createImageWm = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.container, container = _c === void 0 ? document.body : _c, _d = _b.width, width = _d === void 0 ? 300 : _d, _e = _b.height, height = _e === void 0 ? 300 : _e, _f = _b.rotate, rotate = _f === void 0 ? 0 : _f, _g = _b.zIndex, zIndex = _g === void 0 ? 10000 : _g, _h = _b.position, position = _h === void 0 ? 'right-bottom' : _h, _j = _b.positionOffset, positionOffset = _j === void 0 ? {
        right: '24px',
        bottom: '24px',
        left: '24px',
        top: '24px',
    } : _j, _k = _b.image, image = _k === void 0 ? 'https://p26-passport.byteacctimg.com/img/user-avatar/ad3381e4ebb759a50f890c5fa0e2f440~300x300.awebp' : _k, _l = _b.imageClass, imageClass = _l === void 0 ? '' : _l;
    return __awaiter(void 0, void 0, void 0, function () {
        var canvas, ctx, loadImage, img, base64Url, watermarkDiv, positionStr, error_1;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0:
                    canvas = document.createElement('canvas');
                    canvas.setAttribute('width', "".concat(width, "px"));
                    canvas.setAttribute('height', "".concat(height, "px"));
                    ctx = canvas.getContext("2d");
                    loadImage = function (url) { return new Promise(function (resolve, reject) {
                        var img = new Image();
                        img.crossOrigin = 'anonymous';
                        img.src = url;
                        img.setAttribute('class', "watermark-image ".concat(imageClass));
                        img.width = width;
                        img.height = height;
                        img.onload = function () { return resolve(img); };
                        img.onerror = reject;
                    }); };
                    _m.label = 1;
                case 1:
                    _m.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, loadImage(image)];
                case 2:
                    img = _m.sent();
                    ctx.save();
                    ctx.globalAlpha = 0.3;
                    ctx.imageSmoothingQuality = 'high';
                    ctx.rotate(rotate * (Math.PI / 180));
                    ctx.drawImage(img, 0, 0, width, height);
                    ctx.restore();
                    base64Url = canvas.toDataURL();
                    watermarkDiv = document.createElement("div");
                    positionStr = getWatermarkPosition(position, positionOffset);
                    watermarkDiv.setAttribute('style', "\n      position: fixed;\n      z-index: ".concat(zIndex, ";\n      pointer-events: none;\n      background-repeat: no-repeat;\n      background-image: url('").concat(base64Url, "');\n      width: ").concat(width, "px;\n      height: ").concat(height, "px;\n      ").concat(positionStr, "\n    "));
                    watermarkDiv.classList.add('watermark');
                    if (!document.querySelector('.watermark')) {
                        container.style.position = 'relative';
                        container.insertBefore(watermarkDiv, container.firstChild);
                    }
                    return [2 /*return*/, function () {
                            var existingWatermark = document.querySelector('.watermark');
                            if (existingWatermark) {
                                existingWatermark.remove();
                            }
                        }];
                case 3:
                    error_1 = _m.sent();
                    console.error("Error loading image:", error_1);
                    return [2 /*return*/, function () { }];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.createImageWm = createImageWm;
var getWatermarkPosition = function (position, positionOffset) {
    var _a = __read(position.split('-'), 2), x = _a[0], y = _a[1];
    var top = positionOffset.top, left = positionOffset.left, bottom = positionOffset.bottom, right = positionOffset.right;
    right = x === 'right' ? right : undefined;
    left = x === 'left' ? left : undefined;
    top = y === 'top' ? top : undefined;
    bottom = y === 'bottom' ? bottom : undefined;
    return "\n    ".concat(top ? "top: ".concat(top, ";") : '', "\n    ").concat(left ? "left: ".concat(left, ";") : '', "\n    ").concat(bottom ? "bottom: ".concat(bottom, ";") : '', "\n    ").concat(right ? "right: ".concat(right, ";") : '', "\n  ");
};
//# sourceMappingURL=createWmSingle.js.map