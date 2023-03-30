import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import SideCart from '../SideCart/SideCart';
import './Meals.css'

const Meals = () => {
   const [meals,setMeals] = useState([])
   const [showMeal,setShowMeal] = useState([])
   
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

   const handleShowName = (singleMeal) => {
   const newMeal = [...showMeal,singleMeal]
    setShowMeal(newMeal)
    localStorage.setItem('name',JSON.stringify(newMeal))


    
    // const getFromLocalStorage = JSON.parse(localStorage.getItem('name'))
       
        // if(getFromLocalStorage){
        
        // localStorage.setItem('name',JSON.stringify([...getFromLocalStorage,singleMeal.strMeal]))
        // }
        // else{
        //     localStorage.setItem('name',JSON.stringify([singleMeal.strMeal]))
        // }
  
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