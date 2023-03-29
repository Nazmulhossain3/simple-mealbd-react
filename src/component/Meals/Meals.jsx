import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import SideCart from '../SideCart/SideCart';
import './Meals.css'

const Meals = () => {
   const [meals,setMeals] = useState([])
   
   useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => setMeals(data.meals))

   },[])
    
   return (
         <div className='meals-container'>
            <div className="single-meal">
            {
                meals.map(meal => <Meal meal={meal}></Meal>)
            }
            </div>
            
            <div className="show-meal">
                <SideCart></SideCart>
            </div>
            
        </div>
    );
};

export default Meals;