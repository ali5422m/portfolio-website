import React from 'react';
import {FiFigma} from "react-icons/fi";
import VerticalLineElement from "./VerticalLineElement";
import {VerticalTimeline} from "react-vertical-timeline-component";

const Skills = () => {
    const mainSkills = [
        {
            id: 1,
            title: "React js",
            icon: "images/react.png",
            contentStyle: {background: 'rgb(33, 150, 243)', color: '#fff'},
            contentArrowStyle: {borderRight: '7px solid  rgb(33, 150, 243)'},
            date: "2011 - present",
            iconStyle: {background: 'rgb(33, 150, 243)', color: '#fff'}
        },
        {
            id: 2,
            title: "Next js",
            icon: "images/next.png",
            contentStyle: {background: '#FF56F6', color: '#fff'},
            contentArrowStyle: {borderRight: '7px solid  #FF56F6'},
            date: "2011 - present",
            iconStyle: {background: '#FF56F6', color: '#fff'}
        },
        {
            id: 3,
            title: "Type Script",
            icon: "images/typescript.png",
            contentStyle: {background: 'rgb(33, 150, 243)', color: '#fff'},
            contentArrowStyle: {borderRight: '7px solid  rgb(33, 150, 243)'},
            date: "2011 - present",
            iconStyle: {background: 'rgb(33, 150, 243)', color: '#fff'}
        },
        {
            id: 4,
            title: "Tailwind css / ui -\n" +
                "Material-UI -\n" +
                "Daisy-UI -\n" +
                "Chakra-UI -\n" +
                "Bootstrap -\n" +
                "Flowbite -\n" +
                "Shadcn",
            icon: "images/css.png",
            contentStyle: {background: '#FF56F6', color: '#fff'},
            contentArrowStyle: {borderRight: '7px solid  #FF56F6'},
            date: "2011 - present",
            iconStyle: {background: '#FF56F6', color: '#fff'}
        },
        {
            id: 5,
            title: "Redux - Redux Toolkit - Redux Thunk - Zustand",
            icon: "images/redux.png",
            contentStyle: {background: 'rgb(33, 150, 243)', color: '#fff'},
            contentArrowStyle: {borderRight: '7px solid  rgb(33, 150, 243)'},
            date: "2011 - present",
            iconStyle: {background: 'rgb(33, 150, 243)', color: '#fff'}
        },
        {
            id: 6,
            title: "Git Hub",
            icon: "images/git.png",
            contentStyle: {background: 'rgb(33, 150, 243)', color: '#fff'},
            contentArrowStyle: {borderRight: '7px solid  rgb(33, 150, 243)'},
            date: "2011 - present",
            iconStyle: {background: 'rgb(33, 150, 243)', color: '#fff'}
        },
        {
            id: 7,
            title: "Figma",
            icon: "images/figma.png",
            contentStyle: {background: '#FF56F6', color: '#fff'},
            contentArrowStyle: {borderRight: '7px solid  #FF56F6'},
            date: "2011 - present",
            iconStyle: {background: '#FF56F6', color: '#fff'}
        },
    ]

    return (
        <section className="mt-32 mb-16" id="skills">
            <div className="container mx-auto">
                <VerticalTimeline>
                {mainSkills.map(skill => (
                        <VerticalLineElement
                            key={skill.id}
                            className="vertical-timeline-element--work"
                            title={skill.title}
                            icon={skill.icon}
                            contentStyle={skill.contentStyle}
                            contentArrowStyle={skill.contentArrowStyle}
                            date={skill.date}
                            iconStyle={skill.iconStyle}
                            textStyle="vertical-timeline-element-title text-xl"
                        />
                ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Skills;