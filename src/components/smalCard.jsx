import React from 'react'

export default function SmalCard({title, src, alt, prise, money}) {
  return (
    <div class="smalCard">
     <img class="smalCard-img"src={src} alt={alt} />
     <div className="smalCard_bootom">
         <h4>{title}</h4>
         {money ? (<h3>{prise}</h3>):(
            <h3>Prix : {prise} €</h3>
         )
        
         }
     </div>
    </div>
  )
}
