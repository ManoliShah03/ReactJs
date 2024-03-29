import React, { useState, useEffect } from "react";
import './Cart.css';
function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartItems);
    }, []);

    const handleRemoveItem = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);

        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const handleIncrement = (index) => {
        const newCart = [...cart];
        newCart[index].quantity += 1;
        setCart(newCart);

        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const handleDecrement = (index) => {
        const newCart = [...cart];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
            setCart(newCart);

            localStorage.setItem("cart", JSON.stringify(newCart));
        }
    };
    const handleBuyNow = () => {

        window.location.href = "/BillingPage";
    };
    const subTotal = (item) => {
        return item.price * item.quantity;
    };

    const total = cart.reduce((acc, item) => {
        return acc + subTotal(item);
    }, 0);

    return (
        <div className="cart-page">
            <h2>Cart</h2>
            {cart.length > 0 ? (

                       
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Product Image</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>Rs{item.price}</td>
                            <img className="image" src={item.image} alt={item.name} />
                            <td>
                                <button onClick={() => handleDecrement(index)}>-</button>
                                {item.quantity}
                                <button onClick={() => handleIncrement(index)}>+</button>
                            </td>
                            <td>Rs{subTotal(item)}</td>
                            <td>
                                <button onClick={() => handleRemoveItem(index)}>X</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3"></td>
                        <td>Total:</td>
                        <td>Rs{total}</td>
                    </tr>
                    </tbody>
                </table>

            ) : (

                <p>No items in cart.</p>

            )}
            <button onClick={handleBuyNow}>CheckOut</button>

        </div>
    );
}

export default CartPage;
