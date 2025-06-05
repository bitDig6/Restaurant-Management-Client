import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import ChefBistro from './ChefBistro/ChefBistro';
import PopularMenu from './PopularMenu/PopularMenu';
import Recommendations from './Recommendations/Recommendations';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import Testimonials from './Testimonials/Testimonials';
import useDynamicTitle from '../../Hooks/useDynamicTitle';

const Home = () => {
    useDynamicTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefBistro></ChefBistro>
            <PopularMenu></PopularMenu>
            <Recommendations></Recommendations>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;