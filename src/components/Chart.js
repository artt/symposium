import React from 'react'
import ChartComponent, { Chart as ChartReact } from 'test-react-chartjs-2'
import annotationPlugin from 'chartjs-plugin-annotation'

ChartReact.register(annotationPlugin)

const Chart = React.forwardRef(({ width="80%", style={}, ...rest }, ref) => {
  return(
    <div className="center" style={{width: width, ...style}}>
      <ChartComponent ref={ref} {...rest} />
    </div>
  )
})

export default Chart