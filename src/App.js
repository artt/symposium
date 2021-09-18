import React from 'react'

import Reveal from 'reveal.js'
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import Chart from './components/Chart'
import ComparePop from './components/ComparePop'
import Perception from './components/Perception'
import SocialOutline from './components/SocialOutline'
import ValueAdded from './components/ValueAdded'
import { defaults } from 'test-react-chartjs-2'
import merge from 'lodash.merge'
import chroma from 'chroma-js'

import Logo from './components/Logo'

import {ReactComponent as PicNursingHome} from './images/nursing-home.svg'
import picInternet from './images/world.png'
import picThailand from './images/thailand.png'
import picFamily from './images/people.png'
import picTrend from './images/trend.png'
import picSocialQuality from './images/social-quality.png'
import picDemographics from './images/demographics.png'
import picSocialMedia from './images/social-media.png'
import picBanana from './images/banana.png'
import picPassionFruit from './images/passion-fruit.png'

import styles from './css/theme/source/_variables.module.scss'
import "../node_modules/reveal.js/dist/reveal.css"
import "./css/theme/source/pier-dark.scss"
import "./css/main.scss"

const baseSize = parseInt(styles.baseSize.replace("px", ""))
const areaAlpha = 0.675
const politicalColors = chroma.scale(['orange', 'white', 'yellow']).colors(6)

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

  // if el is in the "present" section, return the fragment number
  // otherwise return 0
  function getFragment(el) {
    if (el && el.closest('.present'))
      return curFragment
    return 0
  }

  function animateCurrentChart() {
    setTimeout(() => {
      updateFragment()
      // if (charts.current['foreign-platforms'].canvas.closest('.present'))
      //   console.log('xxxxxxx')
      Object.keys(charts.current).forEach(c => {
        const curChart = charts.current[c]
        if (curChart.canvas.closest('.present:not(.stack)')) {
          // console.log(curChart)
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
                โครงสร้างเศรษฐกิจสังคมไทย 🇹🇭<br />
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
          <div className="vertical-center">
            <div>
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
            </div>
          </div>  
        </section>

        <section>
          <div className="vertical-center">
            <h1>
              ความเปลี่ยนแปลงที่กำลังเกิด<br />
              <orange>ส่งผลกระทบต่อความเปราะบางที่มีอยู่แล้ว…</orange>
            </h1>
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
            <orange>#1</orange> เศรษฐกิจไทยเปราะบางต่อความขัดแย้งทางภูมิรัฐศาสตร์
          </h2>

          <div>
            <orange>ตัวอย่างความเปราะบางจากการพึ่งพาจีนและสหรัฐฯ</orange>
          </div>
          <div className="spacer" />

          <section>
            <split>
              <div>
                <div>
                  การส่งออกไทยไปจีนและสหรัฐฯ<br />
                  มีมูลค่ารวมเกือบ 1 ใน 3 ของการส่งออก
                </div>
                <Chart
                  type="line"
                  height={280}
                  ref={el => charts.current['exports'] = el}
                  data={{
                    labels: [...Array(26).keys()].map(x => x + 1995),
                    datasets: [
                      {
                        data: [2.907573869, 3.352511432, 3.043451846, 3.242065949, 3.18176053, 4.065222301, 4.408128539, 5.216009315, 7.107585237, 7.371223277, 8.263696605, 9.040960912, 9.649204673, 9.107349445, 10.57521761, 11.10886366, 11.79390837, 11.72921265, 11.91811991, 11.02768863, 11.07391933, 11.04966889, 12.46901342, 11.98499444, 11.84456171, 12.87073393],
                        label: "จีน",
                        tension: 0.4,
                        backgroundColor: chroma(styles.cnColor).alpha(areaAlpha).hex(),
                        borderColor: styles.cnColor,
                        fill: true,
                      },
                      {
                        data: [17.82828826, 17.97175979, 19.44514375, 22.330245, 21.63543144, 21.31141409, 20.25002984, 19.82118459, 16.98672979, 16.06464302, 15.32089143, 14.99345676, 12.61859067, 11.40470261, 10.93070977, 10.45045008, 9.786964663, 9.946514876, 10.04517578, 10.50323177, 11.22485985, 11.37467376, 11.22845138, 11.08528019, 12.72935508, 14.84290893],
                        label: "สหรัฐฯ",
                        tension: 0.4,
                        backgroundColor: chroma(styles.usColor).alpha(areaAlpha).hex(),
                        borderColor: styles.usColor,
                        fill: true,
                      },
                    ]
                  }}
                  options={{
                    layout: {
                      padding: 0,
                    },
                    radius: 0,
                    scales: {
                      y: {
                        stacked: true,
                        title: {
                          display: true,
                          text: "สัดส่วนมูลค่าการส่งออก (%)"
                        }
                      }
                    },
                    plugins: {
                      // title: {
                      //   display: true,
                      //   text: "สัดส่วนการส่งออกของไทยไปจีนและสหรัฐฯ",
                      // },
                    }
                  }}
                />
              </div>
              <div>
                <div>
                  จีน: สินค้าเกษตรและผลิตภัณฑ์พลาสติก<br />
                  สหรัฐฯ: สินค้าอิเล็กทรอนิกส์และเครื่องจักร
                </div>
                <Chart
                  type="bar"
                  height={280}
                  ref={el => charts.current['exports-products'] = el}
                  data={{
                    // labels: ["Machinery", "Electrical machinery and equipment", "Vehicles", "Pearls, stones, precious metals", "Rubber products", "Plastics products", "Preparations of meat, fish etc.", "Mineral fuels", "Optical products", "Edible fruit and nuts; peel of citrus fruit or melons"],
                    labels: ["Rubber products", "Machinery", "Plastics", "Electrical machinery", "Edible fruits and nuts"],
                    datasets: [
                      {
                        // data: [9.186, 9.109, 7.265, 0.781, 26.258, 27.144, 0.878, 10.032, 24.105, 69.528],
                        data: [26.258, 9.186, 27.144, 9.109, 69.528], // new
                        label: "จีน",
                        backgroundColor: chroma(styles.cnColor).alpha(areaAlpha).hex(),
                        borderColor: styles.cnColor,
                      },
                      {
                        // data: [22.286, 21.944, 9.632, 5.663, 26.865, 6.684, 17.254, 0.054, 15.372, 2.393],
                        data: [26.865, 22.286, 6.684, 21.944, 2.393],
                        label: "สหรัฐฯ",
                        backgroundColor: chroma(styles.usColor).alpha(areaAlpha).hex(),
                        borderColor: styles.usColor,
                      },
                    ]
                  }}
                  options={{
                    layout: {
                      padding: 0,
                    },
                    radius: 0,
                    scales: {
                      y: {
                        title: {
                          display: true,
                          text: "สัดส่วนมูลค่าการส่งออก (%)"
                        }
                      }
                    },
                    plugins: {
                      // title: {
                      //   display: true,
                      //   text: "สัดส่วนการส่งออกของไทยไปจีนและสหรัฐฯ",
                      // },
                    }
                  }}
                />
              </div>
            </split>
            <div className="note"><strong>ที่มา</strong>: ธนาคารแห่งประเทศไทย ITC Trademap คำนวณโดยคณะผู้วิจัย</div>
          </section>

          <section>
            <split>
              <div>
                <div>
                  ไทยพึ่งพานักท่องเที่ยวจีนถึง 28%<br />
                  ของนักท่องเที่ยวทั้งหมด
                </div>
                <Chart
                  type="line"
                  height={280}
                  ref={el => charts.current['tourists'] = el}
                  data={{
                    labels: ["Jan-15", "Feb-15", "Mar-15", "Apr-15", "May-15", "Jun-15", "Jul-15", "Aug-15", "Sep-15", "Oct-15", "Nov-15", "Dec-15", "Jan-16", "Feb-16", "Mar-16", "Apr-16", "May-16", "Jun-16", "Jul-16", "Aug-16", "Sep-16", "Oct-16", "Nov-16", "Dec-16", "Jan-17", "Feb-17", "Mar-17", "Apr-17", "May-17", "Jun-17", "Jul-17", "Aug-17", "Sep-17", "Oct-17", "Nov-17", "Dec-17", "Jan-18", "Feb-18", "Mar-18", "Apr-18", "May-18", "Jun-18", "Jul-18", "Aug-18", "Sep-18", "Oct-18", "Nov-18", "Dec-18", "Jan-19", "Feb-19", "Mar-19", "Apr-19", "May-19", "Jun-19", "Jul-19", "Aug-19", "Sep-19", "Oct-19", "Nov-19", "Dec-19", "Jan-20", "Feb-20", "Mar-20"],
                    datasets: [
                      {
                        data: [3.108, 2.700, 2.922, 2.802, 2.776, 2.991, 2.643, 2.145, 2.607, 3.178, 3.471, 3.408, 3.109, 2.675, 2.978, 2.845, 2.930, 3.224, 2.747, 2.124, 2.439, 3.274, 3.997, 3.757, 3.184, 2.956, 3.106, 3.054, 2.942, 3.181, 2.787, 2.132, 2.422, 2.856, 3.462, 3.423, 3.103, 2.545, 3.049, 2.865, 2.964, 3.002, 2.781, 2.204, 2.466, 3.069, 3.725, 3.379, 3.038, 2.568, 3.048, 2.889, 2.999, 3.097, 2.643, 2.028, 2.208, 2.757, 3.498, 3.279, 2.988, 3.515, 2.947],
                        label: "สหรัฐฯ",
                        tension: 0.4,
                        backgroundColor: chroma(styles.usColor).alpha(areaAlpha).hex(),
                        borderColor: styles.usColor,
                        fill: true,
                      },
                      {
                        data: [21.469, 29.302, 25.968, 29.125, 29.026, 27.886, 29.189, 30.621, 26.174, 25.397, 24.130, 21.352, 27.189, 31.105, 29.266, 31.054, 30.036, 29.526, 29.343, 30.912, 27.263, 21.057, 17.634, 17.498, 26.888, 26.632, 26.153, 26.220, 29.308, 27.919, 30.263, 30.841, 29.266, 29.554, 26.018, 22.838, 27.467, 33.754, 28.730, 31.870, 31.748, 29.889, 29.264, 26.865, 24.569, 23.896, 21.291, 21.865, 29.000, 29.973, 28.563, 28.286, 29.396, 27.619, 30.037, 30.431, 30.044, 27.079, 23.768, 21.884, 27.037, 7.787, 6.938],
                        label: "จีน",
                        tension: 0.4,
                        backgroundColor: chroma(styles.cnColor).alpha(areaAlpha).hex(),
                        borderColor: styles.cnColor,
                        fill: true,
                      },
                    ]
                  }}
                  options={{
                    layout: {
                      padding: 0,
                    },
                    radius: 0,
                    scales: {
                      y: {
                        stacked: true,
                        title: {
                          display: true,
                          text: "สัดส่วนนักท่องเที่ยว (%)"
                        }
                      }
                    },
                    plugins: {
                      // title: {
                      //   display: true,
                      //   text: "สัดส่วนนักท่องเที่ยวจีนและสหรัฐฯ",
                      // },
                      annotation: {
                        annotations: {
                          bombing: {
                            type: 'box',
                            xMin: "Aug-15",
                            xMax: "Dec-15",
                            drawTime: "beforeDatasetsDraw",
                            borderWidth: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          },
                          tour: {
                            type: 'box',
                            xMin: "Oct-16",
                            xMax: "Dec-16",
                            drawTime: "beforeDatasetsDraw",
                            borderWidth: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          },
                          boat: {
                            type: 'box',
                            xMin: "Jul-18",
                            xMax: "Nov-18",
                            drawTime: "beforeDatasetsDraw",
                            borderWidth: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          }
                        }
                      },
                    }
                  }}
                />
              </div>
              <div>
                <div>
                  การลงทุนทางตรงของสหรัฐฯ ยังอยู่ในระดับสูง<br />
                  ขณะที่ของจีนเพิ่มขึ้นต่อเนื่อง
                </div>
                <Chart
                  type="line"
                  height={280}
                  ref={el => charts.current['tourists'] = el}
                  data={{
                    labels: [...Array(15).keys()].map(x => x + 2006),
                    datasets: [
                      {
                        data: [0.461193715, 0.403640965, 0.475220835, 0.50179091, 0.933997959, 1.194895908, 1.448498298, 1.853459414, 1.632765256, 1.689373072, 2.282328423, 2.027178381, 2.283657598, 2.776400004, 2.733742509],
                        label: "จีน",
                        tension: 0.4,
                        backgroundColor: chroma(styles.cnColor).alpha(areaAlpha).hex(),
                        borderColor: styles.cnColor,
                        fill: true,
                      },
                      {
                        data: [11.37837563, 10.13135187, 9.677620293, 9.519999818, 9.225781636, 9.258475833, 9.587324964, 8.221337325, 7.907904056, 8.142316389, 7.519867543, 6.611558165, 6.772254041, 6.723215518, 6.219724666],
                        label: "สหรัฐฯ",
                        tension: 0.4,
                        backgroundColor: chroma(styles.usColor).alpha(areaAlpha).hex(),
                        borderColor: styles.usColor,
                        fill: true,
                      },
                    ]
                  }}
                  options={{
                    layout: {
                      padding: 0,
                    },
                    radius: 0,
                    scales: {
                      y: {
                        stacked: true,
                        title: {
                          display: true,
                          text: "สัดส่วนของ FDI รวม (%)"
                        }
                      }
                    },
                    plugins: {
                      // title: {
                      //   display: true,
                      //   text: "สัดส่วนการลงทุนทางตรงของจีนและสหรัฐฯ",
                      // },
                    }
                  }}
                />
              </div>
            </split>
            <div className="note"><strong>ที่มา</strong>: ธนาคารแห่งประเทศไทย ITC Trademap คำนวณโดยคณะผู้วิจัย</div>
          </section>

        </section>

        <section>
          <h2>
            <orange>#2</orange> ความก้าวหน้าทางเทคโนโลยี<br />
            อาจทำให้ไทยตกขบวนรถไฟได้ หากปรับตัวไม่ทัน
          </h2>
          
          <section>
            <div className="orange">
              ตัวอย่างความเปราะบางของโครงสร้างการส่งออกไทย
            </div>
            <div className="spacer" />
            <div>
              มูลค่าเพิ่มที่ไทยสร้างได้ ยังอยู่ในระดับกลาง ๆ เมื่อเทียบกับประเทศเพื่อนบ้าน
            </div>
            <div id="value-added">
              <ValueAdded
                ref={el => charts.current['value-added-computers'] = el}
                title="Computers"
                data={[
                  [43.49, 54.29],
                  [61.07, 71.60],
                  [39.08, 44.98],
                  [64.22, 60.68],
                  [45.76, 37.13],
                ]}
                showTicks={true}
              />
              <ValueAdded
                ref={el => charts.current['value-added-food'] = el}
                title="Food"
                data={[
                  [80.40, 84.15],
                  [90.83, 92.71],
                  [67.05, 73.32],
                  [88.52, 89.54],
                  [62.12, 63.21],
                ]}
              />
              <ValueAdded
                ref={el => charts.current['value-added-motorvehicles'] = el}
                title="Motor vehicles"
                data={[
                  [48.09, 54.23],
                  [79.79, 83.78],
                  [39.71, 44.43],
                  [65.12, 59.06],
                  [48.17, 48.46],
                ]}
              />
              <ValueAdded
                ref={el => charts.current['value-added-chemicals'] = el}
                title="Chemicals"
                data={[
                  [57.59, 67.78],
                  [81.17, 86.29],
                  [59.64, 64.85],
                  [64.20, 71.54],
                  [49.14, 53.58],
                ]}
              />
              <ValueAdded
                ref={el => charts.current['value-added-rubber'] = el}
                title="Rubbers"
                data={[
                  [50.80, 58.59],
                  [71.01, 74.38],
                  [51.33, 56.20],
                  [64.00, 68.08],
                  [45.84, 48.21],
                ]}
              />
            </div>

          </section>

          <section>
            <div className="orange">
              ตัวอย่างความเปราะบางของการพึ่งพา platform ต่างประเทศ
            </div>
            <div className="spacer" />
            <div>
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
                    backgroundColor: Array(5).fill(styles.greenColor).concat(Array(5).fill(styles.secondaryColor)).map(color => chroma(color).alpha(areaAlpha).hex()),
                  }
                ]
              }}
              options={{
                indexAxis: 'y',
                scales: {
                  y: {
                    min: [5, 0][getFragment(charts.current['foreign-platforms']?.canvas)],
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
          <div className="orange">
            ตัวอย่างความเปราะบางของภาคอุตสาหกรรมไทย
          </div>
          <div className="spacer" />
          <div>
            กรุงเทพฯ และปริมณฑล มีความเสี่ยงต่อน้ำท่วมจากระดับน้ำทะเลที่เพิ่มขึ้น
          </div>
        </section>

        <section>
          <h2>
            <orange>#4</orange> สังคมสูงอายุส่งผลหลายด้าน<br />
          </h2>
          <div className="orange">
            ตัวอย่างความเปราะบางของโครงสร้างแรงงานไทย
          </div>
          <div className="spacer" />
          <div>
            สัดส่วนแรงงานสูงวัย (มากกว่า 50 ปี) <orange>เพิ่มขึ้นเกือบ 3 เท่า</orange>ในช่วงไม่ถึง 20 ปีที่ผ่านมา
          </div>
        </section>

        <section>
          <h2>
            <orange>#5</orange> วิกฤตโควิด-19 สร้างหลายแผลเป็นต่อเศรษฐกิจไทย
          </h2>
          <div className="orange">
            ตัวอย่างความเปราะบางทางการเงินของครัวเรือนไทย
          </div>
          <div className="spacer" />
          <div>
            ครัวเรือนไทยเริ่มผิดนัดชำระหนี้ และมีหนี้เสียเป็นวงกว้าง<br />
            โดยเฉพาะกลุ่มผู้กู้อายุน้อย ซึ่งมีหนี้เร็วและมีสัดส่วนผู้กู้ที่มีหนี้เสียมากอยู่แล้วก่อนวิกฤต
          </div>
        </section>



        {// Social Divide
        }


        <section>
          <div className="vertical-center">
            <h1>
              แต่ประเด็นทางเศรษฐกิจ<br />
              ไม่ได้เป็นความเปราะบางเพียงอย่างเดียว<br />
              <orange>ต้องพิจารณาประเด็นทางสังคมควบคู่ไปด้วย</orange>
            </h1>
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
                    backgroundColor: chroma(styles.fourthColor).alpha(areaAlpha).hex(),
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
              labels: ["2008", "2013", "2018"],
              datasets: [
                {
                  data: [41.26466751, 32.16666794, 29.79999924],
                  backgroundColor: chroma(styles.secondaryColor).alpha(areaAlpha).hex(),
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
            ref={el => charts.current['political-shift'] = el}
            data={{
              labels: [...Array(10).keys()],
              datasets: [
                {
                  data: [0.023483366, 0.021526419, 0.014350946, 0.041748206, 0.259621657, 0.200260926, 0.240704501, 0.127853881, 0.033920417, 0.03652968],
                  label: "2008",
                  tension: 0.4,
                },
                {
                  data: [[0.023483366, 0.021526419, 0.014350946, 0.041748206, 0.259621657, 0.200260926, 0.240704501, 0.127853881, 0.033920417, 0.03652968], [0.019212296, 0.014409222, 0.030739673, 0.055715658, 0.361191162, 0.194044188, 0.11431316, 0.106628242, 0.037463977, 0.066282421]][getFragment(charts.current['political-shift']?.canvas)],
                  label: "2018",
                  tension: 0.4,
                  borderColor: styles.textColor,
                },
              ]
            }}
            options={{
              radius: 0,
              scales: {
                x: {
                  ticks: {
                    callback: (value, index, values) => {
                      if (index === 1)
                        return ['เสรีนิยม', 'Liberal']
                      if (index === 8)
                        return ['อนุรักษ์นิยม', 'Conservative']
                      return null
                    },
                  },
                },
                y: {
                  max: 0.4,
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
          <div className="note">ที่มา: ข้อมูลจาก World Value Survey รอบที่ 5–7</div>
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
          <div id="political-scale" className={`center frag${getFragment(document.getElementById("political-scale"))}`}>
            <div className={`def def-orange`}>
              <img src={picPassionFruit} height="200px" />
              <div className="top">
                สิทธิ<br />
                เสรีภาพ<br />
                สิทธิในการแสดงออก<br />
                ความเสมอภาค<br />
                ความเท่าเทียม
              </div>
              <p>
                ให้ความสำคัญกับหลักสิทธิเสรีภาพและความเสมอภาคภายใต้ความหลากหลายในสังคม เช่น สิทธิในการแสดงออก การยกระดับคุณภาพชีวิตของคนในสังคมให้เท่าเทียมกันมากขึ้น เป็นต้น
              </p>
            </div>
            <div className="chart-container">
              <Chart
                type="bar"
                width="100%"
                ref={el => charts.current['extremity'] = el}
                data={{
                  labels: ["1", "2", "3", "4", "5", "6"],
                  datasets: [
                    {
                      data: [Array(6).fill(100), Array(6).fill(100), [545, 511, 370, 301, 184, 105]][getFragment(charts.current['extremity']?.canvas)],
                      backgroundColor: politicalColors,
                    }
                  ]
                }}
                options={{
                  aspectRatio: 1.5,
                  scales: {
                    y: {
                      max: 600,
                      ticks: {
                        color: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', styles.textColor][getFragment(charts.current['extremity']?.canvas)],
                      }
                    },
                  },
                  plugins: {
                    title: {
                      display: true,
                      text: getFragment(charts.current['extremity']?.canvas) === 2 ? "จำนวนผู้ตอบแบบสอบถามในแต่ละกลุ่ม" : "",
                    },
                    legend: {
                      display: false,
                    }
                  }
                }}
              />
            </div>
            <div className={`def def-yellow`}>
              <img src={picBanana} height="200px" />
              <div className="top">
                ประเพณีนิยม<br />
                ศีลธรรมอันดีงาม<br />
                ความเป็นอันหนึ่งอันเดียวกัน<br />
                ความมั่นคงในชีวิต<br />
                การเคารพผู้อาวุโส
              </div>
              <p>
                ให้ความสำคัญกับความเป็นอันหนึ่งอันเดียวกันในสังคม ความมั่นคงในชีวิต และประเพณีนิยม เช่น ศีลธรรมอันดีงาม การสืบทอดจารีตประเพณี การเคารพผู้อาวุโส
              </p>
            </div>
          </div>
          <div className="fragment" />
          <div className="fragment" />

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
                    backgroundColor: chroma(styles.fourthColor).alpha(areaAlpha).hex(),
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
                    backgroundColor: chroma(styles.greenColor).alpha(areaAlpha).hex(),
                  },
                  {
                    label: "กลุ่มสุดขั้ว",
                    data: [25.6, 48.8, 60.3, 63.6, 87.0],
                    backgroundColor: chroma(styles.secondaryColor).alpha(areaAlpha).hex(),
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
          <section>
            <div>
              Westfall <em>et al.</em> (2015) พบว่าคน<orange>คิดว่าสองฝั่งมีความแตกต่างกันมากกว่าความเป็นจริง</orange>
            </div>
            <div className="spacer" />
            <div className="fragment">
              คำถาม<br />
              <strong>"คุณให้ความสำคัญกับการเชื่อฟังผู้อาวุโส หรือผู้มีตำแหน่งสูงกว่า มากน้อยแค่ไหน"</strong>
              <div id="perception">
                <Chart
                  type="bar"
                  height={100}
                  ref={el => charts.current['perception-example'] = el}
                  data={{
                    labels: " ",
                    datasets: [
                      {
                        hidden: false,
                        label: "ความแตกต่างที่คิด",
                        data: getFragment(charts.current['perception-example']?.canvas) < 6 ? [[3, 3]] : [[2.180633, 4.314031]],
                        backgroundColor: chroma(styles.fourthColor).alpha(areaAlpha).hex(),
                      },
                      {
                        label: "ความแตกต่างจริง",
                        data: getFragment(charts.current['perception-example']?.canvas) < 7 ? [[3, 3]] : [[2.985117, 3.854922]],
                        backgroundColor: chroma(styles.secondaryColor).alpha(areaAlpha).hex(),
                      }
                    ]
                  }}
                  options={{
                    indexAxis: 'y',
                    scales: {
                      x: {
                        min: 1,
                        max: 5,
                        ticks: {
                          callback: (value, index, values) => {
                            if (value === 1)
                              return ['1', 'น้อยที่สุด']
                            if (value === 5)
                              return ['5', 'มากที่สุด']
                            if (value % 1 === 0)
                              return value
                            return null
                          },
                        },
                      },
                      y: {
                        grid: {
                          borderColor: styles.gridColor,
                        }
                      }
                    },
                    plugins: {
                      annotation: {
                        annotations: {
                          orangeActual: {
                            type: 'point',
                            xValue: 2.985117,
                            yValue: " ",
                            borderColor: politicalColors[0],
                            backgroundColor: politicalColors[0],
                            borderWidth: 3,
                            display: getFragment(charts.current['perception-example']?.canvas) >= 2 && getFragment(charts.current['perception-example']?.canvas) < 8
                          },
                          yellowImage: {
                            type: 'point',
                            xValue: 4.314031,
                            yValue: " ",
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            borderColor: politicalColors[5],
                            borderWidth: 3,
                            borderDash: [5, 5],
                            display: getFragment(charts.current['perception-example']?.canvas) >= 3 && getFragment(charts.current['perception-example']?.canvas) < 8
                          },
                          yellowActual: {
                            type: 'point',
                            xValue: 3.854922,
                            yValue: " ",
                            borderColor: politicalColors[5],
                            backgroundColor: politicalColors[5],
                            borderWidth: 3,
                            display: getFragment(charts.current['perception-example']?.canvas) >= 4 && getFragment(charts.current['perception-example']?.canvas) < 8
                          },
                          orangeImage: {
                            type: 'point',
                            xValue: 2.180633,
                            yValue: " ",
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            borderColor: politicalColors[0],
                            borderWidth: 3,
                            borderDash: [5, 5],
                            display: getFragment(charts.current['perception-example']?.canvas) >= 5 && getFragment(charts.current['perception-example']?.canvas) < 8
                          },
                        }
                      },
                    }
                  }}
                />
              </div>
              <div className="fragment" />
              <div className="fragment" />
              <div className="fragment" />
              <div className="fragment" />
              <div className="fragment" />
              <div className="fragment" />
              <div className="fragment" />
            </div>
          </section>
          <section>
            <Perception
              ref={el => charts.current['perception-all'] = el}
              highlightArray={[2, 8]}
              style={{marginTop: '-1.5em'}}
            />
          </section>
        </section>
        

        <section>
          <SocialOutline n={4} />
        </section>

        <section>
          <h2><orange>#1</orange> ความสุดขั้ว</h2>
        </section>

        <section>
          <h2><orange>#2</orange> ความต่างวัย</h2>
        </section>

        <section>
          <h2><orange>#3</orange> ความมั่นคงในชีวิต</h2>
        </section>

        <section>
          <h2><orange>#4</orange> การพูดคุยแลกเปลี่ยนความคิดเห็น</h2>
        </section>

        <section>
          <h2><orange>#5</orange> การบริโภคสื่อ</h2>
        </section>

        <section>
          <div className="vertical-center">
            <div>
              <h2>ผลการศึกษาที่สำคัญ</h2>
              <ol>
                <li className="fragment fade-in-then-semi-out">ความสมานฉันท์ของสังคมไทยเป็นมิติที่เปราะบางที่สุดเทียบกับคุณภาพสังคมในมิติอื่น ๆ และเทียบกับกลุ่มประเทศรายได้ปานกลาง</li>
                <li className="fragment fade-in-then-semi-out">ทุกกลุ่มในสังคมไทยมีความคิดต่าง โดยเฉพาะในกลุ่มอายุน้อยที่มีความคิดสุดขั้วมากกว่ากลุ่มอื่น ๆ</li>
                <li className="fragment fade-in-then-semi-out">ความคิดต่าง โดยเฉพาะแบบสุดขั้ว อาจนำไปสู่ความแตกแยก</li>
                <li className="fragment">
                  ความต่างวัย และความไม่มั่นคงทางเศรษฐกิจ อาจนำไปสู่ความแตกแยกเพิ่มขึ้น<br />
                  การพูดคุยแลกเปลี่ยนความคิดเห็น การบริโภคสื่อที่หลากหลาย ช่วยลดความแตกแยก
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h2>คน "คิดต่าง" อาจไม่ได้ต่างอย่างที่คิด</h2>
          <Perception
            ref={el => charts.current['perception-close'] = el}
            highlightArray={[2, 8]}
            style={{marginTop: '-0.5em'}}
          />
        </section>

        <section>
          <div className="vertical-center">
            <h1>แล้วเราจะทำอย่างไรต่อไป?</h1>
          </div>
        </section>

        <section>
          <h2><orange>ข้อเสนอ</orange>ในการแก้ไขปัญหาความแตกแยกในสังคม</h2>
          <h2>PIER</h2>
        </section>
        
      </div>
  );
}

export default App;
