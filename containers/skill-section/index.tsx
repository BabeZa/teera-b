import SkillCard from "@/components/Cards/SkillCard"
import skills from "./skillsdata";

export default function SkillSection() {
    return (
        <section id="skills" className="w-full flex justify-center pt-40">
            <div className="w-full max-w-(--breakpoint-lg) flex flex-col gap-5 mx-8">
                <div>
                    <h1 className="text-4xl text-black dark:text-white font-bold">Skill.</h1>
                </div>
                <div className="space-y-4 mt-4">
                    {skills.map((group, groupIndex) => (
                        <div key={groupIndex} className="grid grid-cols-7 gap-4">
                        {group.map((skill) => (
                            <SkillCard key={skill.name} Icon={skill.icon} Name={skill.name} />
                        ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
