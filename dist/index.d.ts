import React, { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

type svgProps = RefAttributes<SVGSVGElement> & Partial<SVGProps<SVGSVGElement>>;
interface ShapeProps extends svgProps {
    size?: number;
    noise?: boolean;
    styles?: {
        [key: string]: string;
    };
}
type ShapeType = ForwardRefExoticComponent<ShapeProps>;

declare const shapes: {
    star: ShapeType[];
    flower: ShapeType[];
    ellipse: ShapeType[];
    wheel: ShapeType[];
    moon: ShapeType[];
    misc: ShapeType[];
    triangle: ShapeType[];
    polygon: ShapeType[];
    rectangle: ShapeType[];
    number: ShapeType[];
};
type shapeTypes = keyof typeof shapes;
type componentId = {
    shapeType: shapeTypes;
    index: number;
};
declare const getRandomShape: ({ type, onlyId, }?: {
    type?: "number" | "ellipse" | "polygon" | "star" | "flower" | "wheel" | "moon" | "misc" | "triangle" | "rectangle" | undefined;
    onlyId?: boolean | undefined;
}) => ShapeType | componentId;

interface ShapeOptions extends BaseShapeOptions {
    type?: shapeTypes;
}
interface BaseShapeOptions extends ShapeProps {
    index?: number;
    random?: boolean;
}
declare const Coolshape: ForwardRefExoticComponent<ShapeOptions>;
declare const Star: React.ForwardRefExoticComponent<BaseShapeOptions>;
declare const Ellipse: React.ForwardRefExoticComponent<BaseShapeOptions>;
declare const Flower: React.ForwardRefExoticComponent<BaseShapeOptions>;
declare const Misc: React.ForwardRefExoticComponent<BaseShapeOptions>;
declare const Moon: React.ForwardRefExoticComponent<BaseShapeOptions>;
declare const Triangle: React.ForwardRefExoticComponent<BaseShapeOptions>;
declare const Rectangle: React.ForwardRefExoticComponent<BaseShapeOptions>;
declare const Polygon: React.ForwardRefExoticComponent<BaseShapeOptions>;
declare const Number: React.ForwardRefExoticComponent<BaseShapeOptions>;

export { Coolshape, Ellipse, Flower, Misc, Moon, Number, Polygon, Rectangle, Star, Triangle, getRandomShape, type shapeTypes, shapes };
