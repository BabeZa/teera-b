import WebDev from "./WebDevSVG";

export default function InfoSection() {
    return (
        <section id="home" className="w-full flex justify-center pt-50 mb-40">
            <div className="w-full max-w-(--breakpoint-lg) grid grid-cols-2 gap-1 pt-20">
                <div className=" flex flex-col gap-10 pt-16">
                    <div>
                        <h1 className="text-4xl py-3 font-bold text-black dark:text-white">Hello there! 👋 I&apos;m</h1>
                        <h1 className="text-4xl py-3 font-bold text-black dark:text-white"><span className="text-5xl py-3 font-black animate-text-gradient bg-linear-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Teerapat Buakaew</span></h1>
                        <h1 className="text-4xl py-3 text-black dark:text-white">Full Stack Developer</h1>
                    </div>
                    <div>
                        <p className="text-xl md:text-2xl text-black/80 dark:text-gray-400  md:leading-10" ></p>
                    </div>
                </div>
                <div className="">
                    <WebDev />
                </div>
            </div>
        </section>
    );
}