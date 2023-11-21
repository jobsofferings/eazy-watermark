import { createImageWm, defaultCreateWm, DefaultCreateWmProps } from "./createWmSingle";
import { generateUniqueId } from "./utils";

interface DestroyFunctionsProps {
  [x: string]: () => void
}

let destroyFunctions: DestroyFunctionsProps = {}
const createDestoryFN = (id: string, fn: () => void) => {
  const key = `__EAZY_WATHERMARK_DESTORY_${id}__`

  destroyFunctions[key] = () => {
    fn()
    delete destroyFunctions[key]
  }
}

const emitDestoryFN = (id?: string) => {
  if (id) {
    const key = `__EAZY_WATHERMARK_DESTORY_${id}__`;
    if (destroyFunctions[key]) {
      destroyFunctions[key]();
    }
  } else {
    Object.values(destroyFunctions).forEach(fn => fn());
    destroyFunctions = {};
  }
};

const removeAll = () => {
  emitDestoryFN();
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
  onCreated,
  onDestory,
}: CreateWmProps = {}) => {

  const instanceId = generateUniqueId();

  emitDestoryFN(instanceId);

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

  createDestoryFN(instanceId, () => {
    callbackFnList.forEach(fn => fn());
    onCreated && onCreated();
  });

  return () => {
    emitDestoryFN(instanceId);
    onDestory && onDestory();
  };
}

const createWmSingle = ({
  container = document.body,
  width = 300,
  height = 300,
  textAlign = 'center',
  textBaseline = 'middle',
  font = "13px Microsoft Yahei",
  fillStyle = 'rgba(185, 193, 202)',
  text = '',
  rotate = -20,
  zIndex = 10000,
  onCreated,
  onDestory,
  opacity = 0.3,
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
    opacity,
  })

  onCreated && onCreated();

  return () => {
    destroy();
    onDestory && onDestory();
  }
}

export {
  createWm,
  createWmSingle,
  createImageWm,
  removeAll,
  CreateWmProps,
  DefaultCreateWmProps,
}