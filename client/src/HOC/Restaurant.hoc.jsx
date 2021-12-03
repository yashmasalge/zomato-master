import React from 'react';
import { Routes,Route } from 'react-router-dom';

// Components
import RestaurantLayout from '../layouts/Restaurant.Layout';

function RestaurantLayoutHoc({component : Component, ...rest}) {
    return <>
     <Routes>
     <Route
          {...rest}
          element = {
              <RestaurantLayout>
                  <Component />
              </RestaurantLayout> 
          }
     />
     </Routes>
    </>
}

export default RestaurantLayoutHoc;
