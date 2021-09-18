import React from 'react'
import Chart from './Chart'
import chroma from 'chroma-js'

import styles from '../css/theme/source/_variables.module.scss'

const areaAlpha = 0.75

const Coefficients = React.forwardRef(({ highlightArray=[], title, input, ...rest }, ref) => {

  function alpharize(color) {
    return Array(10).fill(chroma(color).alpha(0.3).hex()).map((x, i) => highlightArray.includes(i) ? color : x)
  }

  const barColors = input
    .map(x => x > 0 ? 'green' : 'firebrick')
    .map((x, i) => chroma(x).brighten(1).alpha(areaAlpha * (highlightArray.includes(i) ? 1 : 0.3)).hex())

  return(
    <Chart
      type="bar"
      width="100%"
      height={400}
      ref={ref}
      data={{
        labels: ["Ext 1", "Ext 2", "30–39", "40–59", "≥ 60", "Security Index", "Openness family", "Openness Friends", "Media entropy", "Media echo"],
        datasets: [
          {
            data: input,
            backgroundColor: barColors,
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
            text: title,
          },
          legend: {
            display: false,
          }
        }
      }}
      {...rest}
    />
  )
})

export default Coefficients