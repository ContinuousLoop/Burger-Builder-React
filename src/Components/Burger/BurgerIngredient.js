import React, {Component} from 'react';
import classes from './BurgerIngredient.css';
import propTypes from 'prop-types';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case('bottomBun'):
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case('topBun'):
                ingredient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                break;
            case('beefPatty'):
                ingredient = <div className={classes.Meat}></div>
                break;
            case('cheese'):
                ingredient = <div className={classes.Cheese}></div>
                break;
            case('bacon'):
                ingredient = <div className={classes.Bacon}></div>
                break;
            case('salad'):
                ingredient = <div className={classes.Salad}></div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes={
    type:propTypes.string.isRequired
}
    export default BurgerIngredient