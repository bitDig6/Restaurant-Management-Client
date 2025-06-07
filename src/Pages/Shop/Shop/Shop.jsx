import { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuTab from '../MenuTab/MenuTab';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';

const Shop = () => {
    useDynamicTitle("Our Shop");
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Cover image={coverImg} title="Our Shop"></Cover>
            <section className='my-20'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERTS</Tab>
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