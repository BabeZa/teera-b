import Image from "next/image";

interface ExpCardProps {
    icon: string;
    date: string;
    title: string;
    desc: string[];
    stack: string[];
}

export default function ExpCard({ icon, date, title, desc, stack }: ExpCardProps ) {
    return (
        <div className="bg-b-dark dark mt-4 flex w-full flex-col place-items-start rounded-xl px-6 py-6 border-2 border-gray-200">
            <div className="flex w-full flex-row place-items-center gap-4 ">
                <Image src={icon} alt="" width={40} height={40} className="object-contain"/>
                <div>
                    <p className="m-0 p-0 text-sm ">{date}</p>
                    <p className="text-lg m-0 mt-1 p-0">{title}</p>
                </div>
            </div>
            <ul className="mt-2 list-disc pl-5">
                {desc.map((i, index) => (
                    <li key={index} className="mt-1 text-purple-500">
                        <span className="text-black dark:text-white">{i}</span>
                    </li>
                ))}
                
            </ul>
            <ul className="flex flex-wrap gap-2 mt-4 text-sm *:rounded-full *:border *:border-purple-100 *:bg-purple-50 *:px-3 *:py-0.5 dark:text-purple-300 dark:*:border-purple-500/15 dark:*:bg-purple-500/10">
                {stack.map((i, index) => (
                    <li key={index}>{i}</li>
                ))}
            </ul>
        </div>
    );
}