export default function MealItem({meal}) {
    return (
        <li id="meal-item">
            <article>
                <img src={meal.image} alt="meal image" />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{meal.price}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                     <button>Add to cart</button>
                    </p>
            </article>
        </li>
    )
}