import React, { forwardRef } from 'react';
import SLIDER, { Settings } from 'react-slick';
import classnames from 'classnames';
import "../../css/slider.css"
import { TElements } from '../../types/interface';
interface IProps extends Settings {
    /** 화살표를 출력함*/
    className?: string;
    displayArrow?: boolean;
    children: TElements
}

export type TJDsliderProp = IProps

export const Slider: React.ForwardRefRenderFunction<SLIDER, TJDsliderProp> = ({
    children,
    className,
    displayArrow = false,
    draggable = false,
    ...props
}, ref) => {
    const JDslideDefaultSettings = {
        className: 'JDslider',
        dotsClass: 'JDslider__dots',
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        slideCount: 1,
        nextArrow: undefined,
        prevArrow: undefined,
        draggable,
    };

    const classes = classnames(JDslideDefaultSettings.className, className, {
        'JDslider--unDisplayArrow': displayArrow === false
    });

    JDslideDefaultSettings.className = classes;

    return (
        <SLIDER ref={ref} {...JDslideDefaultSettings} {...props}>
            {children}
        </SLIDER>
    );
};

export const Slide: React.FC = ({ children }) => (
    <div className="JDslider__slide-wrap">
        <div className="JDslider__slide">{children}</div>
    </div>
);

export default forwardRef(Slider);
