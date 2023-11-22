import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { annonceData } from '../../Datas/annonce';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from '../../Components/Slideshow'
import Footer from '../../Components/Footer/footer';

function FicheLogement() {
  const { id } = useParams();
  const logementData = annonceData.find(logement => logement.id === id);
  const [descriptionOpen, setDescriptionOpen] = useState(true)
  const [equipementsOpen, setEquipementsOpen] = useState(true)
  const generateRatingStars = () => {
    const rating = parseInt(logementData.rating, 5);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`star ${i > rating ? 'empty' : ''}`}
        />
      );
    }

    return stars;
  };

  if (!logementData) {
    return (
    <Link to="/"></Link>
)
  }

  return (
    <div className='ficheLogement-container'>   
    <Slider images={logementData.pictures} />
      <div className='test'>

      <div className='logement-infos'>
      <h1>{logementData.title}</h1>  
      <h2>{logementData.location}</h2>
      <div className="button-tag">
        {logementData.tags.map(tag => (
          <div key={tag} className='buttons-tags' >
            {tag}
          </div>
        ))}
      </div>
      </div>
      <div className="logement-host">
        <div className='name2'>
        <h2>{logementData.host.name}</h2>
        <div className="host-picture-container">
          <img src={logementData.host.picture} alt="Hôte" className="host-picture" />
        </div>
      </div>
        <div className="rating-stars">{generateRatingStars()}</div>
      </div>
      
      </div>
      <div className='menu-ouvrant'>
      {descriptionOpen ? (
          <div className='description-open' onClick={() => setDescriptionOpen(false)}>
          <p>Descriptions</p>
          <FontAwesomeIcon icon={faChevronUp} className='icon'/>
        </div>
        ) : (
          
          <div className='description-close description-container' onClick={() => setDescriptionOpen(true)}>
         <div className='titre-description'>
          <p>Description</p>
           <FontAwesomeIcon icon={faChevronDown} className='icon'/>
           </div>
          <div className='fond-bleu'>
            <div className='fond-txt'>
            <p>
            {logementData.description}
          </p></div>
          </div>
         
        </div>
        )}
        {equipementsOpen ? (
          <div className='equipements-open' onClick={() => setEquipementsOpen(false)}> 
          <p>Equipements</p>
          <FontAwesomeIcon icon={faChevronUp} className='icon'/>
          </div>
        ) : (
          <div className='equipements-close equipements-container' onClick={() => setEquipementsOpen(true)}> 
          <div className='titre-equipements'>
            <p>Equipements</p>
            <FontAwesomeIcon icon={faChevronDown} className='icon'/>
            </div>
          <div className="fond-bleus"> 
          <div className='fond-txt'>    
        {logementData.equipments.map(equipments => (
          <p key={equipments} >
            {equipments}
          </p>
        ))}</div>
      </div>
          
          </div>
        )}
      </div>
    <Footer></Footer>
    </div>

  );
}

export default FicheLogement;