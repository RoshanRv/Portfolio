import React, { ForwardedRef, forwardRef, useRef, useState } from "react"
import emailjs from "emailjs-com"

import CodeText from "./CodeText"
import { TbBrandGithub, TbBrandTwitter } from "react-icons/tb"
import { HiOutlineMail } from "react-icons/hi"
import { FiLinkedin } from "react-icons/fi"
import { ImProfile } from "react-icons/im"
import { HomeProp } from "../pages"
import { motion } from "framer-motion"
import { container, item } from "./HomeHero"

interface EmailResult {
    message: string | null
    style: string
}

const Contact = forwardRef((_prop, ref: ForwardedRef<HTMLElement>) => {
    const emailRef = useRef<any>(null)

    const [emailResult, setEmailResult] = useState({} as EmailResult)
    const [emailValidation, setEmailValidation] = useState({
        name: false,
        email: false,
        message: false,
    })

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const name = emailRef.current
            ?.getElementsByTagName("input")
            .namedItem("name")?.value
        const email = emailRef.current
            ?.getElementsByTagName("input")
            .namedItem("email")?.value
        const message = emailRef.current
            ?.getElementsByTagName("textarea")
            .namedItem("message")?.value

        if (!name) {
            setEmailValidation({
                name: true,
                email: false,
                message: false,
            })
            return clearValidation()
        }
        if (!email) {
            setEmailValidation({
                name: false,
                email: true,
                message: false,
            })

            return clearValidation()
        }

        if (!message) {
            setEmailValidation({
                name: false,
                email: false,
                message: true,
            })

            return clearValidation()
        }

        setEmailValidation({
            name: false,
            email: false,
            message: false,
        })

        if (emailRef.current) {
            emailjs
                .sendForm(
                    //
                    process.env.NEXT_PUBLIC_SERVICE_ID as string,
                    process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
                    emailRef.current,
                    process.env.NEXT_PUBLIC_PUBLIC_KEY as string
                )
                .then(
                    (result) => {
                        setEmailResult({
                            message: "Email Sent",
                            style: "bg-emerald-800",
                        })
                        clearEmailResult()
                        // console.log(result.text)
                    },
                    (error) => {
                        setEmailResult({
                            message: "Something Is Wrong, Try Again Later",
                            style: "bg-red-800",
                        })
                        clearEmailResult()
                        console.log(error.text)
                    }
                )
        }
    }

    const clearEmailResult = () => {
        setTimeout(() => {
            setEmailResult({ message: null, style: "" })
        }, 5000)
    }

    const clearValidation = () => {
        setTimeout(() => {
            setEmailValidation({
                name: false,
                email: false,
                message: false,
            })
        }, 5000)
    }

    return (
        <section
            ref={ref}
            id="contact"
            style={{
                // backgroundImage: `url('college.svg')`,
                backgroundSize: "35%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                fill: "red",
            }}
            className="flex flex-col items-center justify-center min-h-screen px-2 pb-8"
        >
            {/*    Title  */}
            <motion.div
                variants={item}
                initial={"hidden"}
                whileInView={"show"}
                className=""
            >
                <CodeText tag="h1" type="head">
                    <h1 className="">
                        <span className="text-sec font-code ">04.</span>
                        Contact
                    </h1>
                </CodeText>
            </motion.div>

            <div className="flex flex-col justify-center md:justify-around md:flex-row md:gap-x-40">
                {/*     Left Social Links     */}
                <motion.div
                    variants={container}
                    initial={"hidden"}
                    whileInView={"show"}
                    className="flex-col self-end hidden gap-y-10 md:flex"
                >
                    {/* Github  */}
                    <motion.div variants={item} className="flex">
                        <ContactButton link="https://github.com/RoshanRv">
                            <TbBrandGithub />
                        </ContactButton>
                    </motion.div>

                    {/*     Linked In     */}
                    <motion.div variants={item} className="flex">
                        <ContactButton link="https://www.linkedin.com/in/roshan-kumar--/">
                            <FiLinkedin />
                        </ContactButton>
                    </motion.div>

                    {/*      Resume Button    */}
                    <motion.div variants={item} className="flex">
                        <ContactButton link="https://drive.google.com/file/d/18SiR0b2RnSoMEhCFaB6cugfhv4Pd5492/view?usp=sharing">
                            <ImProfile />
                        </ContactButton>
                    </motion.div>
                </motion.div>

                {/*         Form       */}
                <motion.form
                    variants={container}
                    initial={"hidden"}
                    whileInView={"show"}
                    onSubmit={(e) => sendEmail(e)}
                    ref={emailRef}
                    className="flex flex-col p-6 mt-10 transition-all duration-500 border-2 rounded-lg md:p-20 gap-y-10 border-sec/50 btn-shadow md:py-14"
                >
                    <div className="flex flex-col items-baseline w-full gap-8 md:flex-row">
                        {/*      Name     */}
                        <div className="flex flex-col-reverse justify-end w-full">
                            {emailValidation.name && (
                                <p className="p-1 text-red-700">
                                    Name Is Required
                                </p>
                            )}
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="w-full p-2 overflow-hidden transition-all border-b-2 rounded-t-sm peer placeholder:text-transparent outline-0 text-sec bg-code border-sub/80 placeholder-shown:bg-transparent focus:bg-code font-sm md:w-80"
                            />
                            <h1 className="mb-1 text-sm transition-all peer-placeholder-shown:text-sub/80 peer-focus:text-code text-code peer-focus:text-sm peer-placeholder-shown:text-lg peer-focus:mb-1 peer-placeholder-shown:-mb-8 ">
                                Name
                            </h1>
                        </div>
                        {/*      Email    */}
                        <div className="flex flex-col-reverse w-full">
                            {emailValidation.email && (
                                <p className="p-1 text-red-700">
                                    Email Is Required
                                </p>
                            )}
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 overflow-hidden transition-all border-b-2 rounded-t-sm peer placeholder:text-transparent invalid:border-red-800 invalid:border-b-4 outline-0 text-sec bg-code border-sub/80 placeholder-shown:bg-transparent focus:bg-code font-sm md:w-80"
                            />
                            <h1 className="mb-1 text-sm transition-all peer-placeholder-shown:text-sub/80 peer-focus:text-code text-code peer-focus:text-sm peer-placeholder-shown:text-lg peer-focus:mb-1 peer-placeholder-shown:-mb-8">
                                Email
                            </h1>
                        </div>
                    </div>
                    {/*      Subject     */}
                    <div className="flex flex-col-reverse">
                        <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            className="w-full p-2 overflow-hidden transition-all border-b-2 rounded-t-sm peer placeholder:text-transparent outline-0 text-sec bg-code border-sub/80 placeholder-shown:bg-transparent focus:bg-code font-sm "
                        />
                        <h1 className="mb-1 text-sm transition-all peer-placeholder-shown:text-sub/80 peer-focus:text-code text-code peer-focus:text-sm peer-placeholder-shown:text-lg peer-focus:mb-1 peer-placeholder-shown:-mb-8 ">
                            Subject
                        </h1>
                    </div>
                    {/*     Message    */}
                    <div className="flex flex-col-reverse">
                        {emailValidation.message && (
                            <p className="p-1 text-red-700">
                                Message Is Required
                            </p>
                        )}
                        <textarea
                            name="message"
                            cols={50}
                            rows={50}
                            placeholder="Subject"
                            className="w-full h-12 p-2 transition-all border-b-2 rounded-t-sm peer placeholder:text-transparent outline-0 text-sec bg-code border-sub/80 placeholder-shown:bg-transparent focus:bg-code font-sm"
                        />
                        <h1 className="mb-1 text-sm transition-all peer-placeholder-shown:text-sub/80 peer-focus:text-code text-code peer-focus:text-sm peer-placeholder-shown:text-lg peer-focus:mb-1 peer-placeholder-shown:-mb-8">
                            Message
                        </h1>
                    </div>

                    <button
                        type="submit"
                        className="border-sec border-2  px-10 py-2 text-white  relative transiton-all  w-max after:absolute after:w-28 after:h-3 after:contents-[''] after:bg-gray-900 after:-top-2 after:-right-1 hover:after:w-0 after:transition-all before:absolute before:w-28 before:h-3 before:contents-[''] before:bg-gray-900 before:-bottom-2 before:-left-1 hover:before:w-0 before:transition-all shadow-md duration-500 hover:shadow-sec hover:scale-110 font-code text-lg my-4 btn-shadow outline-0 mx-auto"
                    >
                        <span className="text-sx text-code">{"<"}</span>
                        {" Connect "}
                        <span className="text-sx text-code">{"/>"}</span>
                    </button>

                    {emailResult.message && (
                        <div
                            className={` ${emailResult.style} text-lg text-white w-full text-center p-3`}
                        >
                            <h1>{emailResult.message}</h1>
                        </div>
                    )}
                </motion.form>
                {/*     Right Social Links     */}
                <motion.div
                    variants={container}
                    initial={"hidden"}
                    whileInView={"show"}
                    className="flex-col self-end hidden md:flex gap-y-10"
                >
                    {/* Twitter  */}
                    <motion.div variants={item} className="flex">
                        <ContactButton link="https://twitter.com/RoshanK18328680">
                            <TbBrandTwitter />
                        </ContactButton>
                    </motion.div>

                    {/*     Mail     */}
                    <motion.div variants={item} className="flex">
                        <ContactButton link="mailto:nkroshankumar@gmail.com">
                            <HiOutlineMail />
                        </ContactButton>
                    </motion.div>
                </motion.div>
            </div>
            {/*   Links MOB   */}
            <div className="flex flex-col w-full mt-8 md:hidden gap-y-6">
                <div className="flex justify-around">
                    {/* Github  */}
                    <ContactButton link="https://github.com/RoshanRv">
                        <TbBrandGithub />
                    </ContactButton>

                    {/*     Linked In     */}
                    <ContactButton link="https://www.linkedin.com/in/roshan-kumar--/">
                        <FiLinkedin />
                    </ContactButton>

                    {/*      Resume Button    */}
                    <ContactButton link="https://drive.google.com/file/d/18SiR0b2RnSoMEhCFaB6cugfhv4Pd5492/view?usp=sharing">
                        <ImProfile />
                    </ContactButton>
                </div>

                <div className="flex justify-around">
                    {/* Twitter  */}
                    <ContactButton link="https://twitter.com/RoshanK18328680">
                        <TbBrandTwitter />
                    </ContactButton>

                    {/*     Mail     */}
                    <ContactButton link="mailto:nkroshankumar@gmail.com">
                        <HiOutlineMail />
                    </ContactButton>
                </div>
            </div>
        </section>
    )
})

export default Contact

interface ContactButtonProp {
    children: React.ReactNode
    link: string
}

const ContactButton = ({ children, link }: ContactButtonProp) => {
    return (
        <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className={`border-sec border-2  p-4 rounded-2xl text-sub hover:text-code  relative transiton-all  w-max after:absolute after:w-12 after:h-3 after:contents-[''] after:bg-gray-900 after:-top-1 after:-right-1 hover:after:w-0 after:transition-all before:absolute before:w-12 before:h-3 before:contents-[''] before:bg-gray-900 before:-bottom-1 before:-left-1 hover:before:w-0 before:transition-all shadow-md duration-500 hover:shadow-sec hover:scale-110 font-code my-4 btn-shadow outline-0  text-2xl md:text-4xl`}
        >
            {children}
        </a>
    )
}
