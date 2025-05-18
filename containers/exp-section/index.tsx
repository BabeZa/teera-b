import ExpCard from "@/components/Cards/ExpCard";
import exps from "./expdata";

export default function ExperienceSection() {
    return (
        <section id="experience" className="w-full flex justify-center pt-40">
            <div className="w-full max-w-(--breakpoint-lg) flex flex-col gap-5 mx-8">
                <div>
                    <h1 className="text-4xl text-black dark:text-white font-bold">Experience.</h1>
                </div>
                <div>
                    {exps.map((i, index) => (
                        <ExpCard key={index} icon={i.icon} date={i.date} title={i.title} desc={i.desc} stack={i.stack}/>
                    ))}
                </div>
            </div>
        </section>
    );
}