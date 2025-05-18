import Image from "next/image";

interface SkillCardProps {
    Icon: string;
    Name: string;
}

export default function SkillCard({ Icon, Name }: SkillCardProps) {
    return (
        <div className="flex flex-col rounded-lg border-2 border-gray-200 transform transition duration-300 hover:scale-105">
            <div className="p-6 text-center">
                <Image src={Icon} alt={Name} width={96} height={96}/>
            </div>
            <div className=" pb-6 text-center">
                <h4 className="mb-1 text-lg font-semibold">{Name}</h4>
            </div>
        </div>
    );
}