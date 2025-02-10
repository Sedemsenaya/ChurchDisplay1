import './Carousel-background.css';
import { useEffect, useState } from 'react';

function CarouselBackground() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Using import.meta.glob for dynamic import (if using Vite)
        const imagesFromFolder = import.meta.glob('../assets/DesktopWallpapers/*.{png,jpg,jpeg,webp}');
        const imageKeys = Object.keys(imagesFromFolder);

        const importImages = async () => {
            const imagePromises = imageKeys.map((key) => imagesFromFolder[key]());
            const resolvedImages = await Promise.all(imagePromises);

            // Shuffle the array after resolving all images
            const shuffledImages = shuffleArray(resolvedImages);
            setImages(shuffledImages);
        };

        importImages();
    }, []);

    // Function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Pick a random index
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    };

    return (

        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        data-bs-interval="50000"
                    >
                        <div
                            style={{
                                background: `url(${image.default}) center / cover no-repeat`,
                                minHeight: '100vh',
                                width: '100%',
                            }}
                        ></div>
                    </div>
                ))}
            </div>

            {/* Previous Button */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            {/* Next Button */}
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselBackground;