import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const photos = [
    {
        id: 1,
        imageUrl: "/manga.webp",
        title: "Item 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        imageUrl: "/manga.webp",
        title: "Item 2",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        imageUrl: "/manga.webp",
        title: "Item 3",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
        id: 4,
        imageUrl: "/manga.webp",
        title: "Item 4",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
        id: 5,
        imageUrl: "/manga.webp",
        title: "Item 5",
        description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    },
];

interface Item {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const VerticalCarouselTemplate = ({ photos }: { photos: Item[] }) => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: false,
    };

    return (
        <div className="max-w-md mx-auto">
            <Slider {...settings}>
                {photos.map((item) => (
                    <div key={item.id} className="my-4">
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={500}
                            height={500}
                            unoptimized
                        />
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default function VerticalCarousel() {
    return <VerticalCarouselTemplate photos={photos} />;
}
