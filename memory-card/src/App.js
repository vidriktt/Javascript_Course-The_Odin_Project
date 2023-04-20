import React, { useState, useEffect } from "react";
import './styles/App.css';
import ScoreHeader from "./components/ScoreHeader";
import Cards from "./components/Cards";

const App = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedArr, setClickedArr] = useState([]);

    useEffect(() => {
        const changeColorOnClick = () => {
            // if (color === "black") {
            //     setColor("red");
            // } else {
            //     setColor("black");
            // }
        };

        document.addEventListener("click", changeColorOnClick);

        return () => {
            document.removeEventListener("click", changeColorOnClick);
        };
    });

    function onClickCard(target) {
        if (!clickedArr.includes(target.id)) {
            setScore(score + 1);

            if (score >= 11) {
                alert("YOU WON!")
                setHighScore(score + 1);
                setScore(0);
                setClickedArr([]);
                return;
            }

            setClickedArr([...clickedArr, target.id]);
        } else {
            setScore(0);
            setClickedArr([]);

            if (score > highScore) {
                setHighScore(score);
            }
        }
    }

    return (
        <>
            <ScoreHeader score={score} highScore={highScore} />
            <Cards onClickCard={onClickCard} />
        </>
    );
};

export default App;
