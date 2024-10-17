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
        <section className="relative w-full h-screen overflow-hidden">
            <div
                className="w-full h-full bg-cover bg-center transition-all duration-1000"
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                    backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat', 
                }}
            >
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-5 h-5 rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-500' : 'border-2 border-blue-500 bg-white'}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroPage;
