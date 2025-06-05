import React from 'react';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';

const Menu = () => {
    useDynamicTitle('Our Menu')

    return (
        <div>
            <h2>Our menu</h2>
        </div>
    );
};

export default Menu;