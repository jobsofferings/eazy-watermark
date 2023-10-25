export const createWmSingle = ({
  container = document.body,
  width = 300,
  height = 300,
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
  canvas.setAttribute('width', `${width}px`);
  canvas.setAttribute('height', `${height}px`);
  const ctx = canvas.getContext("2d")!;
  ctx.textAlign = textAlign as CanvasTextAlign;
  ctx.textBaseline = textBaseline as CanvasTextBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;

  ctx.rotate(rotate * Math.PI / 180);
  ctx.fillText(text, Number(width) / 2, Number(height) / 2);

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