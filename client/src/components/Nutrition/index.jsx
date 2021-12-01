import React from 'react'

// Components
import NutritionHeroCarousel from "./NutritionHeroCarousel";
import NutritionCarousel from "./NutritionCarousel";
import NutritionCard from './NutritionCard';
function Nutrition() {
    return <>
        <div>
            <NutritionHeroCarousel />
            <div className='my-6'>
                <NutritionCarousel />
            </div>
            <div className='flex justify-between flex-wrap'>
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp" />
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp" />
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp" />
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp" />
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp" />
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp" />
            </div>
        </div>
    </>
}

export default Nutrition;
