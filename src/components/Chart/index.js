import React from 'react'

export default function Chart({ deck, children }) {

  // console.log(ref)
  console.log(deck.current)

  React.useEffect(() => {
    if (deck.current) {
      deck.current.addEventListener('slidechanged', () => {
        console.log('xxx')
        // if (ref.current.canvas.closest('.present')) {
        //   ref.current.reset()
        //   ref.current.update()
        // }
      })
    }
  }, [deck])

  return(
    <div className="chart">
      {children}
    </div>
  )
}