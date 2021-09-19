import React from 'react'
import ChartComponent, { Chart as ChartReact } from 'test-react-chartjs-2'
import annotationPlugin from 'chartjs-plugin-annotation'

import styles from '../css/theme/source/_variables.module.scss'

ChartReact.register(annotationPlugin)
ChartReact.register({
  id: 'texts',
  beforeDraw: (chart, args, options) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over'
    ctx.font = styles.baseSize + styles.baseFont
    ctx.fillStyle = styles.textColor
    if (options.texts) {
      const textObjects = JSON.parse(JSON.stringify(options.texts))
      Object.values(textObjects).forEach(t => {
        ctx.fillText(t.text, t.x, t.y)
      })
    }
    ctx.restore();
  }
})

const Chart = React.forwardRef(({ width="80%", style={}, ...rest }, ref) => {
  return(
    <div className="center" style={{width: width, ...style}}>
      <ChartComponent ref={ref} {...rest} />
    </div>
  )
})

export default Chart