import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import ChefBistro from './ChefBistro/ChefBistro';
import PopularMenu from './PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefBistro></ChefBistro>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;