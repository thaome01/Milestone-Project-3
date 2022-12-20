import React from 'react'
import NavBar from '../components/NavBar';
import Card from "react-bootstrap/Card";


function silverTempest() {


    return (
        <>
            < NavBar />
            <Card>
            <div className="card">
        <h2>Pokemon Carts</h2>
        <div>
            <div>
            <img src="/img/card-1.jpg" alt="pokemon-card" className="card-one"></img>
            </div>
            <div>
                <div>
                    <h3>Card: LugiaV</h3>
                    <p>$100.00</p>
                </div>
                <div>
                    <button id="quantity-down">-</button>
                    <button id="quantity-up">+</button>
                    <div>Quantity: 1</div>
                    <p>Total Price available at checkout</p>
                </div>
            </div>
        </div>
        <div>
            <p>Continue to:</p>
            <button>Checkout</button>
            <button>remove</button>
        </div>
    </div>
    </Card>
           
        </>
    )
}

export default silverTempest