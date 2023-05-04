import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex justify-between items-center mt-12 py-6 md:py-12">
            <div className="flex items-center">
                <Image
                    className="mr-4 dark:filter dark:invert"
                    src="/logo.svg"
                    alt="Logo"
                    width={60}
                    height={60}
                />
                <h1 className="text-3xl md:text-4xl">cogniforge</h1>
            </div>
        </div>
    );
}
