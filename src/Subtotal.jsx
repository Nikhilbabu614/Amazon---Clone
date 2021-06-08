import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { subtotal } from './reducer';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Subtotal() {

    const [{basket} ,dispatch] = useStateValue();

    return (
        <div className="subtotal">
                <p><CheckCircleIcon className="subtotal_icon"/>Your order is eligible for FREE Delivery. Select this option at checkout. Details</p>
            <CurrencyFormat
                
                renderText={(value)=>(
                    <>
                        <p>Subtotal ({basket.length} items): <strong>{`${value}`}</strong> </p>
                        <div className="gift">
                            <input type="checkbox"/> This order contains a gift
                        </div>
                    </>
                )}

                decimalScale={2}
                value={subtotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
                            <button className="subtotal_button">Proceed to Buy</button>
        </div>
    )
}

export default Subtotal
