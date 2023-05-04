import Link from 'next/link';

import { photosLeft, photosRight } from "@/data/photos";

import Carousel from "@/components/Carousel";
import Logo from "@/components/Logo";
import Layout from '@/components/Layout';

export default function Home() {
    return (
    <Layout title="Home">
        <div className="flex flex-col min-h-screen max-w-fit mx-36 px-6 sm:px-8 lg:px-10">
            <main className="flex-grow flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 md:mr-10">
                        <Logo />
                        <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold mb-10">
                            Learning for all through collaborative projects and
                            peer-to-peer collaboration.
                        </h1>
                        <div className="flex flex-col md:flex-row">
                            {/* TODO: Add actual links to other pages */}
                            <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded md:mr-4 mb-4 md:mb-0">
                                Coming Soon...
                            </button>
                            <Link href="https://bank.hackclub.com/donations/start/cogniforge" passHref={true}>
                                <button className="bg-white text-purple-500 font-bold py-2 px-4 rounded border border-purple-500">
                                Support Us
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* TODO: Adapt this to be responsive on mobile
                     * Possibility of using an alternative.. horizontal carousel? */}
                    <div className="min-h-full w-1/3 ml-auto invisible xl:visible flex">
                        <div className="w-1/2 flex-1 mx-4 carousel-vertical-left">
                            <Carousel
                                photos={photosLeft}
                                rtl={false}
                                vertical={true}
                            />
                        </div>
                        <div className="w-1/2 flex-1 mx-4 carousel-vertical-right">
                            <Carousel
                                photos={photosRight}
                                rtl={true}
                                vertical={true}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </Layout>
    );
}
