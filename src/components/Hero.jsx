import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="bg-[#1A202C]">
            <div className="px-6 sm:px-0 sm:flex sm:items-center sm:justify-center py-16">
                <div className="sm:mx-auto sm:max-w-3xl text-center space-y-5">
                    <h1 className="text-2xl leading-snug font-extrabold sm:text-5xl sm:leading-tight">
                        Mohammad <span className="text-[#4FD1C5]">Abuzer</span> Khan
                        <br />
                        I am a Frontend <span className="text-[#4FD1C5]">Developer</span>
                    </h1>

                    <p className="mt-4 text-base sm:text-lg w-full sm:w-[600px] md:w-[610px] mx-auto text-gray-400 text-center sm:text-start">
                        I am a frontend developer specializing in building responsive applications using React and Next.js, creating seamless and efficient user experiences.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link href="#" className="w-full sm:w-auto block">
                            <div className="rounded-md px-6 py-4 text-lg font-medium bg-[#4FD1C5] text-black shadow hover:bg-[#32eedb] focus:outline-none focus:ring active:bg-[#4FD1C5]">
                                Download CV
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/imabuzerkhan/"  target='_blank' className="w-full sm:w-auto block">
                            <div className="rounded-md px-8 py-4 text-lg font-medium bg-[#2f3747] text-white shadow focus:outline-none focus:ring">
                                LinkedIn
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
