import React from 'react';
import './Cart.css'
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faUsers } from "@fortawesome/free-solid-svg-icons";
const Cart = (props) => {
    const{addedPlayer, totalBudget} = props;
    console.log(addedPlayer);
    return (
        <div className="cart-container">
            <h3>My Team</h3>
            <h5>Player Added : {addedPlayer.length} </h5>
            <h5><FontAwesomeIcon icon={faUsers} /> Player List:</h5>
            <ul>
                {
                    addedPlayer.map(player => <li><b>{player.name}</b> <br/> <small>Auction Money : $ {player.salary}</small> </li>)
                }
            </ul>
            <h5><FontAwesomeIcon icon={faCoins} /> Total Budget : $ {totalBudget}</h5>
            
        </div>
    );
};

export default Cart;