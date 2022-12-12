import React from "react"
import Button from "./Button"
import CodeText from "./CodeText"
import { TbBrandGithub, TbBrandTwitter } from "react-icons/tb"
import { HiOutlineMail } from "react-icons/hi"
import { FiLinkedin } from "react-icons/fi"

const Contact = () => {
    return (
        <section
            id="contact"
            style={{
                // backgroundImage: `url('college.svg')`,
                backgroundSize: "35%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                fill: "red",
            }}
            className="flex flex-col justify-center items-center min-h-screen pb-8"
        >
            <CodeText tag="h1" type="head">
                <h1 className="">
                    <span className="text-sec font-code ">04.</span>
                    Contact
                </h1>
            </CodeText>
            <div className="flex justify-around gap-x-40">
                {/*     Left Social Links     */}
                <div className="flex flex-col gap-y-10 self-end">
                    {/* Github  */}
                    <ContactButton link="https://github.com/RoshanRv">
                        <TbBrandGithub />
                    </ContactButton>

                    {/*     Linked In     */}
                    <ContactButton link="https://www.linkedin.com/in/roshan-kumar--/">
                        <FiLinkedin />
                    </ContactButton>
                </div>

                {/*         Form       */}
                <div className="mt-10 flex flex-col gap-y-10 border-2 border-sec/50 btn-shadow transition-all duration-500 py-14 p-20 rounded-lg">
                    <div className="flex gap-x-8">
                        {/*      Name     */}
                        <div className="flex flex-col-reverse">
                            <input
                                type="text"
                                placeholder="Name"
                                className="peer placeholder:text-transparent border-b-2 outline-0 p-2 text-sec bg-code  border-sub/80 placeholder-shown:bg-transparent focus:bg-code font-sm  overflow-hidden transition-all   rounded-t-sm w-80"
                            />
                            <h1 className="peer-placeholder-shown:text-sub/80 peer-focus:text-code text-code peer-focus:text-sm text-sm peer-placeholder-shown:text-lg mb-1 peer-focus:mb-1 peer-placeholder-shown:-mb-8 transition-all ">
                                Name
                            </h1>
                        </div>
                        {/*      Email    */}
                        <div className="flex flex-col-reverse">
                            <input
                                type="email"
                                placeholder="Email"
                                className="peer placeholder:text-transparent border-b-2 outline-0 p-2 text-sec bg-code  border-sub/80 placeholder-shown:bg-transparent focus:bg-code font-sm  overflow-hidden transition-all   rounded-t-sm w-80"
                            />
                            <h1 className="peer-placeholder-shown:text-sub/80 peer-focus:text-code text-code peer-focus:text-sm text-sm peer-placeholder-shown:text-lg mb-1 peer-focus:mb-1 peer-placeholder-shown:-mb-8 transition-all ">
                                Email
                            </h1>
                        </div>
                    </div>
                    {/*      Subject     */}
                    <div className="flex flex-col-reverse">
                        <input
                            type="text"
                            placeholder="Subject"
                            className="peer placeholder:text-transparent border-b-2 outline-0 p-2 text-sec bg-code  border-sub/80 placeholder-shown:bg-transparent focus:bg-code font-sm  overflow-hidden transition-all   rounded-t-sm w-full"
                        />
                        <h1 className="peer-placeholder-shown:text-sub/80 peer-focus:text-code text-code peer-focus:text-sm text-sm peer-placeholder-shown:text-lg mb-1 peer-focus:mb-1 peer-placeholder-shown:-mb-8 transition-all ">
                            Subject
                        </h1>
                    </div>
                    {/*     Message    */}
                    <div className="flex flex-col-reverse">
                        <textarea
                            cols={50}
                            rows={50}
                            placeholder="Subject"
                            className="peer placeholder:text-transparent border-b-2 outline-0 p-2 text-sec bg-code  border-sub/80 placeholder-shown:bg-transparent focus:bg-code font-sm  transition-all h-12  rounded-t-sm w-full"
                        />
                        <h1 className="peer-placeholder-shown:text-sub/80 peer-focus:text-code text-code peer-focus:text-sm text-sm peer-placeholder-shown:text-lg mb-1 peer-focus:mb-1 peer-placeholder-shown:-mb-8 transition-all">
                            Message
                        </h1>
                    </div>

                    <Button text=" Connect " styles="mx-auto" />
                </div>
                {/*     Right Social Links     */}
                <div className="flex flex-col gap-y-10 self-end">
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
}

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
            className={`border-sec border-2  p-4 rounded-2xl text-sub hover:text-code  relative transiton-all  w-max after:absolute after:w-12 after:h-3 after:contents-[''] after:bg-gray-900 after:-top-1 after:-right-1 hover:after:w-0 after:transition-all before:absolute before:w-12 before:h-3 before:contents-[''] before:bg-gray-900 before:-bottom-1 before:-left-1 hover:before:w-0 before:transition-all shadow-md duration-500 hover:shadow-sec hover:scale-110 font-code my-4 btn-shadow outline-0  text-4xl`}
        >
            {children}
        </a>
    )
}
