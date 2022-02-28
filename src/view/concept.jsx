import React from 'react';
import BigCard from '../components/bigCard';
import image from '../image/boulanger.jpeg';
import { getLang } from '../lang';

const Concept = () => {

  const data = getLang();
  const {concept} = data
  return (
    <div class="concept">
        <BigCard title={concept.title} description={concept.description} src={image} alt={concept.alt}/>
    </div>
    
  )
}

export default Concept;