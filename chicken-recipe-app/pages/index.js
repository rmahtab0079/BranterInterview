import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"

export default function Home() {
  useEffect(async() => {
    //console.log('Hello world');
   await fetch(BASE_URL)
    .then(response => response.json()).then(json => setMeals(json));
  });

  const [meals, setMeals] = useState([]);

  return (
    <>
      <h1>Chicken recipes</h1> 
      {meals.map((meal) => {
        <ul>
          <li>{meal.strMeal}</li>
          <li>{meal.strMealThumb}</li>
          <li>{meal.idMeal}</li>
        </ul>
      })}
    </>
  )
}

{/* chatGPT, GitHub copilot,  */}