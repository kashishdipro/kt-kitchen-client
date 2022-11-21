import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner.js/Banner';
import FoodItems from '../FoodItems.js/FoodItems';
import LatestFoodItems from '../LatestFoodItems/LatestFoodItems';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <FoodItems/>
            <LatestFoodItems/>
        </div>
    );
};

export default Home;