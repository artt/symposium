import React from 'react'
import Chart from './Chart'
import chroma from 'chroma-js'

import styles from '../css/theme/source/_variables.module.scss'

const areaAlpha = 0.75

const Coefficients = React.forwardRef(({ highlightArray=[], data, i, ...rest }, ref) => {

  function alpharize(color) {
    return Array(12).fill(chroma(color).alpha(0.3).hex()).map((x, i) => highlightArray.includes(i) ? color : x)
  }

  // const barColors = 
  //   (i === 1)
  //   ? data[i].data.map(x => x > 0 ? 'green' : 'firebrick').map(x => chroma(x).brighten(1).hex())
  //   : data[i].data.map(x => x < 0 ? 'green' : 'firebrick').map(x => chroma(x).brighten(1).hex())

  const barColors = data[i].data.map(x => x < 0 ? 'green' : 'firebrick').map(x => chroma(x).brighten(1).hex())

  return(
    <Chart
      type="bar"
      width="100%"
      height={400}
      ref={ref}
      data={{
        labels: (i === 0 ? [" ", " ", " "] : ["Stance: Mild", "Stance: Moderate", "Stance: Extreme"]).concat(["Age: ≤ 30", "Age: 30–39", "Age: 40–59", "Age: ≥ 60", "Security index", "Openness: family", "Openness: friends", "Media echo", "Media entropy"]),
        datasets: [
          {
            data: data[i].data,
            backgroundColor: barColors//.map((c, i) => chroma(c).alpha(areaAlpha * (highlightArray.includes(i) ? 1 : 0.3)).hex()),
          },
        ]
      }}
      options={{
        layout: {
          padding: 0
        },
        indexAxis: 'y',
        scales: {
          y: {
            // stacked: true,
            ticks: {
              color: alpharize(styles.textColor, 1),
            }
          },
          x: {
            // ticks: {
            //   callback: (value, index) => {
            //     if (value % 5e5 === 0)
            //       return Math.abs(value)
            //     return null
            //   }
            // }
            min: [-3, -15, -1.5][i],
            max: [3, 15, 1.5][i],
            // title: {
            //   display: true,
            //   text: "คะแนน",
            // },
          }
        },
        plugins: {
          title: {
            display: true,
            text: data[i].title,
          },
          legend: {
            display: false,
          },
          annotation: {
            annotations: {
              highlight: {
                type: 'box',
                yMin: ((highlightArray[0] === 0) && (i === 0)) ? 2.5 : highlightArray[0] - 0.5,
                yMax: ((highlightArray[0] === 0) && (i === 0)) ? 2.5 : highlightArray[highlightArray.length-1] + 0.5,
                backgroundColor: chroma('black').alpha(0.2).hex(),
                borderColor: 'rgba(255, 255, 255, 0)',
                drawTime: 'beforeDraw'
              }
            }
          }
        }
      }}
      {...rest}
    />
  )
})

export default Coefficients