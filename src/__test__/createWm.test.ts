import 'jest-canvas-mock';
import { createWm, createWmSingle } from '../index';

describe('createWm', () => {
  it('should create watermark with default options', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const destroy = createWm({ container });
    const watermark = document.querySelector('.__wm');
    expect(watermark).toBeTruthy();
    destroy();
    container.remove();
  });
});

describe('createWmSingle', () => {
  it('should create a single watermark with default options', () => {
    const container = document.createElement('div'); // 创建一个模拟的容器
    document.body.appendChild(container);
    const destroy = createWmSingle({ container });
    const watermark = document.querySelector('.__wm');
    expect(watermark).toBeTruthy();
    destroy();
    container.remove();
  });
});
