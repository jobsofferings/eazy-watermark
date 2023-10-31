import { createImageWm, defaultCreateWm, DefaultCreateWmProps } from "./createWmSingle";

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

interface CreateWmProps extends DefaultCreateWmProps {
  repeat?: number;
}

const createWm = ({
  container = document.body,
  width = 300,
  height = 300,
  textAlign = 'center',
  textBaseline = 'middle',
  font = '13px Microsoft Yahei',
  fillStyle = 'rgba(185, 193, 202, 0.2)',
  text = '',
  rotate = -20,
  zIndex = 10000,
  repeat = 1,
}: CreateWmProps = {}) => {
  emitDestoryFN()

  const callbackFnList = new Array(repeat).fill(true).map((item, index) => {
    return defaultCreateWm({
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
      top: `${index * (height / repeat)}px`,
      left: `${index * (width / repeat)}px`,
    })
  })

  createDestoryFN(() => {
    callbackFnList.map((fn) => {
      fn()
    })
  })

  return () => {
    emitDestoryFN()
  }
}

const createWmSingle = ({
  container = document.body,
  width = 300,
  height = 300,
  textAlign = 'center',
  textBaseline = 'middle',
  font = "13px Microsoft Yahei",
  fillStyle = 'rgba(185, 193, 202, 0.2)',
  text = '',
  rotate = -20,
  zIndex = 10000,
}: DefaultCreateWmProps = {}) => {

  const destroy = defaultCreateWm({
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

  return () => {
    destroy();
  }
}

export {
  createWm,
  createWmSingle,
  createImageWm,
  CreateWmProps,
  DefaultCreateWmProps,
}