import React from 'react'

// components
import DiningCarousel from "./DiningCarousel";

function Dinging() {
    return <>
        <div>
            <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>
                Dine-Out Restaurants in MUMBAI
            </h1>
            <DiningCarousel />
        </div>
    </>
}

export default Dinging;
