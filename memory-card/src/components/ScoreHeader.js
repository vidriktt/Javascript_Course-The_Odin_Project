import React, { useState, useEffect } from "react";
import '../styles/ScoreHeader.css';

const ScoreHeader = ({score, highScore}) => {
    return (
        <div id="score-header">
            <h1>MEMORY CARD GAME</h1>

            <div id="score-div">
                <h3>Score: {score}</h3><span/>
                <h3>High score: {highScore}</h3>
            </div>
        </div>
    );
};

export default ScoreHeader;
