import React from 'react';
import classes from './iceCream.module.css';

const iceCream = () => {
    return (
        <div>
        <div class={classes.icecream}>
          <p className={classes.cone}></p>
          {/*<p>Please start adding scoops</p> */}
          {/* Scoop componant */}
        
          
          <div className={classes.cherry}></div>
        </div>
      </div>
    );
}

export default iceCream;
