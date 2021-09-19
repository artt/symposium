import React from 'react'

export default function SocialOutline({ n }) {

  const items = [
    `ความสมานฉันท์ในสังคมไทย`,
    `ความ "คิดต่าง" ในสังคมไทย`,
    `ความคิดต่างกับความแตกแยก`,
    `ปัจจัยที่สัมพันธ์กับความแตกแยก`,
  ]
  return(
    <div className="vertical-center">
      <div>
        <h2>คิดต่าง อย่างมีภูมิ</h2>
        <ol>
          {items.map((item, i) => 
            <li key={`item${i}`} className={i === n-1 ? "" : "fade"}>{item}</li>
          )}
        </ol>
      </div>
    </div>
  )
}