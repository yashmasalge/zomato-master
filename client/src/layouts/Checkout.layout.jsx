import React,{ useEffect } from 'react';

// redux
import { getCart } from "../redux/reducers/cart/cart.action";
import { useDispatch } from "react-redux";

// Components
import Navbar from '../components/Navbar/CheckoutNavbar';


function CheckoutLayout(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
      }, []);

    return <> 
    <Navbar />
    <div className='container mx-auto px-4 lg:px-20'>
        {props.children}
    </div>
    </>
}

export default CheckoutLayout;
