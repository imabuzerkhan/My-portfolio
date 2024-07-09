import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="bg-[#1A202C]">
            <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center">
                <div className="mx-auto max-w-3xl text-center space-y-5">
                    <h1 className="text-[1.5rem] leading-[1.5] font-extrabold sm:text-[3.75rem] sm:leading-[1.2] ">
                        Mohammad <span className='text-[#4FD1C5]'>Abuzer</span> Khan
                        <br />
                    I'm  Frontend <span className='text-[#4FD1C5]'>Developer</span>
                    </h1>

                    <p className="mt-4 text-sm sm:text-xl/relaxed w-[300px] text-start sm:w-[600px] mx-auto text-gray-400 ">
                        I am a frontend developer specializing in building responsive applications using React and Next.js, creating seamless and efficient user experiences.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link href="#">
                            <div className="block px-24 rounded-md w-full  bg-[#4FD1C5] sm:px-10 py-4 text-lg font-medium text-black shadow hover:bg-[#32eedb] focus:outline-none focus:ring active:bg-[#4FD1C5] sm:w-auto">
                                Download CV
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="block w-full rounded-md px-[117px] bg-[#3F444E]  sm:px-12 py-4 font-medium text-white text-xl shadow focus:outline-none focus:ring sm:w-auto">
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
