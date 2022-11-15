import React from 'react';
import Banner from '../Banner.js/Banner';
import FoodItems from '../FoodItems.js/FoodItems';
import LatestFoodItems from '../LatestFoodItems/LatestFoodItems';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FoodItems/>
            <LatestFoodItems/>
        </div>
    );
};

export default Home;