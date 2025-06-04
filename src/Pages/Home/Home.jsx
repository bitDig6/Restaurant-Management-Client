import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import ChefBistro from './ChefBistro/ChefBistro';
import PopularMenu from './PopularMenu/PopularMenu';
import Recommendations from './Recommendations/Recommendations';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefBistro></ChefBistro>
            <PopularMenu></PopularMenu>
            <Recommendations></Recommendations>
        </div>
    );
};

export default Home;