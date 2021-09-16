import React from 'react'
import ChartComponent from 'test-react-chartjs-2'

const Chart = React.forwardRef(({ width="80%", style={}, ...rest }, ref) => {
  return(
    <div className="center" style={{width: width, ...style}}>
      <ChartComponent ref={ref} {...rest} />
    </div>
  )
})

export default Chart