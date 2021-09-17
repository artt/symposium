import React from 'react'
import Chart from './Chart'
import chroma from 'chroma-js'

import styles from '../css/theme/source/_variables.module.scss'

const areaAlpha = 0.675

const Perception = React.forwardRef(({highlightArray=[], ...rest }, ref) => {
  return(
    <Chart
      type="bar"
      height={165}
      width="90%"
      ref={ref}
      data={{
        labels: [
          ["ในการปกครอง การมีผู้นำที่ดี มีศีลธรรม", "สำคัญกว่าการมีระบบที่สามารถตรวจสอบผู้นำได้"],
          ["ควรทำธุรกิจสีเทา", "(การพนัน การค้าประเวณี) ให้เป็นธุรกิจถูกกฎหมาย"],
          ["รัฐประหารเป็นสิ่งที่ยอมรับได้"],
          ["ท่านยอมรับได้หากรัฐจะสอดแนมประชาชน", "เพื่อรักษาความมั่นคงของประเทศ"],
          ["ท่านยอมรับได้หากรัฐใช้ความรุนแรงต่อชีวิตหรือทรัพย์สิน", "ของประชาชนเพื่อรักษาความมั่นคงของประเทศ"],
          ["การใช้ความสัมพันธ์ส่วนตัว", "เพื่อสิทธิพิเศษบางอย่างเป็นสิ่งที่ยอมรับได้"],
          ["ในการเลือกสมาชิกสภาผู้แทนราษฎร", "คะแนนเสียงของทุกคนควรมีน้ำหนักเท่ากัน"],
          ["หากไม่มีปัญหาการโกงกิน รัฐควรจัดเก็บภาษีให้มากขึ้นเพื่อพัฒนาบริการ", "ขั้นพื้นฐานให้มีคุณภาพสูง ตรงความต้องการของคนทุกระดับรายได้"],
          ["แม้ว่าท่านจะเห็นว่าคำสั่งของหัวหน้าผิดศีลธรรม", "ท่านก็ยังจะทำตามคำสั่งนั้นเพราะเป็นหน้าที่ของท่าน"],
        ],
        datasets: [
          {
            hidden: false,
            label: "ความแตกต่างที่คิด",
            data: [[2.183398, 3.985496], [3.346723, 2.042187], [1.57685, 3.795764], [1.735632, 3.631497], [1.54352, 3.471264], [2.136179, 3.566745], [4.2, 3.122143], [3.28, 3.193705], [2.031056, 3.256369]],
            backgroundColor: chroma(styles.fourthColor).alpha(areaAlpha).hex(),
            categoryPercentage: 0.5,
          },
          {
            label: "ความแตกต่างจริง",
            data: [[2.102983, 3.418564], [3.7066, 2.55536], [1.58794, 2.704626], [1.767591, 2.866432], [1.388889, 2.326279], [1.85592, 2.134276], [4.701779, 4.439153], [4.016429, 3.816254], [1.441029, 1.563604]],
            backgroundColor: chroma(styles.secondaryColor).alpha(areaAlpha).hex(),
            categoryPercentage: 0.5,
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
                  return ['1', 'ไม่เห็นด้วยเลย']
                if (value === 5)
                  return ['5', 'เห็นด้วยมากที่สุด']
                if (value % 1 === 0)
                  return value
                return null
              },
            },
          },
          y: {
            ticks: {
              color: Array(9).fill(chroma(styles.textColor).alpha(0.3).hex()).map((x, i) => highlightArray.includes(i) ? styles.textColor : x),
            }
          }
        },
      }}
      {...rest}
    />
  )
})

export default Perception