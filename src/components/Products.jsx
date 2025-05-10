import MealItem from "./MealItem";
import useHTTP from "../hooks/useHTTP";

export default function Products() {


  const {data:loadedMeals, isLoading, error} = useHTTP('http://localhost:3000/meals',{},[]);

  if(isLoading) {
   return <p>the data is fetching...</p>
  }

  return (
        <ul id="meals">
            {loadedMeals.map((meal)=> (
                <MealItem key={meal.id} meal={meal}/>
           )
        )}
        </ul>
     )
}