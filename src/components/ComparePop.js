import React from 'react'
import Chart from './Chart'
import chroma from 'chroma-js'

import styles from '../css/theme/source/_variables.module.scss'

const areaAlpha = 0.75

const ComparePop = React.forwardRef(({groups, pop, sample, title, ...rest }, ref) => {
  return(
    <Chart
      type="line"
      width="100%"
      height={350}
      ref={ref}
      data={{
        labels: groups,
        datasets: [
          {
            label: "กลุ่มตัวอย่าง",
            data: sample.map(x => x * 100),
            backgroundColor: chroma(styles.fourthColor).alpha(areaAlpha).hex(),
            borderColor: styles.fourthColor,
            fill: true,
            tension: 0.4,
          },
          {
            label: "ประชากรไทย",
            data: pop.map(x => x * 100),
            backgroundColor: chroma(styles.secondaryColor).alpha(areaAlpha).hex(),
            border: styles.secondaryColor,
            fill: true,
            tension: 0.4,
          },
        ]
      }}
      options={{
        scales: {
          y: {
            title: {
              display: true,
              text: "สัดส่วน (%)",
            }
          }
        },
        radius: 0,
        plugins: {
          title: {
            display: true,
            text: title,
          }
        }
      }}
      {...rest}
    />
  )
})

export default ComparePop