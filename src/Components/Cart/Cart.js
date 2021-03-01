import React from 'react';

const Cart = (props) => {
    const{addedPlayer, totalBudget} = props;
    console.log(addedPlayer);
    return (
        <div>
            <h1>My Team</h1>
            <h2>Player Added : {addedPlayer.length} </h2>
            <h2>Player List:</h2>
            <ul>
                {
                    addedPlayer.map(player => <li>{player.name}</li>)
                }
            </ul>
            <h2>Total Budget : $ {totalBudget}</h2>
            
        </div>
    );
};

export default Cart;