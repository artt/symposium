import React from 'react'

export default function SocialOutline({ n }) {

  const items = [
    "ภูมิทัศน์ของความสมานฉันท์",
    "ภูมิทัศน์ของความคิดต่าง",
    "จากความคิดต่างสู่ความแตกแยก",
    "ปัจจัยที่ส่งผลต่อความแตกแยก",
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