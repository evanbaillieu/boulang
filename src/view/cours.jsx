import React from 'react';
import BigCard from '../components/bigCard';
import image from '../image/cours.jpeg';
import { getLang } from '../lang';

const Cours = () => {

  const data = getLang();
  const {cours} = data;
  return (
    <>
        <BigCard title={cours.title} description={cours.description} src={image} alt={cours.alt}/>
    </>
    
  )
}

export default Cours;