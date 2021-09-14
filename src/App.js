import React from 'react'

import Reveal from 'reveal.js'
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import { Bar, Line, defaults } from 'test-react-chartjs-2'
import merge from 'lodash.merge'

import styles from './css/theme/source/_variables.module.scss'
import "../node_modules/reveal.js/dist/reveal.css"
import "./css/theme/source/pier-dark.scss"


merge(defaults, {
  color: styles.textColor,
  backgroundColor: styles.secondaryColor,
  borderColor: styles.secondaryColor,
  font: {
    family: "Dindan",
    size: 16,
  },
  layout: {
    padding: 40,
  },
  scale: {
    grid: {
      color: styles.gridColor,
      borderColor: styles.textColor
    }
  },
  plugins: {
    title: {
      font: {
        size: 20,
      }
    },
    legend: {
      position: 'bottom',
    },
  }
})

function App() {

  const deck = React.useRef(null)
  const charts = React.useRef({})

  const [curFragment, setCurFragment] = React.useState(0)

  function updateFragment() {
    setCurFragment(parseInt(deck.current.getCurrentSlide().getAttribute('data-fragment')) + 1)
  }

  function animateCurrentChart() {
    setTimeout(() => {
      updateFragment()
      Object.keys(charts.current).forEach(c => {
        const curChart = charts.current[c]
        if (curChart.canvas.closest('.present')) {
          console.log(curChart)
          curChart.reset()
          curChart.update()
        }
      })
    }, 0)
  }

  React.useEffect(() => {
    deck.current = new Reveal({
      // plugins: [ Markdown ],
    })
    deck.current.initialize()
    deck.current.addEventListener('slidechanged', animateCurrentChart)
    deck.current.addEventListener('fragmentshown', updateFragment)
    deck.current.addEventListener('fragmenthidden', updateFragment)
    return () => {
      deck.current.removeEventListener('slidechanged', animateCurrentChart)
      deck.current.removeEventListener('fragmentshown', updateFragment)
      deck.current.removeEventListener('fragmenthidden', updateFragment)
    }
  }, [])

  React.useEffect(() => {
    console.log("Current Fragment", curFragment)
  }, [curFragment])

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
          <h2>สังคมไทยมีความเชื่อใจต่อกันลดลงอย่างต่อเนื่อง…</h2>
          <Bar
            ref={el => charts.current['trust'] = el}
            data={{
              labels: ["2007", "2013", "2018"],
              datasets: [
                {
                  data: [41, 32, 29],
                  backgroundColor: styles.secondaryColor,
                }
              ]
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "คะแนนความเชื่อใจจาก World Values Survey",
                },
                legend: {
                  display: false,
                }
              }
            }}
          />
        </section>

        <section>
          <h2>…ขณะที่มีกลุ่มความคิดทางการเมือง<br />ไปทางซ้ายมากขึ้น</h2>
          <Line
            ref={el => charts.current['political_shift'] = el}
            data={{
              labels: [...Array(10).keys()],
              datasets: [
                {
                  data: [0.02, 0.02, 0.015, 0.04, 0.25, 0.2, 0.24, 0.16, 0.03, 0.03],
                  label: "2008",
                  tension: 0.4,
                },
                {
                  data: [[0.02, 0.02, 0.015, 0.04, 0.25, 0.2, 0.24, 0.16, 0.03, 0.03], [0.02, 0.018, 0.021, 0.06, 0.36, 0.2, 0.115, 0.11, 0.03, 0.05]][curFragment],
                  label: "2018",
                  tension: 0.4,
                  borderColor: styles.thirdColor,
                },
              ]
            }}
            options={{
              radius: 0,
              scales: {
                y: {
                  max: 0.4
                }
              },
              plugins: {
                legend: {
                  labels: {
                    pointStyle: 'line',
                    usePointStyle: true,
                  }
                }
              }
            }}
          />
          <div class="fragment" />
        </section>

      </div>
  );
}

export default App;
