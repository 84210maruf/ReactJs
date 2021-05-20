import React from 'react';
import classes from './iceCream.module.css';

const iceCream = () => {
    return (
        <div>
        <div className={classes.icecream}>
          <p className={classes.cone}></p>
          
          {/* Scoop componant */}
          
             
          
          <div className={classes.cherry}></div>
        </div>
      </div>
    );
}

export default iceCream;
