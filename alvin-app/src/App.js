import "./styles.css";
import { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

const url1 =
  "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
const url2 = "https://api.mypanel.ai/get_home_timeline";

export default function App() {
  // const [tweets, setTweets] = useState([]);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    const res = await fetch(url1);
    const body = await res.json();
    const data = body.meals;
    console.log(data);
    // const [data] = body; // body = [item1, item2, item3]
    setMeals(data);
  };

  return (
    <div className="App">
      <span>Search:</span>

      {meals.map((meal) => {
        const { idMeal, strMeal, strMealThumb } = meal;
        return (
          <div key={idMeal}>
            <p>{strMeal}</p>
            <img src={strMealThumb} alt={strMeal} className="meal-img" />
          </div>
        );
      })}
    </div>
  );
}