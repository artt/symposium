import React from 'react'
import Chart from './Chart'
import chroma from 'chroma-js'

const politicalColors = chroma.scale(['orange', 'white', 'yellow'])
const politicalLabels = ["เสาวรสมากที่สุด", "เสาวรสค่อนข้างมาก", "ค่อนไปทางเสาวรส", "ค่อนไปทางกล้วยหอม", "กล้วยหอมค่อนข้างมาก", "กล้วยหอมมากที่สุด"]

const ageLabel = ["< 30", "30–39", "40–59", "≥ 60"]
const ageData = [
  [0.433692, 0.366541, 0.191684, 0.182648],
  [0.390681, 0.308271, 0.194726, 0.210046],
  [0.100358, 0.180451, 0.208925, 0.182648],
  [0.039427, 0.082707, 0.204868, 0.200913],
  [0.014337, 0.043233, 0.129817, 0.132420],
  [0.021505, 0.018797, 0.069980, 0.091324],
]

const ExtremityBreakdown = React.forwardRef(({ data, label, title, ...rest }, ref) => {

  return(
    <Chart
      type="line"
      style={{minHeight: "300px"}}
      ref={ref}
      // height={200}
      data={{
        labels: ageLabel,
        datasets: ageData.map((d, i) => ({
          label: politicalLabels[i],
          data: d.map(x=>x*100),
          backgroundColor: politicalColors.colors(6)[i],
          fill: true,
          tension: 0.4,
          borderColor: 'rgba(255, 255, 255, 0)',
        }))
      }}
      options={{
        interaction: {
          intersect: false,
          mode: 'index',
          axis: 'y',
        },
        radius: 0,
        indexAxis: 'y',
        scales: {
          y: {
            stacked: true,
            reverse: true,
          },
          x: {
            stacked: true,
            max: 100,
            title: {
              display: true,
              text: "สัดส่วนของกลุ่ม (%)"
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: title,
          },
          legend: {
            display: false,
          }
        }
      }}
    />
  )


})

export default ExtremityBreakdown