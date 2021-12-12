import React from 'react';

// Components
import Navbar from '../components/Navbar/CheckoutNavbar';

function CheckoutLayout(props) {
    return <> 
    <Navbar />
    <div className='container mx-auto px-4 lg:px-20'>
        {props.children}
    </div>
    </>
}

export default CheckoutLayout;
