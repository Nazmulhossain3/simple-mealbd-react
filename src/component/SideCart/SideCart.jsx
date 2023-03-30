import React, { useEffect, useState } from 'react';
import './SideCart.css'


const SideCart = ({showMeal}) => {
    console.log(showMeal)
  
   
 
   
   
   return (
        <div className='show-side-cart'>
         {
            showMeal.map(meal => <div key={meal.idMeal}>
                 Name : {meal.strMeal}
                 Area : {meal.strArea}
            </div>)
         }   
        </div>
    );
};

export default SideCart;