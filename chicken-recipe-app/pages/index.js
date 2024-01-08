import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"

export default function Home() {
  const [meals, setMeals] = useState(null);
  useEffect(() => {
   // Define the function to fetch data
   const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      const data = await json.meals;
      setMeals(data);
      
      //setMeals(json.meals); // Make sure the structure of the response is correct
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // Call the function
  fetchData();
  }, []);

  return (
    <>
      <h1>Chicken recipes</h1>
      <ul> 
        {meals && meals.map((meal) => (
          <li key={meal.idMeal}> 
            <div>{meal.strMeal}</div>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div>{meal.idMeal}</div>
          </li>
        ))}
      </ul>
    </>
  )
}

{/* chatGPT, GitHub copilot,  */}