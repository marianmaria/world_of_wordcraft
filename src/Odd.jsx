import './App.css'
import { useState } from 'react'

function OddOneOut() {
    const [ counter, setCounter ] = useState(0);
    const [ show, setShow] = useState(false);
    const [ reveal, setReveal] = useState(false);

    function showAnswer() {
        setShow(!show);
    };

    function clickCounter() {
        setCounter(counter + 1);
        if (counter === 2) {
            setReveal(!reveal)
        }
    }
    
    const tryNumber = 3;

    return (<>
        <button 
        className='odd-button'
        disabled = {reveal || show}
        onClick={clickCounter}
        >vivaldi</button><br/>
        <button 
        className='odd-button'
        disabled = {reveal || show}
        onClick={clickCounter}
        >opera</button><br/>
        <button 
        className='odd-button'
        disabled = {show || reveal}
        onClick={showAnswer}
        >orchestra</button><br/>
        <button 
        className='odd-button'
        disabled = {reveal || show}
        onClick={clickCounter}
        >arc</button><br/>
        <p>{ show && <h3 className='correct-answer'>Correct! 'Orchestra' is not a web browser but the rest is.</h3> }</p>
        <p>{ reveal && <h3 className='error'>Too bad! The correct answer is: "orchestra". The rest are web browsers.</h3> }</p>
        <p className='counter-try'>You have <b>{tryNumber - counter}</b> tries left!</p>
        </>
    )
}

export default OddOneOut