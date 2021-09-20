// https://stackoverflow.com/questions/57528694/chart-js-multiple-charts-with-one-common-legend

import React from 'react'

import Reveal from 'reveal.js'
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import Chart from './components/Chart'
import Pop from './components/Pop'
import ComparePop from './components/ComparePop'
import Perception from './components/Perception'
import Coefficients from './components/Coefficients'
import SocialOutline from './components/SocialOutline'
import ValueAdded, { ValueAddedLabel } from './components/ValueAdded'
import { defaults } from 'test-react-chartjs-2'
import merge from 'lodash.merge'
import chroma from 'chroma-js'

import Logo from './components/Logo'

import {ReactComponent as PicNursingHome} from './images/nursing-home.svg'
import picInternet from './images/world.png'
import picThailand from './images/thailand.png'
import picFamily from './images/people.png'
import picTrend from './images/trend.png'
import picDemographics from './images/demographics.png'
import picSocialQuality from './images/social-quality.png'
import picOpinions from './images/opinions.png'
import picSocialMedia from './images/social-media.png'
import picBanana from './images/banana.png'
import picPassionFruit from './images/passion-fruit.png'
import picFloodArea from './images/flood-area.png'
import picFloodBiz from './images/flood-biz.png'

import picGeopolitics from './images/geopolitics.png'
import picTech from './images/tech.png'
import picGlobalWarming from './images/global-warming.png'
import picAging from './images/aging.png'
import picCovid from './images/covid.png'

import picVoiceTV from './images/media/voice-tv.png'
import picPrachathai from './images/media/prachathai.png'
import picTheStandard from './images/media/the-standard.png'
import picMatichon from './images/media/matichon.png'
import picTheReporters from './images/media/the-reporters.jpg'
import picBBCThai from './images/media/bbc-thai.png'
import picKhaosod from './images/media/khaosod.png'
import picTheMatter from './images/media/the-matter.png'
import picBangkokPost from './images/media/bangkok-post.png'
import picWorkpoint from './images/media/workpoint.png'
import picTheMomentum from './images/media/the-momentum.png'
import picAmarinTv from './images/media/amarin-tv.jpg'
import picNew18 from './images/media/new-18.png'
import picSpringNews from './images/media/spring-news.jpg'
import pic101World from './images/media/101-world.png'
import picKom from './images/media/kom.jpg'
import picPPTV36 from './images/media/pptv-36.jpg'
import picDailyNews from './images/media/daily-news.jpg'
import picThaipbs from './images/media/thaipbs.png'
import picThairath from './images/media/thairath.jpg'
import picPrachachat from './images/media/prachachat.jpg'
import picBluesky from './images/media/bluesky.png'
import picNaewna from './images/media/naewna.png'
import picThaipublica from './images/media/thaipublica.jpg'
import picCh3 from './images/media/ch-3.png'
import picTNN16 from './images/media/tnn-16.png'
import picIsraNews from './images/media/isranews.png'
import picThaiPost from './images/media/thaipost.jpg'
import picMCOT from './images/media/mcot.png'
import picNation from './images/media/nation.png'
import picManager from './images/media/manager.png'
import picTopNews from './images/media/top-news.png'

import styles from './css/theme/source/_variables.module.scss'
import "../node_modules/reveal.js/dist/reveal.css"
import "./css/theme/source/pier-dark.scss"
import "./css/main.scss"

const queryString = require('query-string');

const baseSize = parseInt(styles.baseSize.replace("px", ""))
const areaAlpha = 0.75
const politicalColors = chroma.scale(['orange', 'white', 'yellow'])

const coefData = [
  {
    title: "ความสุดขั้ว", 
    data: [0, 0, 0, 0, -0.2205991, -0.6915629, -0.4377571, -1.58721, -0.4587052, 0.0399224, -0.0624773, 2.305114]
  },
  {
    title: "ความรู้สึกไม่ดีต่อฝั่งตรงข้าม",
    data: [0, -3.168377, -6.185956, 0, -4.332496, -5.34668, -7.804648, 9.998635, 5.958668, 3.164143, 4.615053, -12.45545]
  },
  {
    title: "ความคิดว่าต่างมากเกินจริง",
    data: [0, 0.3459591, 0.5754136, 0, -0.1405119, -0.3061428, -0.1909025, -0.4560134, 0.0107633, -0.2896076, 0.3828785, 1.081103]
  },
]

const mediaData = [-5.68, -5.41, -4.94, -4.34, -4.25, -4.14, -2.29, -1.95, -1.02, -0.95, -0.85, -0.62, -0.47, -0.06, 0.09, 0.26, 0.53, 0.62, 0.71, 0.81, 0.94, 1.06, 1.07, 1.17, 1.38, 1.44, 1.53, 1.58, 1.97, 2.58, 4.74, 7.77]
const mediaLabel = ["VoiceTV", "ประชาไท", "The Standard", "มติชน", "The Reporter", "BBC Thai", "ข่าวสด", "The Matter", "Bangkok Post", "Workpoint", "The Momentum", "AmarinTV", "New18", "Spring News", "The 101.World", "คมชัดลึก", "PPTV", "เดลินิวส์", "ThaiPBS", "ไทยรัฐ", "ประชาชาติ", "BLUESKY", "แนวหน้า", "ThaiPublica", "ช่อง 3", "TNN", "สำนักข่าวอิศรา", "ไทยโพสต์", "อสมท.", "Nation", "ผู้จัดการ", "Top News"]
const mediaLogo = [picVoiceTV, picPrachathai, picTheStandard, picMatichon, picTheReporters, picBBCThai, picKhaosod, picTheMatter, picBangkokPost, picWorkpoint, picTheMomentum, picAmarinTv, picNew18, picSpringNews, pic101World, picKom, picPPTV36, picDailyNews, picThaipbs, picThairath, picPrachachat, picBluesky, picNaewna, picThaipublica, picCh3, picTNN16, picIsraNews, picThaiPost, picMCOT, picNation, picManager, picTopNews]

merge(defaults, {
  color: styles.textColor,
  backgroundColor: chroma(styles.secondaryColor).alpha(areaAlpha).hex(),
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
  const [curV, setCurV] = React.useState(0)

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

  function handleSlideChanged(event) {
    setCurV(event.indexv)
    // animate slide
    // TODO: use event.currentSlide to go through all the slides instead?
    setTimeout(() => {
      updateFragment()
      Object.keys(charts.current).forEach(c => {
        const curChart = charts.current[c]
        if (curChart.canvas.closest('.present:not(.stack)')) {
          // console.log(curChart)
          curChart.reset()
          curChart.update()
        }
      })
    }, 0)
    document.querySelectorAll('.note').forEach(n => {
      n.classList.remove('show')
    })
    setTimeout(() => {
      event.currentSlide.querySelectorAll('.present:not(.stack) .note').forEach(n => {
        n.classList.add('show')
      })
    }, 1000)
  }

  const _W = 1920
  const _H = 1080


  function setScale() {
    const scale = Math.min(window.innerWidth / _W, window.innerHeight / _H)
    document.documentElement.style.setProperty('--scale', scale);
  }

  React.useEffect(() => {
    // const params = new URLSearchParams(window.location.search)
    const opts = queryString.parse(window.location.search, {parseBooleans: true})
    setScale()
    deck.current = new Reveal({
      // plugins: [ Markdown ],
    })
    deck.current.initialize({
      width: _W,
      height: _H,
      margin: 0.2,
      disableLayout: true,
      ...opts
    })
    deck.current.addEventListener('slidechanged', handleSlideChanged)
    deck.current.addEventListener('fragmentshown', updateFragment)
    deck.current.addEventListener('fragmenthidden', updateFragment)
    window.addEventListener('resize', setScale);
    return () => {
      deck.current.removeEventListener('slidechanged', handleSlideChanged)
      deck.current.removeEventListener('fragmentshown', updateFragment)
      deck.current.removeEventListener('fragmenthidden', updateFragment)
      window.removeEventListener('resize', setScale);
    }
  }, [])

  React.useEffect(() => {
    console.log("Current Fragment", curFragment)
  }, [curFragment])

  React.useEffect(() => {
    
    console.log("Current V", curV)
  }, [curV])

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
                
                <img src={picThailand} className="shadow-small" />
                <div>
                  แล้วประเทศไทย<br />
                  <orange>จะทำอย่างไรต่อไป?</orange>
                </div>
              </div>
            </div>
          </div> 
          <div className="note">
            Flaticon.com
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

              <div id="megatrends">
                <div className="trend">
                  <img src={picGeopolitics} className="shadow-large" />
                  <div>ภูมิรัฐศาสตร์</div>
                  <div className="below">Geopolitics</div>
                </div>
                <div className="trend fragment">
                  <img src={picTech} className="shadow-large" />
                  <div>ความก้าวหน้าทางเทคโนโลยี</div>
                  <div className="below">Technological advancement</div>
                </div>
                <div className="trend fragment">
                  <img src={picGlobalWarming} className="shadow-large" />
                  <div>ภาวะโลกร้อน</div>
                  <div className="below">Global warming</div>
                </div>
                <div className="trend fragment">
                  <img src={picAging} className="shadow-large" />
                  <div>สังคมสูงอายุ</div>
                  <div className="below">Aged society</div>
                </div>
                <div className="trend fragment">
                  <img src={picCovid} className="shadow-large" />
                  <div>แผลเป็นหลังโควิด</div>
                  <div className="below">COVID-19 scar</div>
                </div>
              </div>

              {/* <div style={{width: '50%', marginLeft: "auto", marginRight: "auto"}}>
                <PicNursingHome />
              </div> */}
            </div>
          </div>
          <div className="note">
            Flaticon.com
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
            <div>
              การส่งออกไทยไปจีนและสหรัฐฯ<br />
              มีมูลค่ารวมเกือบ 1 ใน 3 ของการส่งออก
            </div>
            <Chart
              type="line"
              height={120}
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
            <div className="note"><strong>ที่มา</strong>: ธนาคารแห่งประเทศไทย คำนวณโดยคณะผู้วิจัย</div>
          </section>
          <section>
            <div>
              จีน: สินค้าเกษตรและผลิตภัณฑ์พลาสติก<br />
              สหรัฐฯ: สินค้าอิเล็กทรอนิกส์และเครื่องจักร
            </div>
            <Chart
              type="bar"
              height={120}
              ref={el => charts.current['exports-products'] = el}
              data={{
                labels: ["Machinery", "Electrical machinery and equipment", "Vehicles", "Pearls, stones, precious metals", "Rubber products", "Plastics products", "Preparations of meat, fish etc.", "Mineral fuels", "Optical products", "Edible fruit and nuts; peel of citrus fruit or melons"],
                // labels: ["Machinery", "Electrical machinery", "Vehicles", "Pearls, stones, precious metals", "Rubber products", "Plastics products", "Preparations of meat, fish etc.", "Mineral fuels", "Optical products", "Edible fruit and nuts; peel of citrus fruit or melons"],
                // labels: ["Rubber products", "Machinery", "Plastics", "Electrical machinery", "Edible fruits and nuts"],
                datasets: [
                  {
                    data: [9.186, 9.109, 7.265, 0.781, 26.258, 27.144, 0.878, 10.032, 24.105, 69.528],
                    // data: [26.258, 9.186, 27.144, 9.109, 69.528], // new
                    label: "จีน",
                    backgroundColor: chroma(styles.cnColor).alpha(areaAlpha).hex(),
                    borderColor: styles.cnColor,
                  },
                  {
                    data: [22.286, 21.944, 9.632, 5.663, 26.865, 6.684, 17.254, 0.054, 15.372, 2.393],
                    // data: [26.865, 22.286, 6.684, 21.944, 2.393],
                    label: "สหรัฐฯ",
                    backgroundColor: chroma(styles.usColor).alpha(areaAlpha).hex(),
                    borderColor: styles.usColor,
                  },
                ]
              }}
              options={{
                indexAxis: 'y',
                layout: {
                  padding: 0,
                },
                radius: 0,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "สัดส่วนมูลค่าการส่งออกในหมวดสินค้านั้น ๆ (%)"
                    }
                  }
                },
                plugins: {
                  // title: {
                  //   display: true,
                  //   text: "สัดส่วนการส่งออกของไทยไปจีนและสหรัฐฯ",
                  // },
                  annotation: {
                    annotations: ([[-1, 5, 9], [0, 5, 9]][getFragment(charts.current['exports-products']?.canvas)] || [-1, 5, 9]).map(x => {
                      let offset = 0
                      if (x === 0)
                        offset = 1
                      return(
                        {
                          type: 'box',
                          yMin: x - 0.5,
                          yMax: x + 0.5 + offset,
                          backgroundColor: chroma('white').alpha(0.2).hex(),
                          borderColor: 'rgba(255, 255, 255, 0)',
                          drawTime: 'beforeDraw'
                        }
                      )}
                    )
                  }
                }
              }}
            />
            <div className="fragment" />
            <div className="note">
              <strong>หมายเหตุ</strong>: คำนวณจากข้อมูลล่าสุด ปี 2020
              <strong>ที่มา</strong>: ITC Trademap คำนวณโดยคณะผู้วิจัย
            </div>
          </section>

          <section>
            <div>
              ไทยพึ่งพานักท่องเที่ยวจีนถึง 28%<br />
              ของนักท่องเที่ยวทั้งหมด
            </div>
            <Chart
              type="line"
              height={120}
              ref={el => charts.current['tourists'] = el}
              data={{
                labels: ["Jan-15", "Feb-15", "Mar-15", "Apr-15", "May-15", "Jun-15", "Jul-15", "Aug-15", "Sep-15", "Oct-15", "Nov-15", "Dec-15", "Jan-16", "Feb-16", "Mar-16", "Apr-16", "May-16", "Jun-16", "Jul-16", "Aug-16", "Sep-16", "Oct-16", "Nov-16", "Dec-16", "Jan-17", "Feb-17", "Mar-17", "Apr-17", "May-17", "Jun-17", "Jul-17", "Aug-17", "Sep-17", "Oct-17", "Nov-17", "Dec-17", "Jan-18", "Feb-18", "Mar-18", "Apr-18", "May-18", "Jun-18", "Jul-18", "Aug-18", "Sep-18", "Oct-18", "Nov-18", "Dec-18", "Jan-19", "Feb-19", "Mar-19", "Apr-19", "May-19", "Jun-19", "Jul-19", "Aug-19", "Sep-19", "Oct-19", "Nov-19", "Dec-19", "Jan-20", "Feb-20", "Mar-20", "Apr-20", "May-20", "Jun-20", "Jul-20", "Aug-20", "Sep-20", "Oct-20", "Nov-20", "Dec-20", "Jan-21", "Feb-21", "Mar-21", "Apr-21", "May-21", "Jun-21", "Jul-21"],
                datasets: [
                  {
                    data: [81118, 71915, 74675, 67450, 63906, 67891, 70255, 56090, 53057, 70841, 88502, 101820, 93149, 82406, 87171, 74761, 72047, 78120, 81007, 61234, 58956, 73760, 98031, 115001, 101785, 87679, 93757, 87128, 76498, 86889, 86394, 67972, 62989, 77854, 105216, 122262, 109577, 90388, 106562, 88698, 81146, 90468, 88351, 71161, 65009, 82986, 118125, 129617, 112815, 92454, 106045, 92922, 82083, 94655, 88356, 70438, 63798, 84767, 118439, 129438, 113847, 72484, 24151, 0, 0, 0, 0, 0, 0, 23, 133, 437, 757, 668, 725, 1172, 1156, 850, 2510],
                    label: "สหรัฐฯ",
                    tension: 0.4,
                    backgroundColor: chroma(styles.usColor).alpha(areaAlpha).hex(),
                    borderColor: styles.usColor,
                    fill: true,
                  },
                  {
                    data: [560360, 780516, 663571, 701169, 668079, 632889, 775829, 800596, 532696, 566053, 615195, 637838, 814693, 958201, 856683, 816029, 738601, 715411, 865355, 891382, 658895, 474363, 432467, 535566, 859617, 790051, 789417, 748127, 762193, 762481, 937971, 983245, 760999, 805616, 790839, 815704, 969996, 1198971, 1004025, 986703, 869206, 900652, 929738, 867481, 647664, 646141, 675129, 838634, 1076816, 1079300, 993627, 909942, 804453, 844240, 1004061, 1056767, 868292, 832446, 804876, 863838, 1030148, 160564, 56852, 0, 0, 0, 0, 0, 0, 471, 914, 961, 572, 359, 589, 643, 505, 323, 1032],
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
                      text: "จำนวนนักท่องเที่ยว (คน)"
                    }
                  }
                },
                plugins: {
                  // title: {
                  //   display: true,
                  //   text: "สัดส่วนนักท่องเที่ยวจีนและสหรัฐฯ",
                  // },
                  legend: {
                    reverse: true,
                  },
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
                      },
                      covid: {
                        type: 'box',
                        xMin: "Feb-20",
                        xMax: "Jul-21",
                        drawTime: "beforeDatasetsDraw",
                        borderWidth: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      }
                    }
                  },
                  texts: {
                    texts: {
                      bombing: {
                        text: 'เหตุการณ์ระเบิดราชประสงค์',
                        x: 160,
                        y: 35,
                      },
                      tour: {
                        text: 'ทัวร์ศูนย์เหรียญ',
                        x: 460,
                        y: 35,
                      },
                      boat: {
                        text: 'เหตุการณ์เรือล่ม',
                        x: 725,
                        y: 35,
                      },
                      covid: {
                        text: 'วิกฤตโควิด-19',
                        x: 1110,
                        y: 35,
                      },
                    }
                  }
                }
              }}
            />
            {/* <Chart
              type="line"
              height={120}
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
                  legend: {
                    reverse: true,
                  },
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
                  texts: {
                    texts: {
                      bombing: {
                        text: 'เหตุการณ์ระเบิดราชประสงค์',
                        x: 125,
                        y: 35,
                      },
                      tour: {
                        text: 'ทัวร์ศูนย์เหรียญ',
                        x: 450,
                        y: 35,
                      },
                      boat: {
                        text: 'เหตุการณ์เรือล่ม',
                        x: 890,
                        y: 35,
                      },
                    }
                  }
                }
              }}
            /> */}
            <div className="note">
              <strong>ที่มา</strong>: กระทรวงการท่องเที่ยวและกีฬา คำนวณโดยคณะผู้วิจัย
            </div>
          </section>
          {/* <section>
            <div>
              การลงทุนทางตรงของสหรัฐฯ ยังอยู่ในระดับสูง<br />
              ขณะที่ของจีนเพิ่มขึ้นต่อเนื่อง
            </div>
            <Chart
              type="line"
              height={120}
              ref={el => charts.current['fdi'] = el}
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
            <div className="note"><strong>ที่มา</strong>: ธนาคารแห่งประเทศไทย ITC Trademap คำนวณโดยคณะผู้วิจัย</div>
          </section> */}

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
            </div>
            <ValueAddedLabel />
            <div className="note">
              <strong>หมายเหตุ</strong>: แยกตามสินค้าส่งออกหลักของไทย 5 ประเภท<br />
              <strong>ที่มา</strong>: ธนาคารแห่งประเทศไทย คำนวณโดยคณะผู้วิจัย
            </div>
          </section>

          <section>
            <div className="orange">
              ตัวอย่างความเปราะบางของการพึ่งพาแพลตฟอร์มต่างประเทศ
            </div>
            <div className="spacer" />
            <div>
              คนไทยพึ่งพาแพลตฟอร์มต่างประเทศในการซื้อสินค้าและบริการสูงมาก
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
                    backgroundColor: [
                      ...Array(5).fill(styles.greenColor),
                      ...Array(5).fill(styles.secondaryColor),
                    ].map(color => chroma(color).alpha(areaAlpha).hex()),
                  }
                ]
              }}
              options={{
                indexAxis: 'y',
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "สัดส่วนผู้ตอบแบบสำรวจ (%)"
                    }
                  },
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
            <div className="note">
              <strong>ที่มา</strong>: รายงานผลการสำรวจพฤติกรรมผู้ใช้อินเทอร์เน็ตในประเทศไทย ปี 2020 สำนักงานพัฒนาธุรกรรมทางอิเล็กทรอนิกส์
            </div>
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
          <div id="flood-container" className={`frag${getFragment(document.getElementById("flood-container"))}`}>
            <div id="flood-data">
              <div><div className="more">มากกว่า</div><div className="num">30%</div><div className="bottom">ของแรงงานนอกภาคเกษตร</div></div>
              <div><div className="more">มากกว่า</div><div className="num">20%</div><div className="bottom">ของจำนวนสถานประกอบการ</div></div>
              <div><div className="more">มากกว่า</div><div className="num">10%</div><div className="bottom">ของธุรกิจในอุตสาหกรรมส่งออกหลัก</div></div>
            </div>
            <img src={picFloodArea} id="flood-area" />
            <img src={picFloodBiz} id="flood-biz" />
          </div>
          <div className="fragment" />
          <div className="fragment" />
          <div className="note">
            <strong>ที่มา</strong>: Climate Central, สำมะโนอุตสาหกรรม ปี 2017 คำนวณโดยธนาคารแห่งประเทศไทย
          </div>
        </section>

        <section>
          <h2>
            <orange>#4</orange> สังคมสูงอายุส่งผลต่อโครงสร้างเศรษฐกิจไทยหลายด้าน<br />
          </h2>
          <div className="orange">
            ตัวอย่างความเปราะบางของโครงสร้างแรงงานไทย
          </div>
          <div className="spacer" />
          <div>
            สัดส่วนแรงงานสูงวัย (มากกว่า 50 ปี) <orange>เพิ่มขึ้นเกือบ 3 เท่า</orange>ในช่วงไม่ถึง 20 ปีที่ผ่านมา
          </div>
          <div id="pop" className="grid-3">
            <div className="fragment" data-fragment-index="1">
            <Pop
              ref={el => charts.current['pop-2002'] = el}
              title="2002 (3.42%)"
              data={{
                male: [721554, 566617, 446071, 305765, 191807, 117316, 66743, 29584, 13721],
                female: [868050, 605420, 456874, 298911, 174206, 87170, 38207, 13422, 4504],
                maleForeign: [813, 2336, 4140, 4783, 4155, 3426, 3117, 1741, 672],
                femaleForeign: [364, 664, 649, 460, 344, 203, 121, 57, 31],
              }}
            />
            </div>
            <div className="fragment" data-fragment-index="2">
              <Pop
                ref={el => charts.current['pop-2009'] = el}
                title="2009 (5.84%)"
                data={{
                  male: [689001, 803854, 671193, 506708, 374290, 244438, 142516, 69234, 24534],
                  female: [741137, 813156, 646882, 498837, 362407, 221357, 109873, 42109, 12807],
                  maleForeign: [5169, 6161, 6802, 7733, 7866, 6313, 4532, 3314, 1501],
                  femaleForeign: [3612, 2923, 2037, 1728, 1072, 630, 354, 144, 59],
                }}
              />
            </div>
            <div className="fragment" data-fragment-index="2">
              <Pop
                ref={el => charts.current['pop-2019'] = el}
                title="2019 (9.91%)"
                data={{
                  male: [715941, 736427, 653627, 664370, 539958, 412479, 294215, 144834, 51606],
                  female: [780933, 781834, 674107, 659776, 514249, 390667, 262010, 114599, 35804],
                  maleForeign: [146626, 131895, 115796, 84238, 48089, 28214, 14476, 5103, 2417],
                  femaleForeign: [110226, 96483, 80600, 55819, 27738, 14753, 5430, 715, 178],
                }}
              />
            </div>
          </div>
          <div className="note">
            <strong>ที่มา</strong>: สำนักงานประกันสังคม คำนวณโดยธนาคารแห่งประเทศไทย
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
          <split>
            <div>
              <Chart
                type="line"
                width="100%"
                height={200}
                ref={el => charts.current['debt-time'] = el}
                data={{
                  labels: ["2019Q1", "2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3", "2020Q4", "2021Q1", "2021Q2"],
                  datasets: [
                    {
                      data: [270590, 226722, 230139, 269892, 300600, 148902, 246712, 375870, 485447, 414478],
                      label: "เริ่มค้างชำระเกิน 30 วัน",
                      tension: 0.4,
                      backgroundColor: chroma('yellow').saturate(0).brighten(-0.5).alpha(areaAlpha*0.7).hex(),
                      borderColor: chroma('yellow').saturate(0).brighten(-0.5).alpha(areaAlpha*0.7).hex(),
                      fill: true,
                    },
                    {
                      data: [116539, 188692, 159448, 166203, 151044, 95208, 147564, 160150, 224416, 293584],
                      label: "เริ่มค้างชำระเกิน 60 วัน",
                      tension: 0.4,
                      backgroundColor: chroma('orange').saturate(0).brighten(-0.5).alpha(areaAlpha*0.7).hex(),
                      borderColor: chroma('orange').saturate(0).brighten(-0.5).alpha(areaAlpha*0.7).hex(),
                      fill: true,
                    },
                    {
                      data: [99443, 286083, 199731, 172685, 128786, 87597, 87027, 127230, 167354, 252879],
                      label: "เริ่มค้างชำระเกิน 90 วัน",
                      tension: 0.4,
                      backgroundColor: chroma('red').saturate(0).brighten(-0.5).alpha(areaAlpha*0.7).hex(),
                      borderColor: chroma('red').saturate(0).brighten(-0.5).alpha(areaAlpha*0.7).hex(),
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
                        text: "จำนวนผู้กู้ (คน)"
                      },
                    },
                    x: {
                      stacked: true,
                    }
                  },
                  plugins: {
                    // title: {
                    //   display: true,
                    //   text: "สัดส่วนการส่งออกของไทยไปจีนและสหรัฐฯ",
                    // },
                    annotation: {
                      annotations: {
                        covid: {
                          type: 'box',
                          xMin: "2020Q2",
                          // xMax: "Dec-15",
                          drawTime: "beforeDatasetsDraw",
                          borderWidth: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        },
                      }
                    },
                    texts: {
                      texts: {
                        bombing: {
                          text: 'หมดมาตรการฯ ระยะแรก',
                          x: 510,
                          y: 35,
                        },
                      },
                    },
                  }
                }}
              />
            </div>
            <div className="fragment">
              <Chart
                type="bar"
                width="100%"
                height={200}
                ref={el => charts.current['debt-age'] = el}
                data={{
                  labels: ["< 30", "30–34", "35–40", "41–44", "45–50", "51–54", "55–60", "> 60"],
                  datasets: [
                    {
                      data: [0.1635731, 0.1742387, 0.1722372, 0.1623036, 0.1486334, 0.1371109, 0.1249853, 0.1181232].map(x => x * 100),
                      label: "ก่อนโควิด-19",
                      backgroundColor: chroma(styles.fourthColor).alpha(areaAlpha).hex(),
                    },
                    {
                      data: [0.0588485, 0.0624361, 0.0555808, 0.0466168, 0.036707, 0.0287787, 0.0239221, 0.0152312].map(x => x * 100),
                      label: "เพิ่มช่วงโควิด-19",
                      backgroundColor: chroma(styles.secondaryColor).alpha(areaAlpha).hex(),
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
                        text: "สัดส่วนผู้กู้ที่ค้างชำระเกิน 90 วัน (%)"
                      },
                    },
                    x: {
                      stacked: true,
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
          <div className="note">
            <strong>ที่มา</strong>: ข้อมูลเชิงสถิติจากเครดิตบูโร คำนวณโดยคณะผู้วิจัย
          </div>
        </section>



        {// Social Divide
        }


        <section>
          <div className="vertical-center">
            <h1>
              …แต่ประเด็นทางเศรษฐกิจ<br />
              ไม่ได้เป็นความเปราะบางเพียงอย่างเดียว<br />
              <orange>ต้องพิจารณาประเด็นทางสังคมควบคู่ไปด้วย</orange>
            </h1>
          </div>
				</section>

        <section>
					<h2>
						มีความสัมพันธ์ระหว่างความเหลื่อมล้ำทางเศรษฐกิจ<br />
            กับความสมานฉันท์ในสังคม (social cohesion)
          </h2>
          <section>
            <div id="cohesion">
              <div className="circle inequality">ความเหลื่อมล้ำ</div>
              <div className="circle cohesion">ความสมานฉันท์</div>
              <div className="fragment arrow-pointer arrow-pointer-right"><span>Easterly <em>et al.</em> (2006)</span></div>
              <div className="fragment arrow-pointer arrow-pointer-left">Sommon (2019)</div>
            </div>
          </section>

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
            <div className="note"><strong>ที่มา</strong>: ข้อมูลจาก World Values Survey และ World Bank คำนวณโดยคณะผู้วิจัย</div>
          </section>
				</section>

        
        
        <section>
          <h2>สังคมไทยมีความเชื่อใจต่อกันลดลงอย่างต่อเนื่อง…</h2>
          <Chart
            type="bar"
            height={170}
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
                  title: {
                    display: true,
                    text: "คะแนน"
                  }
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
          <div className="note"><strong>ที่มา</strong>: ข้อมูลจาก World Values Survey รอบที่ 5–7</div>
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
                  data: [0.023483366, 0.021526419, 0.014350946, 0.041748206, 0.259621657, 0.200260926, 0.240704501, 0.127853881, 0.033920417, 0.03652968].map(x => x*100),
                  label: "2008",
                  tension: 0.4,
                },
                {
                  data: [[0.023483366, 0.021526419, 0.014350946, 0.041748206, 0.259621657, 0.200260926, 0.240704501, 0.127853881, 0.033920417, 0.03652968], [0.019212296, 0.014409222, 0.030739673, 0.055715658, 0.361191162, 0.194044188, 0.11431316, 0.106628242, 0.037463977, 0.066282421]][getFragment(charts.current['political-shift']?.canvas)].map(x => x*100),
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
                  grid: {
                    color: 'rgb(255, 255, 255, 0)',
                  },
                },
                y: {
                  max: 40,
                  title: {
                    display: true,
                    text: "สัดส่วนผู้ตอบแบบสอบถาม (%)"
                  }
                }
              },
              plugins: {
                title: {
                  display: true,
                  text: "ทัศนคติทางการเมืองจาก World Values Survey",
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
          <div className="note"><strong>ที่มา</strong>: ข้อมูลจาก World Values Survey รอบที่ 5–7</div>
          <div class="fragment" />
        </section>

        <section>
          <h2>
            แบบสำรวจ <orange>"คิดต่าง อย่างมีภูมิ"</orange>
          </h2>
          <div>
            <h3>คำถามวิจัย</h3>
            <ul>
              <li>ความสมานฉันท์ในสังคมไทย</li>
              <li>ความ "คิดต่าง" ในสังคมไทย</li>
              <li>ความคิดต่างกับความแตกแยก</li>
              <li>ปัจจัยที่สัมพันธ์กับความแตกแยก</li>
            </ul>
          </div>
          <div className="spacer" />
          <div className="fragment">
            <h3>แบบสอบถามออนไลน์</h3>
            <p>สิงหาคม–กันยายน 2021 หลากหลายกลุ่มเศรษฐกิจและสังคม</p>
            <div className="flex center" style={{height: '5em', width: '50%'}}>
              <div className="fragment">
                <img src={picDemographics} className="center shadow-large" style={{display: 'block'}} />
                <div className="small">Demographics</div>
              </div>
              <div className="fragment">
                <img src={picSocialQuality} className="center shadow-large" style={{display: 'block'}} />
                <div className="small">Social Quality</div>
              </div>
              <div className="fragment">
                <img src={picOpinions} className="center shadow-large" style={{display: 'block'}} />
                <div className="small">Values & Opinions</div>
              </div>
              <div className="fragment">
                <img src={picSocialMedia} className="center shadow-large" style={{display: 'block'}} />
                <div className="small">Media & Exchange</div>
              </div>
            </div>
          </div>
          <div className="note">
            Flaticon.com
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
              <li>จากข้อจำกัดด้านเวลาและสถานการณ์โควิด กลุ่มตัวอย่างที่ได้ มีกลุ่มอายุวัยกลางคน กลุ่มคนกรุงเทพฯ และรายได้ สูงกว่าโครงสร้างประชากรไทย</li>
            </ul>
          </div>
          

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
              ref={el => charts.current['survey-area'] = el}
              groups={["นอกเขตเทศบาล", "ในเขตเทศบาล", "กรุงเทพฯ"]}
              pop={[0.563505023, 0.313015343, 0.123479635]}
              sample={[0.159067882, 0.242654509, 0.598277609]}
              title="พื้นที่"
            />
          </section>
          <section>
            <ComparePop
              ref={el => charts.current['survey-income'] = el}
              groups={["< 10,000", "10,000–25,000", "25,001–50,000", "50,001–80,000", "80,001–120,000", "120,001–200,000", "200,001–500,000", "> 500,000"]}
              pop={[0.154819513, 0.405666645, 0.251476368, 0.103813561, 0.044534863, 0.024262061, 0.011692634, 0.003734356]}
              sample={[0.032928065, 0.095744681, 0.166666667, 0.151975684, 0.151469098, 0.138804458, 0.168693009, 0.093718338]}
              title="รายได้"
            />
          </section>
          {/* <section>
            <ComparePop
              ref={el => charts.current['survey-occupation'] = el}
              groups={["ธุรกิจส่วนตัว/รับจ้าง", "ข้าราชการ", "นักเรียน", "ทำงานที่บ้าน", "พนักงานเอกชน ", "เกษียณ/ว่างงาน"]}
              pop={[0.214418738, 0.055638929, 0.05916952, 0.165197247, 0.243307944, 0.262267623]}
              sample={[0.240894901, 0.277835588, 0.041623309, 0.036940687, 0.294484912, 0.108220604]}
              title="อาชีพ"
            />
          </section> */}

        </section>

        <section>
          <SocialOutline n={1} />
        </section>

        {// TODO: add poor => no social trust & young => no inst trust
        }
        <section>
          <h2>
            ความสมานฉันท์ในสังคมไทยอยู่ในระดับต่ำ<br />
            เทียบกับคุณภาพสังคมด้านอื่น ๆ
          </h2>
          <Chart
            type="bar"
            // height={180}
            ref={el => charts.current['cohesion'] = el}
            data={{
              labels: [
                "ความรู้สึกมั่นคงทางเศรษฐกิจ",
                "ความรู้สึกมั่นคงทางสังคม",
                "การเข้าถึงตลาดแรงงาน",
                "การเข้าถึงการศึกษา",
                "ความเชื่อใจทางสังคม",
                "ความเชื่อมั่นในองค์กร",
                "ความสามัคคี",
                "ความอิสระในการกำหนดเส้นทางชีวิต",
                "การมีส่วนร่วมในกิจกรรมการเมือง",
                "ความสามารถในการเปลี่ยนแปลงสังคม"
              ],
              datasets: [
                {
                  label: "ค่าเฉลี่ยของกลุ่มตัวอย่าง",
                  data: [78.01819, 72.15211, 51.61855, 48.9426, 43.25326, 33.90756, 30.442, 72.68779, 64.38076, 60.83162],
                  backgroundColor: [
                    ...Array(2).fill(chroma(chroma.brewer.Pastel1[0]).saturate(0.4).alpha(0.3*areaAlpha).hex()),
                    ...Array(2).fill(chroma(chroma.brewer.Pastel1[1]).saturate(0.4).alpha(0.3*areaAlpha).hex()),
                    ...Array(3).fill(chroma(styles.secondaryColor).alpha(areaAlpha).hex()),
                    ...Array(3).fill(chroma(chroma.brewer.Pastel1[2]).saturate(0.4).alpha(0.3*areaAlpha).hex()),
                  ],
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
                    text: "ดัชนี"
                  }
                },
                y: {
                  ticks: {
                    color: [
                      ...Array(4).fill(chroma(styles.textColor).alpha(0.3).hex()),
                      ...Array(3).fill(styles.textColor),
                      ...Array(3).fill(chroma(styles.textColor).alpha(0.3).hex()),
                    ]
                  }
                }
              },
              plugins: {
                legend: {
                  display: false,
                },
                annotation: {
                  annotations: {
                    highlight: {
                      type: 'box',
                      yMin: 3.5,
                      yMax: 6.5,
                      backgroundColor: chroma('black').alpha(0.2).hex(),
                      borderColor: 'rgba(255, 255, 255, 0)',
                      drawTime: 'beforeDraw'
                    }
                  }
                }
              }
            }}
          />
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
              <img src={picPassionFruit} height="200px" className="shadow-large" />
              <div className="top">
                สิทธิ<br />
                เสรีภาพ<br />
                ความหลากหลาย<br />
                ความเสมอภาค<br />
                ความเท่าเทียม
              </div>
              <p>
                ให้ความสำคัญกับหลักสิทธิเสรีภาพและความเสมอภาค<span className="nobreak">ภายใต้</span>ความหลากหลายในสังคม เช่น สิทธิในการแสดงออก <span className="nobreak">การยกระดับ</span>คุณภาพชีวิตของคนในสังคมให้เท่าเทียมกัน<span className="nobreak">มากขึ้น</span> เป็นต้น
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
                      backgroundColor: politicalColors.colors(6),
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
                      },
                      title: {
                        display: true,
                        text: getFragment(charts.current['extremity']?.canvas) === 2 ? "จำนวน (ราย)" : "",
                      },
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
              <img src={picBanana} height="200px" className="shadow-large" />
              <div className="top">
                ประเพณีนิยม<br />
                ศีลธรรมอันดีงาม<br />
                ความเป็นหนึ่งเดียว<br />
                การเคารพผู้อาวุโส<br />
                ความมั่นคงในชีวิต
              </div>
              <p>
                ให้ความสำคัญกับความเป็นอันหนึ่งอันเดียวกันในสังคม <span className="nobreak">ความมั่นคงในชีวิต</span> และประเพณีนิยม เช่น ศีลธรรมอันดีงาม <span className="nobreak">การสืบทอดจารีตประเพณี</span> <span className="nobreak">การเคารพผู้อาวุโส</span>
              </p>
            </div>
          </div>
          <div className="fragment" />
          <div className="fragment" />
          <div className="note">
            Flaticon.com
          </div>
        </section>

        <section>
          <SocialOutline n={3} />
        </section>

        <section>
          <h2>
            ความคิดต่าง นำไปสู่ความรู้สึกไม่ดีต่อคนต่างความคิด
          </h2>
          {/* <div>
            คนที่มีความเห็นสุดขั้ว มีความรู้สึกไม่ดีต่อคน "คิดต่าง" มากกว่ากลุ่มที่มีความคิดเห็นกลาง ๆ
          </div> */}
          
          {/* <section> */}
            <Chart
              type="bar"
              height={180}
              ref={el => charts.current['social-divide-1'] = el}
              data={{
                labels: ["ความเห็นอกเห็นใจ (ช่วยว่าความให้หากเป็นทนาย)", "ความชอบ/ไม่ชอบ", "ความเต็มใจแลกเปลี่ยนความคิดเห็น", "ความไว้วางใจ", "ความเห็นอกเห็นใจ (ช่วยเหลือหากประสบอุบัติเหตุ)"],
                datasets: [
                  {
                    label: "ค่าเฉลี่ยของกลุ่มตัวอย่าง",
                    data: [36.6, 57.2, 61.6, 65.2, 86.1],
                    // backgroundColor: chroma(styles.secondaryColor).alpha(areaAlpha).hex(),
                  }
                ]
              }}
              options={{
                indexAxis: 'y',
                plugins: {
                  legend: {
                    display: false,
                  }
                },
                scales: {
                  x: {
                    max: 100,
                    title: {
                      display: true,
                      text: "คะแนน"
                    }
                  },
                  y: {
                    reverse: true,
                  }
                },
              }}
            />
          {/* </section> */}

          {/* <section>
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
          </section> */}

        </section>


        <section>
          <h2>
            ความคิดต่าง ทำให้ยิ่งมองความต่างมากเกินจริง
          </h2>
          <div className="spacer" />
          <section>
            <div>
              Westfall <em>et al.</em> (2015) พบว่าคน<orange>คิดว่าสองฝั่งมีความแตกต่างกันมากกว่าความเป็นจริง</orange>
            </div>
            <div style={{height: '2em'}} />
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
                        data: getFragment(charts.current['perception-example']?.canvas) < 6 ? [Array(2).fill((2.180633 + 4.314031) / 2)] : [[2.180633, 4.314031]],
                        backgroundColor: chroma(styles.fourthColor).alpha(areaAlpha).hex(),
                      },
                      {
                        label: "ความแตกต่างจริง",
                        data: getFragment(charts.current['perception-example']?.canvas) < 7 ? [Array(2).fill((2.985117 + 3.854922) / 2)] : [[2.985117, 3.854922]],
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
                            borderColor: politicalColors.colors(6)[0],
                            backgroundColor: politicalColors.colors(6)[0],
                            borderWidth: 3,
                            radius: getFragment(charts.current['perception-example']?.canvas) >= 2 && getFragment(charts.current['perception-example']?.canvas) < 8 ? 20: 0,
                          },
                          yellowImage: {
                            type: 'point',
                            xValue: 4.314031,
                            yValue: " ",
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            borderColor: politicalColors.colors(6)[5],
                            borderWidth: 3,
                            borderDash: [5, 5],
                            radius: getFragment(charts.current['perception-example']?.canvas) >= 3 && getFragment(charts.current['perception-example']?.canvas) < 8 ? 20: 0,
                          },
                          yellowActual: {
                            type: 'point',
                            xValue: 3.854922,
                            yValue: " ",
                            borderColor: politicalColors.colors(6)[5],
                            backgroundColor: politicalColors.colors(6)[5],
                            borderWidth: 3,
                            radius: getFragment(charts.current['perception-example']?.canvas) >= 4 && getFragment(charts.current['perception-example']?.canvas) < 8 ? 20 : 0,
                          },
                          orangeImage: {
                            type: 'point',
                            xValue: 2.180633,
                            yValue: " ",
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            borderColor: politicalColors.colors(6)[0],
                            borderWidth: 3,
                            borderDash: [5, 5],
                            radius: getFragment(charts.current['perception-example']?.canvas) >= 5 && getFragment(charts.current['perception-example']?.canvas) < 8 ? 20 : 0,
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
              highlightArray={[2]}
              style={{marginTop: '-2.5em'}}
            />
          </section>
        </section>
        

        <section>
          <SocialOutline n={4} />
        </section>

        <section>
          <div className="vertical-center">
            <div>
              <h2>ปัจจัยที่สัมพันธ์กับความแตกแยก</h2>
              <ol>
                <li>ความสุดขั้ว</li>
                <li>ความต่างวัย</li>
                <li>ความมั่นคงในชีวิต</li>
                <li>การพูดคุยแลกเปลี่ยนความคิดเห็น</li>
                <li>ความหลากหลายของสื่อที่ติดตาม</li>
              </ol>
            </div>
          </div>
        </section>

        <section>

          <section><h2><orange>#1</orange> ความสุดขั้ว</h2></section>
          <section><h2><orange>#2</orange> ความต่างวัย</h2></section>
          <section><h2><orange>#3</orange> ความมั่นคงในชีวิต</h2></section>
          <section><h2><orange>#4</orange> การพูดคุยแลกเปลี่ยนความคิดเห็น</h2></section>
          <section>
            <h2><orange>#5</orange> การบริโภคสื่อ</h2>
            <div className="fragment" />
          </section>

          <div id="media">
            <h3>สื่อ เรียงลำดับตามความเป็นไปได้ที่คนแต่ละกลุ่มจะติดตาม</h3>
            <div id="media-scale">
              {
                mediaData.map((data, i) => (
                  <div className="media-box">
                    <div style={{height: `${Math.abs(data)*30}px`, backgroundColor: politicalColors((data + 8) / 16).hex()}} />
                    <img className="media-logo" src={mediaLogo[i]} />
                  </div>
                ))
              }
            </div>
            <split>
              <div>
                <h3 className="orange">Echo chamber</h3>
                <p>สัดส่วนของสื่อที่ติดตามที่คนกลุ่มเดียวกันติดตาม</p>
              </div>
              <div>
                <h3 className="orange">Media entropy</h3>
                <p>ความหลากหลายของสื่อที่ติดตาม</p>
              </div>
            </split>
            {/* <Chart
              type="bar"
              height={200}
              ref={el => charts.current["media"] = el}
              data={{
                labels: mediaLabel,
                datasets: [
                  {
                    label: "x",
                    data: mediaData,
                    backgroundColor: mediaData.map(x => politicalColors((x + 8) / 16).hex()),
                  },
                ]
              }}
              options={{
                indexAxis: 'y',
                plugins: {
                  legend: {
                    display: false,
                  }
                }
              }}
            /> */}

          </div>
          
          <div style={{height: '3.5em'}} />
          <div className="grid-3">
            {
              [...Array(3).keys()].map(i =>
                <Coefficients
                  ref={el => charts.current[`coef-1-${i}`] = el}
                  data={coefData}
                  i={i}
                  highlightArray={[[0, 1, 2], [3, 4, 5, 6], [7], [8, 9], [10, 11]][curV]}
                />
              )
            }
          </div>
        </section>

        {/* <section>
          <h2><orange>#5</orange> การบริโภคสื่อ</h2>
          <div className="grid-3">
            {
              [...Array(3).keys()].map(i =>
                <Coefficients
                  ref={el => charts.current[`coef-2-${i}`] = el}
                  title={coefData[i].title}
                  input={coefData[i].data}
                  highlightArray={[8, 9]}
                />
              )
            }
          </div>
        </section> */}

        <section>
          <div className="vertical-center">
            <div>
              <h2>ผลการศึกษาที่สำคัญ</h2>
              <ol>
                <li className="fragment fade-in-then-semi-out">ความสมานฉันท์ของสังคมไทยเป็นมิติที่เปราะบางที่สุดเทียบกับคุณภาพสังคมในมิติอื่น ๆ</li>
                <li className="fragment fade-in-then-semi-out">ทุกกลุ่มในสังคมไทยมีความคิดต่าง</li>
                <li className="fragment fade-in-then-semi-out">ความคิดต่างอาจนำไปสู่ความแตกแยก โดยเฉพาะความคิดต่างแบบสุดขั้ว</li>
                <li className="fragment">
                  ความต่างวัย และความไม่มั่นคงทางเศรษฐกิจ อาจนำไปสู่ความแตกแยกเพิ่มขึ้น<br />
                  การพูดคุยแลกเปลี่ยนความคิดเห็น การบริโภคสื่อที่หลากหลาย อาจช่วยลดความแตกแยก
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h2>คน "คิดต่าง" อาจไม่ได้ต่างอย่างที่คิด</h2>
          <Perception
            ref={el => charts.current['perception-close'] = el}
            highlightArray={[6, 7, 8]}
            style={{marginTop: '-0.5em'}}
          />
        </section>

        <section>
          <div className="vertical-center">
            <h1>แล้วเราจะทำอย่างไรต่อไป?</h1>
          </div>
        </section>

        <section>
          <div style={{height: '9em'}} />
          <section><h1 style={{fontSize: '3em'}}>เปิดใจ</h1></section>
          <section><h1 style={{fontSize: '3em'}}>รับฟัง</h1></section>
          <section><h1 style={{fontSize: '3em'}}>พูดคุย</h1></section>
          <section><h1 style={{fontSize: '3em'}}>ร่วมมือ</h1></section>
          <section>
            <div className="vertical-center">
              <div>
                <h1>เปิดใจ รับฟัง พูดคุย ร่วมมือ</h1>
                <h2 className="orange" style={{marginBottom: 0}}>"คิดต่าง อย่างมีภูมิ"</h2>
              </div>
            </div>
          </section>
        </section>

        {// phase ต่อไป?
        }
        
      </div>
  );
}

export default App;
