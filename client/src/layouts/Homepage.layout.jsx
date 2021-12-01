import React from 'react'
import Navbar from "../components/Navbar/index"
import FoodTab from "../components/FoodTab/index"

function HomeLayout({children}) {
    return (
        <div>
            <Navbar />
            <FoodTab />
            <div className="container mx-auto px-4 lg:px-20">{ children }</div>
           
        </div>
    )
}

export default HomeLayout;
