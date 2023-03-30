import React, { useEffect, useState } from 'react';


const SideCart = ({showMeal}) => {
    console.log(showMeal)
  
   
 
   
   
   return (
        <div>
         {
            showMeal.map(meal => <div key={meal.idMeal}> name : {meal.strMeal}</div>)
         }   
        </div>
    );
};

export default SideCart;