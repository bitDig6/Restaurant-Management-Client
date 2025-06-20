import { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuTab from '../MenuTab/MenuTab';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
import { useParams } from 'react-router';

const Shop = () => {
    useDynamicTitle("Our Shop");
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    return (
        <div>
            <Cover image={coverImg} title="Our Shop"></Cover>
            <section className='my-20'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <MenuTab category="salad"></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab category="pizza"></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab category="soup"></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab category="dessert"></MenuTab>
                    </TabPanel>
                    <TabPanel>
                        <MenuTab category="drinks"></MenuTab>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default Shop;