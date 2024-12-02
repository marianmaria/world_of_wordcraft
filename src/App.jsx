import './App.css'
import PreFixMe from './Prefix'
import OddOneOut from './Odd'
import ThreadOfThought from './Thread'

function App() {
  return (
    <>
      <header>
        <h1>World of Wordcraft</h1>
      </header>
      <main>
        <div className="game-container-prefix">
          <h2>Pre-Fix Me</h2>
          <div className="container-border">
              <div className="container-content-prefix">
                <PreFixMe/>
              </div>
          </div>
        </div>
        <div className="game-container-odd">
          <h2>Odd One Out</h2>
          <div className="container-border">
              <div className="container-content-odd">
                <OddOneOut/>
              </div>
          </div>
        </div>
        <div className="game-container-thread">
          <h2>Thread of Thought</h2>
          <div className="container-border">
              <div className="container-content-thread">
              <ThreadOfThought/>
              </div>
          </div>
        </div>
      </main>
      <img src={'/Wow-logo-word.png'} className="wow-logo" alt="wordcraft logo"/>
    </>
  )
}

export default App
