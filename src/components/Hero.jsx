import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="bg-[#1A202C]">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Front End Developer Abuzer Khan
                        <strong className="font-extrabold text-red-700 sm:block"> Understand User Flow. </strong>
                        <strong className="font-extrabold text-red-700 sm:block"> Increase Conversion. </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link href="#">
                            <a className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                               Download cv
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto">
                                Linkedin
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
