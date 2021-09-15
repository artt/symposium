import React from 'react'

import Reveal from 'reveal.js'
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import ChartComponent, { defaults } from 'test-react-chartjs-2'
import merge from 'lodash.merge'

import Logo from './components/Logo'

import {ReactComponent as PicNursingHome} from './images/nursing-home.svg'
import picInternet from './images/world.png'
import picThailand from './images/thailand.png'
import picFamily from './images/people.png'
import picTrend from './images/trend.png'

import styles from './css/theme/source/_variables.module.scss'
import "../node_modules/reveal.js/dist/reveal.css"
import "./css/theme/source/pier-dark.scss"
import "./css/main.scss"

console.log(styles.baseSize)
const baseSize = parseInt(styles.baseSize.replace("px", ""))

merge(defaults, {
  color: styles.textColor,
  backgroundColor: styles.secondaryColor,
  borderColor: styles.secondaryColor,
  font: {
    family: "Dindan",
    size: 1.5*baseSize,
  },
  layout: {
    padding: 1*baseSize,
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
        size: 2*baseSize,
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
    deck.current.initialize({
      width: 1920,
      height: 1080,
      margin: 0.2,
    })
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


        {// Cover
        }
        <section>
          <h1>
            โครงสร้างเศรษฐกิจสังคมไทย<br />
						<orange>ความเปราะบางท่ามกลางความเปลี่ยนแปลง</orange>
          </h1>
          <div style={{height: "4rem"}} />
          <h4>
            สถาบันวิจัยเศรษฐกิจป๋วย อึ๊งภากรณ์<br />
            BOT Symposium 2021
          </h4>
          <div style={{height: "2rem"}} />
          <Logo />
        </section>


        <section id="outline">
          <h2>Outline</h2>
          <div className="grid">
            
            <img src={picInternet} style={{filter: 'invert(80%)'}} />
            <div>
              ความเปลี่ยนแปลงสำคัญที่กำลังเกิด<br />
              <orange>มีอะไรบ้าง?</orange>
            </div>
            
            <img src={picTrend} style={{filter: 'invert(80%)'}} />
            <div>
              ความเปราะบางของ "โครงสร้างเศรษฐกิจไทย" ที่มีอยู่แล้ว<br />
              <orange>จะถูกกระทบอย่างไร?</orange>
            </div>
            
            <img src={picFamily} style={{filter: 'invert(80%)'}} />
            <div>
              ความเปราะบางของ "โครงสร้างสังคมไทย"<br />
              <orange>เป็นอย่างไร?</orange>
            </div>
            
            <img src={picThailand} />
            <div>
              แล้วประเทศไทย<br />
              <orange>จะทำอย่างไรต่อไป?</orange>
            </div>
          </div>
        </section>

        <section>
					<h2>
						ความเปลี่ยนแปลงที่กำลังเกิด<br />
						<orange>ส่งผลกระทบต่อความเปราะบางที่มีอยู่แล้ว</orange>
          </h2>
				</section>


        {// ตรงนี้เดี๋ยวทำเป็นรูปเดียว ที่มี megatrends ห้าอย่าง ค่อย ๆ โชว์ทีละอย่าง
         // geopolitics
         // technology
         // global warming
         // aging society
         // covid-19 scar
        }
        <section>
					<h2>
						Megatrends สำคัญ
          </h2>
          <div style={{width: '70%', marginLeft: "auto", marginRight: "auto"}}>
            <PicNursingHome />
          </div>
				</section>


        <section>
          <h2>
            <orange>#1</orange> เศรษฐกิจไทยเปราะบางต่อความขัดแย้งทางภูมิรัฐศาสตร์ ตามการพึ่งพาจีนในระดับสูง
          </h2>

          ตัวอย่างความเปราะบางของภาคการท่องเที่ยวไทย
          <ul>
            <li>
              รายได้จากนักท่องเที่ยวต่างชาติคิดเป็น <orange>11% ของ GDP ไทย</orange><br />
              เกี่ยวข้องกับ<orange>แรงงานกว่า 7.5 ล้านคน</orange>
            </li>
            <li>ภาคการท่องเที่ยวไทยพึ่งพานักท่องเที่ยวจีนถึง 28% ของนักท่องเที่ยวท้ังหมด</li>
          </ul>

        </section>

        <section>
          <section>
            <h2>
              <orange>#2</orange> ความก้าวหน้าทางเทคโนโลยี อาจทำให้ไทยตกขบวนรถไฟได้ หากปรับตัวไม่ทัน
            </h2>
            <div>
              ตัวอย่างความเปราะบางของโครงสร้างการส่งออกไทย
            </div>
          </section>

          <section>
            <h2>
              <orange>#2</orange> ความก้าวหน้าทางเทคโนโลยี อาจทำให้ไทยตกขบวนรถไฟได้ หากปรับตัวไม่ทัน
            </h2>
            <div>
              ตัวอย่างความเปราะบางของการพึ่งพา platform ต่างประเทศ:<br />
              คนไทยพึ่งพา platform ต่างประเทศในการซื้อสินค้าและบริการสูงมาก
            </div>
            <ChartComponent
              type="bar"
              height="120"
              ref={el => charts.current['foreign-platforms'] = el}
              data={{
                labels: ["Shopee", "Lazada", "Facebook", "Instagram", "LINE", "Kaidee", "lnwShop", "WeLoveShopping", "Shopping", "ThailandPostmart"],
                datasets: [
                  {
                    data: [91.0, 72.9, 55.1, 42.1, 41.6, 6.6, 6.3, 3.3, 2.4, 1.1],
                    backgroundColor: Array(5).fill(styles.greenColor).concat(Array(5).fill(styles.secondaryColor)),
                  }
                ]
              }}
              options={{
                indexAxis: 'y',
                plugins: {
                  title: {
                    display: true,
                    text: "ช่องทางออนไลน์ที่คนไทยซื้อสินค้าและบริการ",
                  },
                  legend: {
                    display: false,
                  }
                }
              }}
            />

          </section>

        </section>

        <section>
          <h2>
            <orange>#3</orange> ภาวะโลกร้อน เป็นภัยเงียบ และจะส่งผลใหญ่หลวงต่อไทยหากไม่เร่งปรับตัว
          </h2>
          <div>
            ตัวอย่างความเปราะบางของภาคอุตสาหกรรมไทย:<br />
            กรุงเทพฯ และปริมณฑล มีความเสี่ยงต่อน้ำท่วมจากระดับน้ำทะเลที่เพิ่มขึ้น
          </div>
        </section>

        <section>
					<h2>
						แต่ประเด็นทางเศรษฐกิจ<br />
						ไม่ได้เป็นความเปราะบางเพียงอย่างเดียว<br />
						<orange>ต้องพิจารณาประเด็นทางสังคมควบคู่ไปด้วย</orange>
          </h2>
				</section>
        
        <section>
          <h2>สังคมไทยมีความเชื่อใจต่อกันลดลงอย่างต่อเนื่อง…</h2>
          <ChartComponent
            type="bar"
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
          <ChartComponent
            type="line"
            height="120"
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
                title: {
                  display: true,
                  text: "ความคิดทางการเมืองจาก World Values Survey",
                },
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
