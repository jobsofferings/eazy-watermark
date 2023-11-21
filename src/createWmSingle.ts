export interface BaseCreateWmProps {
  container?: HTMLElement;
  width?: number;
  height?: number;
  zIndex?: number;
  opacity?: number;
}

export interface DefaultCreateWmProps extends BaseCreateWmProps {
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
  font?: string;
  fillStyle?: string | CanvasGradient | CanvasPattern;
  text?: string;
  rotate?: number;
  top?: string;
  left?: string;
  onCreated?: () => void;
  onDestory?: () => void;
}

export const defaultCreateWm = ({
  container = document.body,
  width = 300,
  height = 300,
  textAlign = 'center',
  textBaseline = 'middle',
  font = "12px Microsoft Yahei",
  fillStyle = 'rgb(185, 193, 202)',
  text = "",
  rotate = -20,
  zIndex = 10000,
  top = "0px",
  left = "0px",
  opacity = 0.3,
}: DefaultCreateWmProps = {}) => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', `${width}px`);
  canvas.setAttribute('height', `${height}px`);
  const ctx = canvas.getContext("2d")!;
  ctx.textAlign = textAlign as CanvasTextAlign;
  ctx.textBaseline = textBaseline as CanvasTextBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.globalAlpha = opacity ?? 0.3;
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

export interface CreateImageWmProps extends BaseCreateWmProps {
  rotate?: number;
  position?: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  positionOffset?: {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
  }
  image?: string;
  imageClass?: string;
}

export const createImageWm = async ({
  container = document.body,
  width = 300,
  height = 300,
  rotate = 0,
  zIndex = 10000,
  position = 'right-bottom',
  positionOffset = {
    right: '24px',
    bottom: '24px',
    left: '24px',
    top: '24px',
  },
  image = 'https://p26-passport.byteacctimg.com/img/user-avatar/ad3381e4ebb759a50f890c5fa0e2f440~300x300.awebp',
  imageClass = '',
  opacity = 0.3,
}: CreateImageWmProps = {}) => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', `${width}px`);
  canvas.setAttribute('height', `${height}px`);
  const ctx = canvas.getContext("2d")!;

  // 创建一个 Promise 来等待图像加载完成
  const loadImage = (url: string) => new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'
    img.src = url
    img.setAttribute('class', `watermark-image ${imageClass}`)
    img.width = width
    img.height = height
    img.onload = () => resolve(img);
    img.onerror = reject;
  });

  try {
    const img = await loadImage(image);

    ctx.save();
    ctx.globalAlpha = opacity ?? 0.3;
    ctx.imageSmoothingQuality = 'high';
    ctx.rotate(rotate * (Math.PI / 180));
    ctx.drawImage(img as HTMLImageElement, 0, 0, width, height);
    ctx.restore();

    const base64Url = canvas.toDataURL();
    const watermarkDiv = document.createElement("div");

    const positionStr = getWatermarkPosition(position, positionOffset);

    watermarkDiv.setAttribute('style', `
      position: fixed;
      z-index: ${zIndex};
      pointer-events: none;
      background-repeat: no-repeat;
      background-image: url('${base64Url}');
      width: ${width}px;
      height: ${height}px;
      ${positionStr}
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

const getWatermarkPosition = (
  position: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom',
  positionOffset: {
    top?: string
    left?: string
    bottom?: string
    right?: string
  },
) => {
  const [x, y] = position.split('-')
  let { top, left, bottom, right } = positionOffset
  right = x === 'right' ? right : undefined
  left = x === 'left' ? left : undefined
  top = y === 'top' ? top : undefined
  bottom = y === 'bottom' ? bottom : undefined
  return `
    ${top ? `top: ${top};` : ''}
    ${left ? `left: ${left};` : ''}
    ${bottom ? `bottom: ${bottom};` : ''}
    ${right ? `right: ${right};` : ''}
  `
}