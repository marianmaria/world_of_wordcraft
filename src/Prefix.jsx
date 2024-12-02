import './App.css'
import { useState } from 'react'

function PreFixMe() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
  
    if (status === 'success') {
      return <>
      <h3><span className='bold'>light</span>stick</h3>
      <h3><span className='bold'>light</span>weight</h3>
      <h3><span className='bold'>light</span>bulb</h3>
      <h3 className='correct-answer'>Correct! 'Light' is the common prefix.</h3>
      </>
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      setStatus('submitting');
      try {
        await submitForm(answer);
        setStatus('success');
      } catch (err) {
        setStatus('typing');
        setError(err);
      }
    }
  
    function handleTextareaChange(e) {
      setAnswer(e.target.value);
    }
  
    return (
      <>
        <h3><b>{answer.padStart(5,"_")}</b>stick</h3>
        <h3><b>{answer.padStart(5,"_")}</b>weight</h3>
        <h3><b>{answer.padStart(5,"_")}</b>bulb</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className='input-prefix'
            value={answer}
            maxLength="5"
            onChange={handleTextareaChange}
            disabled={status === 'submitting'}
          />
          <br />
          <button
            className='try-button' 
            disabled={
            answer.length === 0 ||
            status === 'submitting'
          }>
            Fix me
          </button>
          {error !== null &&
            <p className="error">
              {error.message}
            </p>
          }
        </form>
      </>
    );
  }
  
  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'light'
        if (shouldError) {
          reject(new Error('Good guess but try again!'));
        } else {
          resolve();
        }
      }, 1000);
    });
  }

export default PreFixMe