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
    if (!deck.current.getCurrentSlide().getAttribute('data-fragment')) {
      setCurFragment(0)
    }
    else {
      setCurFragment(parseInt(deck.current.getCurrentSlide().getAttribute('data-fragment')) + 1)
    }
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
      disableLayout: true,
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

        {/* {// Cover
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
                scales: {
                  y: {
                    min: [5, 0][curFragment],
                    max: 9,
                  },
                },
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
            <div class="fragment" />

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
        </section> */}








        {/*
          Social Divide
        */}


        <section>
					<h2>
						แต่ประเด็นทางเศรษฐกิจ<br />
						ไม่ได้เป็นความเปราะบางเพียงอย่างเดียว<br />
						<orange>ต้องพิจารณาประเด็นทางสังคมควบคู่ไปด้วย</orange>
          </h2>
				</section>

        <section>
					<h2>
						มีความสัมพันธ์ระหว่างความเหลื่อมล้ำทางเศรษฐกิจกับความสมานฉันท์ในสังคม (social cohesion)
          </h2>
            <section>
              <div style={{height: '300px'}} />
              <ChartComponent
                type="scatter"
                height={120}
                ref={el => charts.current['trust-gini'] = el}
                data={{
                  datasets: [
                    {
                      type: "scatter",
                      data: [{x: 25.84000015, y: 0.300940037}, {x: 27.32500076, y: 0.228056431}, {x: 28.10000038, y: 0.128013209}, {x: 31.39999962, y: 0.329317272}, {x: 31.64999962, y: 0.07333333}, {x: 31.79999924, y: 0.445680618}, {x: 32.09999847, y: 0.233082712}, {x: 32.40000153, y: 0.129166663}, {x: 32.75, y: 0.065964758}, {x: 32.79999924, y: 0.138245031}, {x: 33.23333359, y: 0.466930151}, {x: 34, y: 0.205833331}, {x: 34.40000153, y: 0.150833338}, {x: 34.5, y: 0.169134736}, {x: 34.57500076, y: 0.084471963}, {x: 35, y: 0.118699186}, {x: 35.09999847, y: 0.130063519}, {x: 35.5, y: 0.276666671}, {x: 35.52500153, y: 0.114002943}, {x: 36.13999939, y: 0.288886756}, {x: 37.29999924, y: 0.229347616}, {x: 38.47999954, y: 0.046373185}, {x: 38.5, y: 0.163479924}, {x: 38.54999924, y: 0.634894729}, {x: 40.57500076, y: 0.148098737}, {x: 41.09999847, y: 0.195734963}, {x: 41.22499847, y: 0.370217174}, {x: 41.82500076, y: 0.191813305}, {x: 42, y: 0.13995859}, {x: 42.84000015, y: 0.041612707}, {x: 43.45000076, y: 0.053309843}, {x: 44.15999985, y: 0.08514756}, {x: 44.40000153, y: 0.129027218}, {x: 45.36000061, y: 0.057500001}, {x: 45.84999847, y: 0.104989827}, {x: 47.29999924, y: 0.021399178}, {x: 50.59999847, y: 0.045394737}, {x: 53.15999985, y: 0.06524758}],
                      backgroundColor: styles.textColor,
                      borderWidth: 0,
                      pointRadius: 8,
                    },
                    {
                      type: "line",
                      data: [{x: 25, y: -0.0078*25+0.4741}, {x: 55, y: -0.0078*55+0.4741}],
                      backgroundColor: styles.textColor,
                      pointRadius: 0,
                    }
                  ]
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  }
                }}
              />
            </section>
            <section>
              PIC
            </section>
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
              scales: {
                y: {
                  // max: 100,
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "คะแนนความเชื่อใจจาก World Values Survey (0–100)",
                },
                legend: {
                  display: false,
                }
              }
            }}
          />
          <div className="note">xxx</div>
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
