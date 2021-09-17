import React from 'react'

import Reveal from 'reveal.js'
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import Chart from './components/Chart'
import ComparePop from './components/ComparePop'
import SocialOutline from './components/SocialOutline'
import ChartComponent, { defaults } from 'test-react-chartjs-2'
import merge from 'lodash.merge'

import Logo from './components/Logo'

import {ReactComponent as PicNursingHome} from './images/nursing-home.svg'
import picInternet from './images/world.png'
import picThailand from './images/thailand.png'
import picFamily from './images/people.png'
import picTrend from './images/trend.png'
import picSocialQuality from './images/social-quality.png'
import picDemographics from './images/demographics.png'
import picSocialMedia from './images/social-media.png'


import styles from './css/theme/source/_variables.module.scss'
import "../node_modules/reveal.js/dist/reveal.css"
import "./css/theme/source/pier-dark.scss"
import "./css/main.scss"



const baseSize = parseInt(styles.baseSize.replace("px", ""))

merge(defaults, {
  color: styles.textColor,
  backgroundColor: styles.secondaryColor,
  borderColor: styles.secondaryColor,
  font: {
    family: "Dindan",
    size: 1*baseSize,
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
        size: 1.5*baseSize,
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
        if (curChart.canvas.closest('.present:not(.stack)')) {
          console.log(curChart)
          curChart.reset()
          curChart.update()
        }
      })
    }, 0)
  }

  const _W = 1920
  const _H = 1080

  function setScale() {
    const scale = Math.min(window.innerWidth / _W, window.innerHeight / _H)
    document.documentElement.style.setProperty('--scale', scale);
  }

  React.useEffect(() => {
    setScale()
    deck.current = new Reveal({
      // plugins: [ Markdown ],
    })
    deck.current.initialize({
      width: _W,
      height: _H,
      margin: 0.2,
      disableLayout: true,
    })
    deck.current.addEventListener('slidechanged', animateCurrentChart)
    deck.current.addEventListener('fragmentshown', updateFragment)
    deck.current.addEventListener('fragmenthidden', updateFragment)
    window.addEventListener('resize', setScale);
    return () => {
      deck.current.removeEventListener('slidechanged', animateCurrentChart)
      deck.current.removeEventListener('fragmentshown', updateFragment)
      deck.current.removeEventListener('fragmenthidden', updateFragment)
      window.removeEventListener('resize', setScale);
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
          <div className="vertical-center">
            <div>
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
            </div>
          </div>
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
          <div className="vertical-center">
            <h2>
              ความเปลี่ยนแปลงที่กำลังเกิด<br />
              <orange>ส่งผลกระทบต่อความเปราะบางที่มีอยู่แล้ว</orange>
            </h2>
          </div>
				</section>


        {// ตรงนี้เดี๋ยวทำเป็นรูปเดียว ที่มี megatrends ห้าอย่าง ค่อย ๆ โชว์ทีละอย่าง
         // geopolitics
         // technology
         // global warming
         // aging society
         // covid-19 scar
        }
        <section>
          <div className="vertical-center">
            <div>
              <h2>
                Megatrends สำคัญ
              </h2>
              <div style={{width: '50%', marginLeft: "auto", marginRight: "auto"}}>
                <PicNursingHome />
              </div>
            </div>
          </div>
				</section>


        <section>
          <h2>
            <orange>#1</orange> เศรษฐกิจไทยเปราะบางต่อความขัดแย้งทางภูมิรัฐศาสตร์<br />
            ตามการพึ่งพาจีนในระดับสูง
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
          <h2>
            <orange>#2</orange> ความก้าวหน้าทางเทคโนโลยี<br />
            อาจทำให้ไทยตกขบวนรถไฟได้ หากปรับตัวไม่ทัน
          </h2>
          <section>
            <div>
              ตัวอย่างความเปราะบางของโครงสร้างการส่งออกไทย
            </div>
          </section>
          <section>
            <div>
              ตัวอย่างความเปราะบางของการพึ่งพา platform ต่างประเทศ:<br />
              คนไทยพึ่งพา platform ต่างประเทศในการซื้อสินค้าและบริการสูงมาก
            </div>
            <Chart
              type="bar"
              height={110}
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
            <orange>#3</orange> ภาวะโลกร้อน เป็นภัยเงียบ<br />
            และจะส่งผลใหญ่หลวงต่อไทยหากไม่เร่งปรับตัว
          </h2>
          <div>
            ตัวอย่างความเปราะบางของภาคอุตสาหกรรมไทย:<br />
            กรุงเทพฯ และปริมณฑล มีความเสี่ยงต่อน้ำท่วมจากระดับน้ำทะเลที่เพิ่มขึ้น
          </div>
        </section>








        {// Social Divide
        }


        <section>
          <div className="vertical-center">
            <h2>
              แต่ประเด็นทางเศรษฐกิจ<br />
              ไม่ได้เป็นความเปราะบางเพียงอย่างเดียว<br />
              <orange>ต้องพิจารณาประเด็นทางสังคมควบคู่ไปด้วย</orange>
            </h2>
          </div>
				</section>

        <section>
					<h2>
						มีความสัมพันธ์ระหว่างความเหลื่อมล้ำทางเศรษฐกิจกับความสมานฉันท์ในสังคม (social cohesion)
          </h2>
          
          <section>
            <Chart
              width="700px"
              style={{marginTop: '-0.5em'}}
              type="scatter"
              ref={el => charts.current['trust-gini'] = el}
              data={{
                datasets: [
                  {
                    type: "scatter",
                    data: [{x: 25.84000015, y: 0.300940037}, {x: 27.32500076, y: 0.228056431}, {x: 28.10000038, y: 0.128013209}, {x: 31.39999962, y: 0.329317272}, {x: 31.64999962, y: 0.07333333}, {x: 31.79999924, y: 0.445680618}, {x: 32.09999847, y: 0.233082712}, {x: 32.40000153, y: 0.129166663}, {x: 32.75, y: 0.065964758}, {x: 32.79999924, y: 0.138245031}, {x: 33.23333359, y: 0.466930151}, {x: 34, y: 0.205833331}, {x: 34.40000153, y: 0.150833338}, {x: 34.5, y: 0.169134736}, {x: 34.57500076, y: 0.084471963}, {x: 35, y: 0.118699186}, {x: 35.09999847, y: 0.130063519}, {x: 35.5, y: 0.276666671}, {x: 35.52500153, y: 0.114002943}, {x: 36.13999939, y: 0.288886756}, {x: 37.29999924, y: 0.229347616}, {x: 38.47999954, y: 0.046373185}, {x: 38.5, y: 0.163479924}, {x: 38.54999924, y: 0.634894729}, {x: 40.57500076, y: 0.148098737}, {x: 41.09999847, y: 0.195734963}, {x: 41.22499847, y: 0.370217174}, {x: 41.82500076, y: 0.191813305}, {x: 42, y: 0.13995859}, {x: 42.84000015, y: 0.041612707}, {x: 43.45000076, y: 0.053309843}, {x: 44.15999985, y: 0.08514756}, {x: 44.40000153, y: 0.129027218}, {x: 45.36000061, y: 0.057500001}, {x: 45.84999847, y: 0.104989827}, {x: 47.29999924, y: 0.021399178}, {x: 50.59999847, y: 0.045394737}, {x: 53.15999985, y: 0.06524758}],
                    backgroundColor: styles.fourthColor,
                    borderWidth: 0,
                    pointRadius: 8,
                  },
                  {
                    type: "line",
                    data: [{x: 25, y: -0.0078*25+0.4741}, {x: 55, y: -0.0078*55+0.4741}],
                    pointRadius: 0,
                  }
                ]
              }}
              options={{
                aspectRatio: 1,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "ความเหลื่อมล้ำ (Gini Coefficient)",
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: "ความสมานฉันท์ในสังคม (Trust)",
                    }
                  },
                }
              }}
            />
            <div className="note">ที่มา: ข้อมูลจาก World Value Survey รอบที่ 5–7</div>
          </section>
          <section>
            PIC
          </section>
				</section>

        
        
        <section>
          <h2>สังคมไทยมีความเชื่อใจต่อกันลดลงอย่างต่อเนื่อง…</h2>
          <Chart
            type="bar"
            ref={el => charts.current['trust'] = el}
            data={{
              labels: ["2007", "2013", "2018"],
              datasets: [
                {
                  data: [41.26466751, 32.16666794, 29.79999924],
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
          <div className="note">ที่มา: ข้อมูลจาก World Value Survey รอบที่ 5–7</div>
        </section>

        <section>
          <h2>…ขณะที่มีกลุ่มความคิดทางการเมือง<br />ไปทางซ้ายมากขึ้น</h2>
          <Chart
            type="line"
            ref={el => charts.current['political_shift'] = el}
            data={{
              labels: [...Array(10).keys()],
              datasets: [
                {
                  data: [0.023483366, 0.021526419, 0.014350946, 0.041748206, 0.259621657, 0.200260926, 0.240704501, 0.127853881, 0.033920417, 0.03652968],
                  label: "2008",
                  tension: 0.4,
                },
                {
                  data: [[0.023483366, 0.021526419, 0.014350946, 0.041748206, 0.259621657, 0.200260926, 0.240704501, 0.127853881, 0.033920417, 0.03652968], [0.019212296, 0.014409222, 0.030739673, 0.055715658, 0.361191162, 0.194044188, 0.11431316, 0.106628242, 0.037463977, 0.066282421]][curFragment],
                  label: "2018",
                  tension: 0.4,
                  borderColor: styles.textColor,
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

        <section>
          <h2>
            แบบสำรวจ <orange>"คิดต่าง อย่างมีภูมิ"</orange>
          </h2>
          <div>
            <h3>คำถามวิจัย</h3>
            <ul>
              <li>ภาพความสมานฉันท์ในสังคมไทย</li>
              <li>ภาพความ "คิดต่าง" ในสังคมไทย</li>
              <li>ความคิดต่าง นำไปสู่ความแตกแยกหรือไม่ อย่างไร</li>
              <li>ปัจจัยที่ส่งผลต่อความแตกแยก</li>
            </ul>
          </div>
          <div className="spacer" />
          <div className="fragment">
            <h3>แบบสอบถามออนไลน์</h3>
            <p>สิงหาคม–กันยายน 2564 หลากหลายกลุ่มเศรษฐกิจและสังคม</p>
            <div className="flex center" style={{height: '5em', width: '50%'}}>
              <div className="fragment">
                <img src={picSocialQuality} className="center" style={{display: 'block'}} />
                <div className="small">Social Quality</div>
              </div>
              <div className="fragment">
                <img src={picDemographics} className="center" style={{display: 'block'}} />
                <div className="small">Demographics</div>
              </div>
              <div className="fragment">
                <img src={picSocialMedia} className="center" style={{display: 'block'}} />
                <div className="small">Media & Exchange</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>
            กลุ่มตัวอย่าง <orange>"คิดต่าง อย่างมีภูมิ"</orange><br />
            เปรียบเทียบกับประชากรไทย
          </h2>
          <div>
            <ul>
              <li>ผู้ตอบแบบสอบถาม 2,016 ราย (Phase I)</li>
              <li>จากข้อจำกัดด้านเวลาและสถานการณ์โควิด กลุ่มตัวอย่างที่ได้ มีกลุ่มอายุวัยกลางคน กลุ่มคนกรุงเทพฯ และระดับการศึกษาสูง สูงกว่าโครงสร้างประชากรไทย</li>
            </ul>
          </div>
          

          <section>
            <ComparePop
              ref={el => charts.current['survey-area'] = el}
              groups={["นอกเขตเทศบาล", "ในเขตเทศบาล", "กรุงเทพฯ"]}
              pop={[0.563505023, 0.313015343, 0.123479635]}
              sample={[0.159067882, 0.242654509, 0.598277609]}
              title="พื้นที่"
            />
          </section>
          <section>
            <ComparePop
              ref={el => charts.current['survey-age'] = el}
              groups={["< 30", "30–39", "40–59", "≥ 60"]}
              pop={[0.166234731, 0.161541394, 0.406425137, 0.265798739]}
              sample={[0.1408308, 0.259371834, 0.495440729, 0.104356636]}
              title="อายุ"
            />
          </section>
          <section>
            <ComparePop
              ref={el => charts.current['survey-income'] = el}
              groups={["น้อยกว่า 10,000", "10,000–25,000", "25,001–50,000", "50,001–80,000", "80,001–120,000", "120,001–200,000", "200,001–500,000", "มากกว่า 500,000"]}
              pop={[0.154819513, 0.405666645, 0.251476368, 0.103813561, 0.044534863, 0.024262061, 0.011692634, 0.003734356]}
              sample={[0.032928065, 0.095744681, 0.166666667, 0.151975684, 0.151469098, 0.138804458, 0.168693009, 0.093718338]}
              title="รายได้"
            />
          </section>
          <section>
            <ComparePop
              ref={el => charts.current['survey-occupation'] = el}
              groups={["ธุรกิจส่วนตัว/รับจ้าง", "ข้าราชการ", "นักเรียน", "ทำงานที่บ้าน", "พนักงานเอกชน ", "เกษียณ/ว่างงาน"]}
              pop={[0.214418738, 0.055638929, 0.05916952, 0.165197247, 0.243307944, 0.262267623]}
              sample={[0.240894901, 0.277835588, 0.041623309, 0.036940687, 0.294484912, 0.108220604]}
              title="อาชีพ"
            />
          </section>

        </section>

        <section>
          <SocialOutline n={1} />
        </section>

        <section>
          <h2>
            ความสมานฉันท์ในสังคมไทยอยู่ในระดับต่ำ<br />
            เทียบกับคุณภาพสังคมด้านอื่น ๆ
          </h2>

        </section>

        <section>
          <SocialOutline n={2} />
        </section>

        <section>
          <h2>
            การวัดความคิดต่าง
          </h2>

        </section>

        <section>
          <SocialOutline n={3} />
        </section>

        <section>
          <h2>
            ความคิดต่าง นำไปสู่ความรู้สึกไม่ดีต่อคนต่างความคิด และความแตกแยก
          </h2>
          <div>
            คนที่มีความเห็นสุดขั้ว มีความรู้สึกไม่ดีต่อคน "คิดต่าง" มากกว่ากลุ่มที่มีความคิดเห็นกลาง ๆ
          </div>
          
          <section>
            <Chart
              type="bar"
              // height={180}
              ref={el => charts.current['social-divide-1'] = el}
              data={{
                labels: ["ความเห็นอกเห็นใจ (ช่วยว่าความให้หากเป็นทนาย)", "ความชอบ/ไม่ชอบ", "ยอมแลกเปลี่ยนความคิดเห็น", "ความไว้วางใจ", "ความเห็นอกเห็นใจ (ช่วยเหลือหากประสบอุบัติเหตุ)"],
                datasets: [
                  {
                    label: "ค่าเฉลี่ยของกลุ่มตัวอย่าง",
                    data: [36.6, 57.2, 61.6, 65.2, 86.1],
                    backgroundColor: styles.fourthColor,
                  }
                ]
              }}
              options={{
                indexAxis: 'y',
                scales: {
                  x: {
                    max: 100,
                    title: {
                      display: true,
                      text: "← ความรู้สึกไม่ดีสูง"
                    }
                  },
                },
              }}
            />
          </section>

          <section>
            <Chart
              type="bar"
              // height={180}
              ref={el => charts.current['social-divide-2'] = el}
              data={{
                labels: ["ความเห็นอกเห็นใจ (ช่วยว่าความให้หากเป็นทนาย)", "ความชอบ/ไม่ชอบ", "ยอมแลกเปลี่ยนความคิดเห็น", "ความไว้วางใจ", "ความเห็นอกเห็นใจ (ช่วยเหลือหากประสบอุบัติเหตุ)"],
                datasets: [
                  {
                    label: "กลุ่มไม่สุดขั้ว",
                    data: [42.1, 61.3, 62.2, 66.0, 85.7],
                    backgroundColor: styles.greenColor,
                  },
                  {
                    label: "กลุ่มสุดขั้ว",
                    data: [25.6, 48.8, 60.3, 63.6, 87.0],
                    backgroundColor: styles.secondaryColor,
                  }
                ]
              }}
              options={{
                indexAxis: 'y',
                scales: {
                  x: {
                    max: 100,
                    title: {
                      display: true,
                      text: "← ความรู้สึกไม่ดีสูง"
                    }
                  },
                },
              }}
            />
          </section>

        </section>


        <section>
          <h2>
            ความคิดต่าง ทำให้ยิ่งมองความต่างมากเกินจริง
          </h2>
          <ul>
            <li>การศึกษาที่มีมา (เช่น Westfall <em>et al.</em>, 2015 ในสหรัฐฯ) แสดงให้เห็นว่าคนคิดว่าสองฝั่งมีความแตกต่างกันมากกว่าความเป็นจริง</li>
            <li>ตัวอย่าง: คำถามว่า <strong>"คุณให้ความสำคัญกับการเชื่อฟังผู้อาวุโส หรือผู้มีตำแหน่งสูงกว่า มากน้อยแค่ไหน"</strong></li>
          </ul>
        </section>
        

      </div>
  );
}

export default App;
