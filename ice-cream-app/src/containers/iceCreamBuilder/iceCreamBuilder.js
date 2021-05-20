import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/iceCream/iceCream';
import classes from './iceCreamBuilder.module.css';

class iceCreamBuilder extends Component {
    render() {
        return (
            <div className={['container', classes.container].join(' ')}>

             <IceCream />
             <Builder />
             
            </div>
        )
    }
}
export default iceCreamBuilder;