import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";

import Img1 from "../assets/portfolio-img1.png";
import Img4 from "../assets/portfolio.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import {Link} from "react-router-dom";

const Work = () => {
    return (
        <section className="section" id="work">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.3}}
                        className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                        <div>
                            <h2 className="h2 leading-tight text-accent">
                                My Latest <br/>
                                work.
                            </h2>
                            <p className="max-w-sm mb-16">
                                Recently, I worked on several projects such as a E-Commerce and a portfolio,
                                as well as Node and MySQL and Prisma.
                            </p>
                            <Link to="https://github.com/ali5422m/" target="_blank">
                                <button className="btn btn-sm">View all projects</button>
                            </Link>
                        </div>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            <div
                                className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img
                                src={Img1}
                                alt=""
                                className="group-hover:scale-125 transition-all duration-500"
                            />
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24
                              transition-all duration-500 z-50">
                                <span className="text-gradient"> UI/UX Design</span>
                            </div>
                            <div
                                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">Project Title</span>
                            </div>
                        </div>

                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.3}}
                        className="flex-1 flex flex-col gap-y-10 justify-end">
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            <div
                                className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img
                                src={Img2}
                                alt=""
                                className="group-hover:scale-125 transition-all duration-500"
                            />
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24
                              transition-all duration-500 z-50">
                                <span className="text-gradient"> UI/UX Design</span>
                            </div>
                            <div
                                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">Project Title</span>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            <div
                                className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img
                                src={Img3}
                                alt=""
                                className="group-hover:scale-125 transition-all duration-500 "
                            />
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24
                              transition-all duration-500 z-50">
                                <span className="text-gradient"> UI/UX Design</span>
                            </div>
                            <div
                                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">Project Title</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
