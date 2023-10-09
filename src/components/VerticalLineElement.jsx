import React from 'react';
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
const VerticalLineElement = ({ className, title, icon, contentStyle, contentArrowStyle, date, iconStyle, textStyle }) => {
    return (
                <VerticalTimelineElement
                    className={className}
                    contentStyle={contentStyle}
                    contentArrowStyle={contentArrowStyle}
                    date={date}
                    iconStyle={iconStyle}
                    icon={<img src={icon} />}
                >
                    <h3 className={textStyle}>{title}</h3>
                </VerticalTimelineElement>
    );
};

export default VerticalLineElement;