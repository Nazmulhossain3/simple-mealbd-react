import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import SideCart from '../SideCart/SideCart';
import './Meals.css'

const Meals = () => {
   const [meals,setMeals] = useState([])
   const [showMeal,setShowMeal] = useState([])
   const [isDisabled, setIsDisabled] = useState(true);

   
   useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => setMeals(data.meals))

   },[])

   useEffect(()=>{

    const getFromLocalStorage = JSON.parse(localStorage.getItem('name'))
   if(getFromLocalStorage){
    setShowMeal(getFromLocalStorage)
   }
    
   },[])

   
   const handleShowName = (singleMeal,e) => {
    e.target.disabled = true
   const findMeal = showMeal.find(p => p.idMeal=== singleMeal.idMeal)
    if(!findMeal){
    const newMeal = [...showMeal,singleMeal]
    setShowMeal(newMeal)
    localStorage.setItem('name',JSON.stringify(newMeal))
    }

}
    
   return (
         <div className='meals-container'>
            <div className="single-meal">
            {
                meals.map(meal => <Meal meal={meal} handleShowName={handleShowName}></Meal>)
            }
            </div>
            
            <div className="show-meal">
                <SideCart showMeal={showMeal}></SideCart>
            </div>
            
        </div>
    );
};

export default Meals;