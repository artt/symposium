import React from 'react'
import Chart from './Chart'
import chroma from 'chroma-js'

import styles from '../css/theme/source/_variables.module.scss'

const areaAlpha = 0.675

const ValueAdded = React.forwardRef(({ title, data, showTicks=true, ...rest }, ref) => {
  const countryList = ["ไทย", "อินโดนีเซีย", "มาเลเซีย", "ฟิลิปปินส์", "เวียดนาม"]
  const colorList = [styles.secondaryColor].concat(chroma.brewer.Pastel2.slice(0, 4).map(c => chroma(c).alpha(0.8).hex()))
  return(
    <Chart
      type="line"
      // height={400}
      width="100%"
      ref={ref}
      data={{
        labels: ["2011", "2016"],
        datasets: countryList.map((c, i) => ({
          label: c,
          data: data[i],
          borderColor: colorList[i],
          pointRadius: 0,
          borderWidth: i === 0 ? 8 : 2,
        }))
      }}
      options={{
        // maintainAspectRatio: true,
        aspectRatio: 0.5,
        layout: {
          padding: 0,
        },
        scales: {
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0)',
            },
            title: {
              display: showTicks,
              text: "สัดส่วนมูลค่าเพิ่มที่สร้างได้ในประเทศ (%)"
            },
            min: 0,
            max: 100,
            ticks: {
              display: showTicks,
              // callback: () => "1",
              // color: 'rgba(255, 255, 255, 0)',
            },
          }
        },
        plugins: {
          title: {
            display: true,
            text: title,
          },
          legend: {
            display: false,
            labels: {
              pointStyle: 'line',
              usePointStyle: true,
            }
          }
        },
      }}
      {...rest}
    />
  )
})

export default ValueAdded