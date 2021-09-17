import React from 'react'
import Chart from './Chart'

import styles from '../css/theme/source/_variables.module.scss'

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
            backgroundColor: styles.fourthColor,
          },
          {
            label: "กลุ่มตัวอย่าง",
            data: sample,
            backgroundColor: styles.secondaryColor,
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
    />
  )
})

export default ComparePop