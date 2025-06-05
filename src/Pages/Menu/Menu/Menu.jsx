import React from 'react';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
import Cover from '../../Shared/Cover/Cover';
import coverImg1 from '../../../assets/menu/banner3.jpg';
import coverImg2 from '../../../assets/menu/dessert-bg.jpeg';
import coverImg3 from '../../../assets/menu/pizza-bg.jpg';
import coverImg4 from '../../../assets/menu/salad-bg.jpg';
import coverImg5 from '../../../assets/menu/soup-bg.jpg';
import OfferedMenu from '../OfferedMenu/OfferedMenu';
import CategoryMenu from '../CategoryMenu/CategoryMenu';

const Menu = () => {
    useDynamicTitle('Our Menu')

    return (
        <div>
            {/*banner or cover and offers */}
            <Cover image={coverImg1} title="our menu"></Cover>
            <OfferedMenu></OfferedMenu>

            {/* desserts */}
            <CategoryMenu image={coverImg2} category="dessert" title="desserts"></CategoryMenu>

            {/* pizzas */}
            <CategoryMenu image={coverImg3} category="pizza" title="pizzas"></CategoryMenu>

            {/* salads */}
            <CategoryMenu image={coverImg4} category="salad" title="salads"></CategoryMenu>

            {/* soups */}
            <CategoryMenu image={coverImg5} category="soup" title="soups"></CategoryMenu>
        </div>
    );
};

export default Menu;