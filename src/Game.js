import React, { useState } from 'react';

const choices = ['🪨', '🧻', '🔪'];

const Game = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [winnerTool, setWinnerTool] = useState(null);
    const [loserTool, setLoserTool] = useState(null);

    const handleUserChoice = (choice) => {
        const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
        setUserChoice(choice);
        setComputerChoice(computerRandomChoice);
        calculateWinner(choice, computerRandomChoice);
    };

    const calculateWinner = (user, computer) => {
        if (user === computer) {
            setResult("It's a tie!");
        } else if (
            (user === '🪨' && computer === '🔪') ||
            (user === '🧻' && computer === '🪨') ||
            (user === '🔪' && computer === '🧻')
        ) {
            setResult('You win!');
            setWinnerTool(user);
            setLoserTool(computer);
        } else {
            setResult('Computer wins!');
            setWinnerTool(computer);
            setLoserTool(user);
        }
    };

    return (
        <div className='main'>
            <h1>Rock Paper Scissors Game</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {choices.map((choice) => (
                    <button
                        key={choice}
                        className='btn'
                        onClick={() => handleUserChoice(choice)}
                    >
                        {choice}
                    </button>
                ))}
            </div>
            {userChoice && computerChoice && (
                <div className='results'>
                    <h2>Your choice: {userChoice}</h2>
                    <h2>Computer's choice: {computerChoice}</h2>
                    <h3>{result}</h3>
                    <div>
                        {result !== "It's a tie!" ?
                        <div>
                            {winnerTool && winnerTool === userChoice ?
                                <div>
                                    {winnerTool && <span  className='span'>{winnerTool}</span>}
                                    {loserTool && <span className='span2 redCross'>{loserTool}</span>}
                                </div>
                                :
                                <div>
                                    {loserTool && <span className='span2 redCross'>{loserTool}</span>}
                                    {winnerTool && <span  className='span'>{winnerTool}</span>}
                                </div>


                            }



                        </div>

                     :
                            <div>
                                {userChoice}{computerChoice}
                            </div>}
                        </div>
                </div>
            )}
        </div>
    );
};

export default Game;
