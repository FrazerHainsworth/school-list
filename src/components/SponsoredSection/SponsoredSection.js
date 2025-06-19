import React from 'react';
import { sponsoredData } from '../../data/sponsoredData';
import './SponsoredSection.css';

const SponsoredSection = () => {
  return (
    <div className="sponsored">
      {sponsoredData.map((item, index) => (
        <div key={index} className="box">
          <img 
            src={item.image} 
            alt={item.title}
            onError={(e) => {
              e.target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1';
            }}
          />
          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsoredSection;