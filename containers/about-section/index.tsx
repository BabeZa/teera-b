export default function AboutSection() {
    return (
        <section id="about" className="w-full flex justify-center pt-40">
            <div className="w-full max-w-(--breakpoint-lg) flex flex-col gap-5 mx-8">
                <div>
                    <h1 className="text-4xl text-black dark:text-white font-bold">About Me.</h1>
                </div>
                <div>
                    <p className="text-lg">
                        Hello, my name is Teerapat Bukaew, and my nickname is Beb. I am currently developing Web 
                        Applications, APIs, Windows Forms, and Windows Services for client health check systems, using C# .NET 
                        Framework, JavaScript, and MS SQL Server. I am responsible for the entire development process, from system 
                        design to the development of applications, websites, and APIs, as well as database design and security 
                        implementation. Previously, I worked on POS and ERP system maintenance.
                    </p>
                </div>
            </div>
        </section>
    );
}