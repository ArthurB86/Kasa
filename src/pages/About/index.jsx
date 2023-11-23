import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Components/Footer/footer';
import Paysage2 from '../../assets/paysage2.png'


function About() {
    const [fiabiliteOpen, setFiabiliteOpen] = useState(true);
    const [respectOpen, setRespectOpen] = useState(true);
    const [serviceOpen, setServiceOpen] = useState(true)
    const [securiteOpen, setSecuriteOpen] = useState(true)

    
    return (
      <div>
        <div className="paysage-container">
        <img src={Paysage2} alt='Logo' className="paysage-image" />
        </div>
        <div className='about'>
        {fiabiliteOpen ? (
          <div className='fiabilite-open' onClick={() => setFiabiliteOpen(false)}>
          <p>Fiabilite</p>
          <FontAwesomeIcon icon={faChevronUp} className='icon'/>
        </div>
        ) : (
          <div className='fiabilite-close' onClick={() => setFiabiliteOpen(true)}>
          
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
          <FontAwesomeIcon icon={faChevronDown} className='icon'/>
        </div>
        )}
  
        {respectOpen ? (
          <div className='respect-open' onClick={() => setRespectOpen(false)}> 
          <p>Respect</p>
          <FontAwesomeIcon icon={faChevronUp} className='icon'/>
          </div>
        ) : (
          <div className='respect-close' onClick={() => setRespectOpen(true)}> 
          
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
             perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          <FontAwesomeIcon icon={faChevronDown} className='icon'/>
          </div>
        )}
        {serviceOpen ? (
          <div className='service-open' onClick={() => setServiceOpen(false)}> 
          <p>Service</p>
          <FontAwesomeIcon icon={faChevronUp} className='icon'/>
          </div>
        ) : (
          <div className='service-close' onClick={() => setServiceOpen(true)}>       
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
          <FontAwesomeIcon icon={faChevronDown} className='icon'/> 
          </div>
        )}
        {securiteOpen ? (
          <div className='securite-open' onClick={() => setSecuriteOpen(false)}>
            <p>Securite</p>
            <FontAwesomeIcon icon={faChevronUp} className='icon'/>
          </div>
        ) : (
          <div className='securite-close' onClick={() => setSecuriteOpen(true)}>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
             correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
             locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
             également des ateliers sur la sécurité domestique pour nos hôtes.</p>
             <FontAwesomeIcon icon={faChevronDown} className='icon'/>
          </div>
        )}
      </div> 
      <Footer></Footer>
      </div>
    );
  }
  
export default About