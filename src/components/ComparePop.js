import React from 'react'
import Chart from './Chart'
import chroma from 'chroma-js'

import styles from '../css/theme/source/_variables.module.scss'

const areaAlpha = 0.75

const ComparePop = React.forwardRef(({groups, pop, sample, title, ...rest }, ref) => {
  return(
    <Chart
      type="bar"
      width="50%"
      height={200}
      ref={ref}
      data={{
        labels: groups,
        datasets: [
          {
            label: "ประชากรไทย",
            data: pop.map(x => x * 100),
            backgroundColor: chroma(styles.fourthColor).alpha(areaAlpha).hex(),
          },
          {
            label: "กลุ่มตัวอย่าง",
            data: sample.map(x => x * 100),
            backgroundColor: chroma(styles.secondaryColor).alpha(areaAlpha).hex(),
          }
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