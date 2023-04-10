import React from "react";
import Slider from "react-slick";
import Image from "next/image";

interface Item {
    id: number;
    description: string;
    imageUrl: string;
}

export default function VerticalCarousel({
    photos,
    rtl,
}: {
    photos: Item[];
    rtl: boolean;
}) {
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
        rtl: rtl,
    };

    return (
        <div className="max-w-md mx-auto">
            <Slider {...settings}>
                {photos.map((item) => (
                    <div
                        key={item.id}
                        className="my-4 justify-center flex flex-col items-center border-2 border-gray-300 rounded-3xl relative"
                    >
                        <Image
                            src={item.imageUrl}
                            alt={item.description}
                            width={300}
                            height={300}
                            className="rounded-3xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 m-4 p-2 rounded-xl bg-black bg-opacity-80 text-white text-center backdrop-blur-md">
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

