import React from 'react'
import Chart from './Chart'
import chroma from 'chroma-js'

import styles from '../css/theme/source/_variables.module.scss'

const areaAlpha = 0.75

const Coefficients = React.forwardRef(({ highlightArray=[], data, i, ...rest }, ref) => {

  function alpharize(color) {
    return Array(10).fill(chroma(color).alpha(0.3).hex()).map((x, i) => highlightArray.includes(i) ? color : x)
  }

  const barColors = data[i].data.map(x => x > 0 ? 'green' : 'firebrick').map(x => chroma(x).brighten(1).hex())

  return(
    <Chart
      type="bar"
      width="100%"
      height={400}
      ref={ref}
      data={{
        labels: (i === 0 ? [" ", " "] : ["Ext 1", "Ext 2"]).concat(["30–39", "40–59", "≥ 60", "Security Index", "Openness family", "Openness Friends", "Media entropy", "Media echo"]),
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
                yMin: ((highlightArray[0] === 0) && (i === 0)) ? 1.5 : highlightArray[0]-0.5,
                yMax: ((highlightArray[0] === 0) && (i === 0)) ? 1.5 : highlightArray[highlightArray.length - 1] + 0.5,
                backgroundColor: chroma(styles.fourthColor).alpha(0.2).hex(),
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