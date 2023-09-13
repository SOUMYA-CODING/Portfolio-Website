"use client";

import { Send } from "lucide-react";
import Button from "../ui/button"

const ContactForm = () => {
    return (
        <>
            <div className={`flex flex-col items-center justify-center`}>
                <form action="" autoComplete="off">
                    <div className={`flex flex-col items-start justify-start mb-8`}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className={`border-b-2 border-solid border-black focus:border-none focus:border-white p-2 w-[600px] xl:w-[100%]`} required />
                    </div>
                    <div className={`flex flex-col items-start justify-start mb-8`}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" className={`border-b-2 border-solid border-black focus:border-none focus:border-white p-2 w-[600px] xl:w-[100%]`} required />
                    </div>
                    <div className={`flex flex-col items-start justify-start mb-8`}>
                        <label htmlFor="message">Message</label>
                        <textarea name="" id="message" cols="5" rows="4" className={`border-b-2 border-solid border-black focus:border-none focus:border-white p-2 w-[600px] xl:w-[100%]`} required></textarea>
                    </div>
                    <Button title="Send" icon={<Send className={`ml-3`} />} href="/" />
                </form>
            </div>
        </>
    )
}

export default ContactForm