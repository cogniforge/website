import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
            <nav className="container items-center justify-between flex-wrap my-9">
                <div className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-full flex-shrink-0 mr-3"
                    />
                    <h1 className="text-3xl font-bold tracking-tight">
                        cogniforge.
                    </h1>
                </div>
            </nav>

            <main className="container flex-col items-center justify-center">
                <div className="items-center justify-between">
                    <div className="flex-col items-center justify-center w-1/2">
                        <h1 className="text-6xl font-bold">
                            Learning for all through collaborative projects and
                            peer-to-peer collaboration.
                        </h1>
                        
                        <div className="flex flex-row items-start justify-start gap-6 my-9">
                            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                Get Started
                            </button>
                            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/2">
                        {/* Vertical image coursell */}
                    </div>
                </div>
            </main>
        </div>
    );
}
