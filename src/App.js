import React from 'react'

import Reveal from 'reveal.js'
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import { Bar } from 'test-react-chartjs-2';

import "../node_modules/reveal.js/dist/reveal.css"
import "./css/theme/source/pier-dark.scss"

function App() {

  const deck = React.useRef(null)
  const [animatedCharts, setAnimatedCharts] = React.useState([])

  const [data, setData] = React.useState([10, 20, 30])

  const trust = React.useRef(null)

  React.useEffect(() => {
    deck.current = new Reveal({
      // plugins: [ Markdown ],
    })
    deck.current.initialize()
    deck.current.addEventListener('slidechanged', () => {
      // const curCharts = document.querySelectorAll('.present .chart canvas')
      if (trust.current.canvas.closest('.present')) {
        trust.current.reset()
        trust.current.update()
      }
    })
  }, [])  

  return (
      <div className="slides">

        <section>
          <h2>
            โครงสร้างเศรษฐกิจสังคมไทย<br />
						<span className="orange">ความเปราะบางท่ามกลางความเปลี่ยนแปลง</span>
          </h2>
        </section>

        <section>
					<div class="title">
						แต่ประเด็นทางเศรษฐกิจ<br />
						ไม่ได้เป็นความเปราะบางเพียงอย่างเดียว<br />
						<span class="orange">ต้องพิจารณาประเด็นทางสังคมควบคู่ไปด้วย</span>
					</div>
				</section>

        <section>
          <div className="chart">
            <Bar
              ref={trust}
              data={{
                labels: ["2007", "2013", "2018"],
                datasets: [
                  {
                    data: data,
                    label: "คะแนนความเชื่อใจจาก World Values Survey"
                  }
                ]
              }}
            />
          </div>
          <button onClick={() => setData([30, 20, 10])}>Change Data</button>
        </section>

      </div>
  );
}

export default App;
