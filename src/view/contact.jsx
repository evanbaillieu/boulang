import React from 'react'
import BigCard from '../components/bigCard';
import image from '../image/boulanger.jpeg';
import { getLang } from '../lang';

export default function Contact() {
    const data = getLang();
    const {contact} = data
    return (
      <div class="contact">
          <BigCard title={contact.title} description={contact.description} src={image} alt={contact.alt} isContact titleh={contact.titleh} descriptionh={contact.descriptionh}/>
      </div>
      
    )
}
