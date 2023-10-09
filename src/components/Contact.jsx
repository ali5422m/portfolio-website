import React, {useRef} from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { useForm } from "react-hook-form"

const Contact =  () => {
 const form = useRef()
    const {register, handleSubmit, watch,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {

        emailjs.sendForm('service_929d277', 'template_x5lvzgn', form.current, 'AfgJn5WXlOPvVm-8X')
            .then((result) => {
                toast.success("Email sent", {
                    duration: 4000,
                    position: 'top-center',
                });

                reset();

            }, (error) => {
                toast.error(error.text,{
                    duration: 3000,
                    position: 'top-center',
                })
            });
    }



  return (
      <section className="py-16 lg:section" id="contact">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}
                className="flex-1 flex justify-start items-center">
                <div>
                    <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                        Get in touch
                    </h4>
                    <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                        Let's work <br /> together!
                    </h2>
                </div>
            </motion.div>
            <motion.form
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}
                className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-20 p-6 items-start"
                onSubmit={handleSubmit(onSubmit)}
                ref={form}
            >
                <input
                    type="text"
                    name="name"
                    {...register("name", { required: true, minLength: 3 })}
                    className="bg-transparent border-b py-3 outline-none w-full
                    placeholder:text-white focus:border-accent transition-all"
                    placeholder="Your name"
                />
                {errors.name && <span className="text-red-600">The name must be greater than 3 characters.</span>}

                <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    className="bg-transparent border-b py-3 outline-none w-full
                    placeholder:text-white focus:border-accent transition-all"
                    placeholder="Your email"
                />
                {errors.email && <span className="text-red-600">This field is required</span>}
                <textarea
                    type="text"
                    name="message"
                    {...register("message", { required: true, minLength: 10 })}
                    className="bg-transparent border-b py-3 outline-none w-full
                    placeholder:text-white focus:border-accent transition-all resize-none  mt-2"
                    placeholder="Your message"
                >
                </textarea>
                {errors.message && <span className="text-red-600">The name must be greater than 10 characters.</span>}
                <button className="btn btn-lg" >Send message</button>
            </motion.form>
          </div>
        </div>
      </section>
  );
};

export default Contact;
