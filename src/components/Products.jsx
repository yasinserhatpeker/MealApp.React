import { useEffect, useState } from "react";

export default function Products() {
const [loadedMeals,setLoadedMeals]=useState([]);

useEffect(()=> {
    async function fetchingMeals() {
       const response =  await fetch('http://localhost:3000/meals');
    
       if(!response.ok) {
          // will be added later
       }
       const meals= await response.json();
       setLoadedMeals(meals);
    }
    fetchingMeals();
    
},[])

  return (
        <ul id="meals">
            {loadedMeals.map((meal)=> (
                <li key={meal.id}>{meal.name}</li>
           )
        )}
        </ul>
     )
}