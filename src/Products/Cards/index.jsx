import { annonceData } from '../../Datas/annonce';
import '../../style/index.scss';
import React from 'react';
import Card from '../../Components/Card';


function Cards() {
  const cards = annonceData.map((item, index) => {
    return (
        <Card
            key={item.id}
            id={item.id}
            cover={item.cover}
            title={item.title}
            index={index}
        />
    )
}) 
  return (
    <div className="cards-container">
      {cards}
    </div>
  );
}

export default Cards;
