import React from 'react';
import {BsArrowUpRight} from "react-icons/bs";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import {Link} from "react-router-dom";

const services = [
    {
        name: "REACT JS",
        description:
            "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
        url: "https://react.dev/",
    },
    {
        name: "NEXT JS",
        description:
            "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications.",
        url: "https://nextjs.org/",
    },
    {
        name: "TYPESCRIPT",
        description:
            "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing.",
        url: "https://www.typescriptlang.org/",
    },
    {
        name: "REDUX",
        description:
            "Redux is an open-source JavaScript library for managing and centralizing application state.",
        url: "https://redux.js.org/",
    },
]

const Services = () => {
    return (
        <section className="section" id="services">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:mt-12">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 sm:mt-0 mt-10 lg:mb-0">
                        <h2 className="h2 text-accent mb-6">What I Do.</h2>
                        <h3 className="h3 max-w-[455px] mb-16">
                            Hi 👋 I'm  ready to build
                            E-Commerce projects -
                            Business - 
                            Social media - 
                            Blog - 
                            Personal web page - 
                            News - Portfolio
                            and  ...
                        </h3>
                        <Link to="https://www.bizap.ir/" target="_blank">
                            <button className="btn btn-sm">See my work</button>
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex-1">
                        <div>
                            {services.map((service, index) => {
                                const {name, description, url} = service;

                                return (
                                    <div className="flex border-b border-white/20 h-[146px] mb-[38px]" key={index}>
                                        <div className="max-w-[476px]">
                                            <h4 className="text-[20px] tracking-wider
                                            font-primary font-semibold mb-4">
                                                {name}
                                            </h4>
                                            <p className="font-secondary leading-tight">{description}</p>
                                        </div>
                                        <div className="flex flex-col flex-1 items-end">
                                            <Link
                                                to={url}
                                                target="_blank"
                                                className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                                            >
                                                <BsArrowUpRight />
                                            </Link>
                                            <Link to={url} className="text-gradient text-sm">
                                                Learn more
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
};

export default Services;
