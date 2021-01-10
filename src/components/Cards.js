import React from 'react';
import CardItem from './CardItem';

import './Cards.css'

function Cards() {
    return (
      <div className="cards">
        <h1>Check Out these Epic Destinations!</h1>
        <div className="card__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/img-7.jpg"
                text="Very beautiful descriptive info about the destination in the photo file"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="images/img-4.jpg"
                text="Very beautiful descriptive info about the destination in the photo file"
                label="Adventure"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/img-1.jpg"
                text="Very beautiful descriptive info about the destination in the photo file"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="images/img-5.jpg"
                text="Very beautiful descriptive info about the destination in the photo file"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="images/img-9.jpg"
                text="Very beautiful descriptive info about the destination in the photo file"
                label="Adventure"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Cards;
