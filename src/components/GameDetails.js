import Game from './Game';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function GameDetails({ name, background_image, rating, bestRating, id }){

    return(
        <>
        <h1>{name}</h1>
        <h1>{id}</h1>
        <img src={background_image} alt="" height="200px" width="auto"/>

        
       
        </>
    );
}
export default GameDetails;