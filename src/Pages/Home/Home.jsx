import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import ChefBistro from './ChefBistro/ChefBistro';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefBistro></ChefBistro>
        </div>
    );
};

export default Home;