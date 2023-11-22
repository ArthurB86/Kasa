import { Link } from 'react-router-dom';
import '../../style/index.scss'
import React from 'react';




function Card(props) {
    return ( 
    <Link
        to={`/FicheLogement/${props.id}`}
        key={`${props.title}-${props.index}`}
        className="cards-link"
        >
          <div className="cards ">
            <div className="card-overlay">
              <img src={props.cover} alt={props.title} className="card-image" />
              <div className="card-content">
                <h3>{props.title}</h3>
              </div>
            </div>
          </div>
        </Link>
    );
  }
  export default Card