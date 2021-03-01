import React from 'react';
import './Player.css'

const Player = (props) => {
    const {name,age, born, role, image, salary, batStyle, bowlStyle } = props.player;

    return (
        <div className="player-container border border-5 rounded-3 d-flex m-3 p-2 ">

            <img src={image} alt=""/>

            <div>
                <h1>{name}</h1>
                <h5>Born : {born}</h5>
                <h5>Age : {age} Years</h5>
                <h5>Role : {role}</h5>
                <h5>Bowling Style : {bowlStyle}</h5>
                <h5>Batting Style : {batStyle}</h5>
                <h5>Auction Money : $ {salary}</h5>
            </div>
        </div>
    );
};

export default Player;