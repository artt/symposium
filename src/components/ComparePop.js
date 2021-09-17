import React from 'react'
import Chart from './Chart'
import chroma from 'chroma-js'

import styles from '../css/theme/source/_variables.module.scss'

const areaAlpha = 0.675

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
            data: pop,
            backgroundColor: chroma(styles.fourthColor).alpha(areaAlpha).hex(),
          },
          {
            label: "กลุ่มตัวอย่าง",
            data: sample,
            backgroundColor: chroma(styles.secondaryColor).alpha(areaAlpha).hex(),
          }
        ]
      }}
      options={{
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