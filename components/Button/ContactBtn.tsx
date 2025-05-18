import Link from 'next/link'
import { ReactNode } from "react";

interface ContactBtnProps {
    icon: ReactNode;
    text: string;
    link: string;
}

export default function ContactBtn({ icon, text, link }: ContactBtnProps ) {
    return (
        <Link href={link} className="inline-flex items-center bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded transform duration-200 cursor-pointer">
            {icon}
            <span className="ms-2">{text}</span>
        </Link>
    );
}