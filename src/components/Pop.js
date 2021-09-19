import React from 'react'
import Chart from './Chart'
import chroma from 'chroma-js'

import styles from '../css/theme/source/_variables.module.scss'

const areaAlpha = 0.75

const ComparePop = React.forwardRef(({title, data, ...rest }, ref) => {

  function alpharize(color, alpha=areaAlpha) {
    return [
      ...Array(6).fill(chroma(color).alpha(0.3*alpha).hex()),
      ...Array(3).fill(chroma(color).alpha(alpha).hex()),
    ]
  }

  return(
    <Chart
      type="bar"
      width="100%"
      ref={ref}
      data={{
        labels: [
          "≤ 25",
          ...[...Array(7).keys()].map(x => `${5*x+26}–${5*x+30}`),
          "> 60"
        ],
        datasets: [
          {
            label: "หญิง",
            data: data.female,
            backgroundColor: alpharize(styles.cnColor),
          },
          {
            label: "ชาย",
            data: data.male?.map(x => -1*x),
            backgroundColor: alpharize(styles.usColor),
          },
          {
            label: "หญิง (ต่างชาติ)",
            data: data.femaleForeign,
            backgroundColor: alpharize(styles.secondaryColor),
          },
          {
            label: "ชาย (ต่างชาติ)",
            data: data.maleForeign?.map(x => -1*x),
            backgroundColor: alpharize(styles.secondaryColor),
          }
        ]
      }}
      options={{
        aspectRatio: 1,
        layout: {
          padding: 0
        },
        indexAxis: 'y',
        scales: {
          y: {
            stacked: true,
            reverse: true,
            ticks: {
              color: alpharize(styles.textColor, 1),
            }
          },
          x: {
            stacked: true,
            min: -1e6,
            max: 1e6,
            ticks: {
              callback: (value, index) => {
                if (value % 5e5 === 0)
                  return Math.abs(value)
                return null
              }
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: title,
          },
          legend: {
            display: false,
          },
          annotation: {
            annotations: {
              highlight: {
                type: 'box',
                yMin: 5.5,
                yMax: 8.5,
                backgroundColor: chroma('white').alpha(0.2).hex(),
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

export default ComparePop