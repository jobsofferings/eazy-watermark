export interface BaseCreateWmProps {
    container?: HTMLElement;
    width?: number;
    height?: number;
    zIndex?: number;
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
}
export declare const defaultCreateWm: ({ container, width, height, textAlign, textBaseline, font, fillStyle, text, rotate, zIndex, top, left, }?: DefaultCreateWmProps) => () => void;
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
    };
    image?: string;
    imageClass?: string;
}
export declare const createImageWm: ({ container, width, height, rotate, zIndex, position, positionOffset, image, imageClass, }?: CreateImageWmProps) => Promise<() => void>;
