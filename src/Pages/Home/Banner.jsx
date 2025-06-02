import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/DPvP4FZg/01.jpg" />

            </div>
            <div>
                <img src="https://i.ibb.co/vvJm4dcD/02.jpg" />

            </div>
            <div>
                <img src="https://i.ibb.co/Kjm6PZvT/03.png" />

            </div>
            <div>
                <img src="https://i.ibb.co/Ndjtf6Jb/04.jpg" />

            </div>
            <div>
                <img src="https://i.ibb.co/3YkzJgmQ/05.png" />
            </div>
            <div>
                <img src="https://i.ibb.co/PsQ6Xs1p/06.png" />
            </div>

        </Carousel>
    );
};

export default Banner;