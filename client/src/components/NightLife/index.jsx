import React from 'react'

// Components
import NightLifeCarousel from './NightLifeCarousel'

function NightLife() {
    return <>
        <div className='mb-10'> 
        <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>
            NightLife in MUMBAI
        </h1>
            <NightLifeCarousel />
        </div>
    </>
}

export default NightLife;
