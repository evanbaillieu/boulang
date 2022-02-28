import React from 'react';
import BigCard from '../components/bigCard';
import SmalCard from '../components/smalCard';
import { getLang } from '../lang';

const Livre = () => {
  const data = getLang();
  const {livre} = data;
  const {content} = livre
  return (
    <>
        <div className="corp">
          <BigCard title={livre.title} description={livre.description} src={livre.img} alt={livre.alt} />
        </div>
        <div className="produits">
            {content && content.map((item, index) =>(
                <SmalCard key={item.id} title={item.name} src={item.img}alt={item.alt} prise={item.price} money/>
            ))}
        </div>
    </>
    
  )
}

export default Livre;

