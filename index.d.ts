import { createImageWm, DefaultCreateWmProps } from "./createWmSingle";
interface CreateWmProps extends DefaultCreateWmProps {
    repeat?: number;
}
declare const createWm: ({ container, width, height, textAlign, textBaseline, font, fillStyle, text, rotate, zIndex, repeat, }?: CreateWmProps) => () => void;
declare const createWmSingle: ({ container, width, height, textAlign, textBaseline, font, fillStyle, text, rotate, zIndex, }?: DefaultCreateWmProps) => () => void;
export { createWm, createWmSingle, createImageWm, CreateWmProps, DefaultCreateWmProps, };
