import React from 'react'

// import './App.css';

import Reveal from 'reveal.js'

import "../node_modules/reveal.js/dist/reveal.css"
import "../node_modules/reveal.js/dist/theme/simple.css"

function App() {

  let deck

  React.useEffect(() => {
    deck = new Reveal()
    deck.initialize()
  }, [])

  return (
    <div className="reveal">
      <div className="slides">
        <section>
          <h1>Heading</h1>
          Slide 1
        </section>
        <section>Slide 2</section>
      </div>
    </div>
  );
}

export default App;
