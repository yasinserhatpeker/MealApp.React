import { currencyFormatter } from "../util/formatting";

export default function CartItem({name,quantity,price,onDecrease,onIncrease}) {
    return (
        <li className="cart-item">
            <p>
                {name} - {quantity} x  {currencyFormatter.format(price)}
            </p>
            <p>
                <button onClick={onIncrease}>+</button>
                <span>{quantity}</span>
                <button onClick={onDecrease}>-</button>
            </p>
        </li>
    )
}