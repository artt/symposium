import React from 'react'
import Chart from './Chart'
import chroma from 'chroma-js'

import styles from '../css/theme/source/_variables.module.scss'

const areaAlpha = 0.75

const Coefficients = React.forwardRef(({...rest }, ref) => {

  // function alpharize(color, alpha=areaAlpha) {
  //   return [
  //     ...Array(6).fill(chroma(color).alpha(0.3*alpha).hex()),
  //     ...Array(3).fill(chroma(color).alpha(alpha).hex()),
  //   ]
  // }

  return(
    <Chart
      type="bar"
      width="100%"
      height={400}
      ref={ref}
      data={{
        labels: ["Ext 1", "Ext 2", "30–39", "40–59", "≥ 60", "Security Index", "Media entropy", "Media echo", "Openness family", "Openness Friends"],
        datasets: [
          {
            data: [-3.168377, -6.185956, -4.332496, -5.34668, -7.804648, 9.998635, 4.615053, -12.45545, 5.958668, 3.164143],
            backgroundColor: styles.secondaryColor, //alpharize(styles.cnColor),
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
              // color: alpharize(styles.textColor, 1),
            }
          },
          x: {
            reverse: true,
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
            text: "abc",
          },
          legend: {
            display: false,
          }
        }
      }}
    />
  )
})

export default Coefficients