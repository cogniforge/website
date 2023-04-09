import Image from "next/image";
import VerticalCarousel from "@/components/VerticalCarousel";

const Logo = () => {
    return (
        <div className="flex justify-between items-center mt-12 py-6 md:py-12">
            <div className="flex items-center">
                <Image
                    className="mr-4"
                    src="/logo.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                />
                <h1 className="text-2xl md:text-3xl lg:text-4xl">cogniforge</h1>
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen max-w-fit mx-36 px-6 sm:px-8 lg:px-10">
            <main className="flex-grow flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-12">
                        <Logo />
                        <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold mb-10">
                            Learning for all through collaborative projects and
                            peer-to-peer collaboration.
                        </h1>
                        <div className="flex flex-col md:flex-row">
                            {/* TODO: Add actual links to other pages */}
                            <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded md:mr-4 mb-4 md:mb-0">
                                Get Started
                            </button>
                            <button className="bg-white text-purple-500 font-bold py-2 px-4 rounded border border-purple-500">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* TODO: Adapt this to be responsive on mobile
                        * Possibility of using an alternative.. horizontal carousel? */}  
                    <div className="min-h-fit w-1/4 ml-auto invisible lg:visible">
                        <VerticalCarousel />
                    </div>
                </div>
            </main>
        </div>
    );
}
