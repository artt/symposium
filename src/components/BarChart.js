import React from 'react'
import { Bar } from 'test-react-chartjs-2';

const BarChart = React.forwardRef(({deck, ...props}, ref) => {

  const chartRef = React.useRef(null)

  React.useEffect(() => {
    if (chartRef.current.closest('present'))
      console.log(chartRef.current.closest('present').attr['data-fragment'])
  }, [chartRef])

  return(
    <div className="chart" ref={chartRef}>
      <Bar
        ref={ref}
        {...props}
        // data={{
        //   ...data,
        //   datasets: data.datasets.map(dataset => (
        //     {
        //       data: dataset.data[getFragment()],
        //       label: dataset.label
        //     }
        //   ))
        // }}
      />
    </div>
  )

})

export default BarChart