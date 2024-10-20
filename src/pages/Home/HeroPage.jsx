import React, { useEffect, useState } from 'react';

const images = [
    'slider1.jpg',
    'slider2.png',
    'slider1.jpg',
    'slider2.png',
];

const HeroPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="relative w-full xsm:h-60   sm:h-64 md:h-96  flex items-center justify-center overflow-hidden ">
            <img
                src={images[currentIndex]}
                alt={`Slider ${currentIndex + 1}`}
                className="w-full h-full object-contain transition-all duration-1000"
            />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`lg:w-5 lg:h-5 w-3 h-3 rounded-full cursor-pointer ${
                            currentIndex === index
                                ? 'bg-blue-500'
                                : 'border border-blue-500 bg-white'
                        }`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroPage;
