import React from 'react';
import './Player.css'
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
const Player = (props) => {
    const {name,age, born, role, image, salary, batStyle, bowlStyle} = props.player;

    return (
        <div className="player ms-5 ">

            <img src={image} alt=""/>

            <div>
                <h3>{name}</h3>
                <h6>Born : {born}</h6>
                <h6>Age : {age} Years</h6>
                <h6>Role : {role}</h6>
                <h6>Bowling Style : {bowlStyle}</h6>
                <h6>Batting Style : {batStyle}</h6>
                <h6>Auction Money : $ {salary}</h6>

                <button type="button" className="add-button btn btn-primary" onClick={()=>props.handleAddPlayer(props.player)} ><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
            </div>
        </div>
    );
};

export default Player;