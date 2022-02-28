import React from 'react'

export default function SmalCard({title, src, alt, prise}) {
  return (
    <div class="smalCard">
     <img class="smalCard-img"src={src} alt={alt} />
     <div className="smalCard_bootom">
         <h4>{title}</h4>
         <h3>Prix : {prise}</h3>
     </div>
    </div>
  )
}
