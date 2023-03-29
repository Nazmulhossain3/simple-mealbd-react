import React from 'react';
import './Meal.css'

const Meal = ({meal,handleShowName}) => {
    const{strMeal,strMealThumb,strArea,strCategory} = meal
   
    return (
     <div className='single-meal-container'>
           <div className="card" style={{width:'20rem'}}>
           <img className='w-100 h-75' src={strMealThumb} alt="..."/>
           <div className="card-body">
          <h6 className="card-text">Name :{strMeal}</h6>
          <h6 className="card-text">Category : {strCategory}</h6>
          <h6>Area : {strArea}</h6>
         </div>

        <button className='btn btn-info' onClick={()=>handleShowName()}>Show Name</button>

        </div>
    
    </div>
    );
};

export default Meal;