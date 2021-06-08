import React from 'react'
import './Checkout.css'
import CheckoutItems from './CheckoutItems';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket},dispatch] = useStateValue();

    return (
        <div className="checkout">
            {basket?.length == 0 ?
                (
                    <div className="empty">
                        <h2>Your Amazon Cart is empty. </h2>
                        <p>Check your Saved for later items below or continue shopping.</p> 
                    </div>
                ) : (
                    <div className="basket">
                        <h2>Shopping Cart</h2>
                        {basket.map((item)=>(
                            <CheckoutItems id={item.id} title={item.title} image={item.image} price={item.price} />
                        ))}
                    </div>
                )
            }

            {basket.length >0 && (
                <div className="total">
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
