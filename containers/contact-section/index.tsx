'use client';

import { useState, useEffect } from 'react';

import ContactBtn from "@/components/Button/ContactBtn";
import { HiMail } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const email = "teerapat.buakaew@gmail.com";

    const copyEmail = async () => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          } catch (err) {
            console.error("Failed to copy email:", err);
          }
        } else {
          console.warn("Clipboard API not available.");
        }
    };

    useEffect(() => {
        // console.log("Copied state updated:", copied);
    }, [copied]);

    return (
        <section id="contact" className="w-full flex justify-center pt-40 mb-40">
            <div className="w-full max-w-(--breakpoint-lg) flex flex-col gap-5 mx-8">
                <div>
                    <h1 className="text-4xl text-black dark:text-white font-bold text-center">GET IN TOUCH</h1>
                    <p className="mt-6 text-center text-lg">My inbox is always open, whether you have a job opportunity to discuss or just want to say hi.<br/> Feel free to reach out at{" "}
                    <span
                        className="relative group text-purple-600 underline cursor-pointer "
                        onClick={copyEmail}
                    >
                        {email}
                        {copied && (
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-sm rounded bg-neutral-800 text-white opacity-100 transition-opacity">
                                Copied!
                            </span>
                        )}
                    </span>
                    </p>
                </div>
                <div className="flex justify-center gap-8 mt-10">
                    <ContactBtn 
                        icon={<HiMail />} 
                        text="Email" 
                        link="mailto:teerapat.buakaew@gmail.com" 
                    />
                    <ContactBtn 
                        icon={<AiFillGithub />} 
                        text="Github" 
                        link="https://github.com/BabeZa" 
                    />
                    <ContactBtn 
                        icon={<FaLinkedinIn />} 
                        text="Linkedin" 
                        link="https://www.linkedin.com/in/teerapatbua/" 
                    />
                </div>
            </div>
        </section>
    );
}