export interface DefaultCreateWmProps {
  container?: HTMLElement;
  width?: number;
  height?: number;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
  font?: string;
  fillStyle?: string | CanvasGradient | CanvasPattern | undefined;
  text?: string;
  rotate?: number;
  zIndex?: number;
  top?: string;
  left?: string;
}

export const defaultCreateWm = ({
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
}: DefaultCreateWmProps = {}) => {
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

export interface CreateWmImageProps extends DefaultCreateWmProps {
  image: string;
}

export const createImageWm = async ({
  container = document.body,
  width = 300,
  height = 300,
  rotate = 0,
  zIndex = 10000,
  top = "0px",
  left = "0px",
  bottom = "0px",
  right = "0px",
  image = 'https://p26-passport.byteacctimg.com/img/user-avatar/ad3381e4ebb759a50f890c5fa0e2f440~80x80.awebp',
} = {}) => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', `${width}px`);
  canvas.setAttribute('height', `${height}px`);
  const ctx = canvas.getContext("2d")!;

  // 创建一个 Promise 来等待图像加载完成
  const loadImage = (url: string) => new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    img.width = width;
    img.height = height;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });

  try {
    const img = await loadImage(image);

    ctx.save();
    ctx.globalAlpha = 0.3;
    ctx.imageSmoothingQuality = 'high';
    ctx.rotate(rotate * (Math.PI / 180));
    ctx.drawImage(img as HTMLImageElement, 0, 0, width, height);
    ctx.restore();

    const base64Url = canvas.toDataURL();
    const watermarkDiv = document.createElement("div");
    watermarkDiv.setAttribute('style', `
      position: fixed;
      z-index: ${zIndex};
      pointer-events: none;
      background-repeat: no-repeat;
      background-image: url('${base64Url}');
      width: ${width}px;
      height: ${height}px;
      top: ${top};
      left: ${left};
      bottom: ${bottom};
      right: ${right};
    `);
    watermarkDiv.classList.add('watermark');

    if (!document.querySelector('.watermark')) {
      container.style.position = 'relative';
      container.insertBefore(watermarkDiv, container.firstChild);
    }

    return () => {
      const existingWatermark = document.querySelector('.watermark');
      if (existingWatermark) {
        existingWatermark.remove();
      }
    };
  } catch (error) {
    console.error("Error loading image:", error);
    return () => {};
  }
};
