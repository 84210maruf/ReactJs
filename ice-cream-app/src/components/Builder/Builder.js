import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import Modal from './Modal/Modal';
import TotalPrice from './TotalPrice/TotalPrice';

const Builder = ({ items, price, add, remove, scoops }) => {
    return (
        <div>
            <div className={classes.builder}>
              <h3>Build your own Ice Cream Sundae</h3> 

              <Items 
              items={items} 
              add={add} 
              remove={remove} 
              scoops={scoops} />
              
              <TotalPrice price={ price } />
              
              <button type="button" className={[classes.order, 'rounded'].join(' ')}>Add to cart</button>
              
            </div>

            <Modal>Hallow Modal...(Children Of Modal)</Modal>

        </div>
    );
};

export default Builder;