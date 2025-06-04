import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import ChefBistro from './ChefBistro/ChefBistro';
import PopularMenu from './PopularMenu/PopularMenu';
import Recommendations from './Recommendations/Recommendations';
import FeaturedItem from './FeaturedItem/FeaturedItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefBistro></ChefBistro>
            <PopularMenu></PopularMenu>
            <Recommendations></Recommendations>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;