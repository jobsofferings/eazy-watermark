const createWm = ({
  container = document.body,
  width = '300px',
  height = '300px',
  textAlign = 'center',
  textBaseline = 'middle',
  font = "12px Microsoft Yahei",
  fillStyle = 'rgba(185, 193, 202, 0.15)',
  text = "",
  rotate = -20,
  zIndex = 10000,
  top = "0px",
  left = "0px",
} = {}) => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  const ctx = canvas.getContext("2d")!;
  ctx.textAlign = textAlign as CanvasTextAlign;
  ctx.textBaseline = textBaseline as CanvasTextBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;

  ctx.rotate(rotate * Math.PI / 180);
  ctx.fillText(text, parseFloat(width) / 2, parseFloat(height) / 2);

  const base64Url = canvas.toDataURL();
  const __wm = document.querySelector(`.__wm${top}_${left}`);

  const watermarkDiv = __wm || document.createElement("div");
  const styleStr = `
    position:fixed;
    top:${top};
    left:${left};
    bottom:0;
    right:0;
    width:100%;
    height:100%;
    z-index:${zIndex};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${base64Url}')
  `;

  watermarkDiv.setAttribute('style', styleStr);
  watermarkDiv.classList.add('__wm');

  if (!__wm) {
    container.style.position = 'relative';
    container.insertBefore(watermarkDiv, container.firstChild);
  }

  return () => {
    watermarkDiv.remove()
  }
}

const KEY = '__EAZY_WATHERMARK_DESTORY__';

const createDestoryFN = (fn: () => void) => {
  // @ts-ignore
  window[KEY] = () => {
    fn();
    // @ts-ignore
    delete window[KEY];
  }
}

const emitDestoryFN = () => {
  // @ts-ignore
  if (typeof window[KEY] === 'function') {
    // @ts-ignore
    window[KEY]();
  }
}

const createWaterMark = ({
  container = document.body,
  width = '300px',
  height = '300px',
  textAlign = 'center',
  textBaseline = 'middle',
  font = "13px Microsoft Yahei",
  fillStyle = 'rgba(185, 193, 202, 0.2)',
  text = '',
  rotate = -20,
  zIndex = 10000,
} = {}) => {
  emitDestoryFN();

  const callback = createWm({
    container,
    width,
    height,
    textAlign,
    textBaseline,
    font,
    fillStyle,
    text,
    rotate,
    zIndex,
  })

  const callback2 = createWm({
    container,
    width,
    height,
    textAlign,
    textBaseline,
    font,
    fillStyle,
    text,
    rotate,
    zIndex,
    top: '150px',
    left: '150px',
  })

  createDestoryFN(() => {
    callback()
    callback2()
  })

  return () => {
    emitDestoryFN();
  }
}

export {
  createWaterMark
}