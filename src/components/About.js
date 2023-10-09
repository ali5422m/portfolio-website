import React from 'react';
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import {Link} from "react-router-dom";
import MyPDF from "../files/dadkhast.pdf";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.3}}
                        className="flex-1 bg-about bg-contain bg-no-repeat
                                   h-[640px] mix-blend-lighten bg-top">
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.3}}
                        className="flex-1">
                        <h2 className="h2 text-accent">About me</h2>
                        <h3 className="h3 mb-4">
                            I'm a Freelance Front-end Developer with over 1 years of experience.
                        </h3>
                        <p className="mb-6">
                            I'm Ali Mohammadinia from Esf-Khansar & Live in Tehran<br/>

                            Work experience in the company bizap : 6 month <br/>
                            Military Service: Completed <br/>
                            Marital Status : Single<br/>
                            Birth Year : 1996 / (26 years old)<br/>
                            Maktab Sharif Coding
                            Bootcamp Js & ReactJS
                            (+320 hours)
                        </p>
                        <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                            <div>
                                <div className="text-[40px]  text-gradient mb-2 ">
                                    {inView ?
                                        <CountUp start={0} end={1} duration={3}/>
                                        :
                                        null
                                    }
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Years of <br/>
                                    Experience
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px]  text-gradient mb-2">
                                    {inView ?
                                        <CountUp start={0} end={15} duration={3}/>
                                        :
                                        null
                                    }
                                    {/*k+*/}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Projects <br/>
                                    Completed
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px]  text-gradient mb-2">
                                    {inView ?
                                        <CountUp start={0} end={12} duration={3}/>
                                        :
                                        null
                                    }
                                    {/*k+*/}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Satisfied <br/>
                                    Clients
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center  btn-box">
                            <Link to="tel:+989393714073">
                                <div>
                                    <button>Contact Me</button>
                                </div>
                            </Link>
                                <Link
                                    to={MyPDF}
                                    download="Alireza_Hajizaki_Resume.pdf"
                                    target="_blank"
                                >
                            <div className="btn-resume">
                                    My Resume
                            </div>
                                </Link>
                            {/*<Link to="tel:+09140035422">*/}
                            {/*    <button className="btn btn-lg">*/}
                            {/*        Contact me*/}
                            {/*    </button>*/}
                            {/*</Link>*/}
                            {/*<Link to={MyPDF} target="_blank" download="dadkhast.pdf" className="text-gradient btn-link">*/}
                            {/*    My Resume*/}
                            {/*</Link>*/}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default About;
