import React from 'react';
import BigCard from '../components/bigCard';
import SmalCard from '../components/smalCard';
import image from '../image/produits.jpeg';
import { getLang } from '../lang';

const Produits = () => {
  const data = getLang();
  const {produits} = data;
  const {content} =   produits;

  return (
    <>
        <div className="corp">
          <BigCard title={produits.title} description={produits.description} src={image} alt={produits.alt} isDownload={true} />
        </div>
        <div className="produits">
            {content && content.map((item, index) =>(
                <SmalCard key={item.id} title={item.name} src={item.img}alt={item.alt} prise={item.price} />
            ))}
        </div>
    </>
    
  )
}

export default Produits;

