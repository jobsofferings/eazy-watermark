"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest-canvas-mock");
var index_1 = require("../index");
describe('createWm', function () {
    it('should create watermark with default options', function () {
        var container = document.createElement('div');
        document.body.appendChild(container);
        var destroy = (0, index_1.createWm)({ container: container });
        var watermark = document.querySelector('.__wm');
        expect(watermark).toBeTruthy();
        destroy();
        container.remove();
    });
});
describe('createWmSingle', function () {
    it('should create a single watermark with default options', function () {
        var container = document.createElement('div'); // 创建一个模拟的容器
        document.body.appendChild(container);
        var destroy = (0, index_1.createWmSingle)({ container: container });
        var watermark = document.querySelector('.__wm');
        expect(watermark).toBeTruthy();
        destroy();
        container.remove();
    });
});
//# sourceMappingURL=createWm.test.js.map