import React, { Component } from 'react';
import Aux from '../../HOC/Auxl';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/BurgerControls/BurgerControls'
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad:.20,
    bacon:.50,
    cheese:.20,
    beefPatty:1.50,
}

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese:0,
            beefPatty:0,
        },

        totalPrice: 4,
        purchaseable: true,
        showOrder: false,
    }

    addIngredientHandler = (ingr) => {
        let ingredients = {...this.state.ingredients};
        let ingrCount = 1
        ingredients[ingr] += ingrCount

        let oldPrice = this.state.totalPrice;
        let totalPrice = oldPrice + INGREDIENT_PRICES[ingr];
        this.setState({
            ingredients,
            totalPrice
        })

        this.updatePurchaseableHandler(ingredients);
    }

    removeIngredientHandler = (ingr) => {
        let ingredients = {...this.state.ingredients}
        let currentCount = ingredients[ingr];
        if(currentCount === 0){
            return
        }
        let newCount = currentCount -1;
        ingredients[ingr] = newCount;

        let oldPrice = this.state.totalPrice;
        let totalPrice = oldPrice - INGREDIENT_PRICES[ingr];
        this.setState({
            ingredients,
            totalPrice
        })
        this.updatePurchaseableHandler(ingredients);
    }

    updatePurchaseableHandler = (ingredients) => {
        let purchaseable = false;
        let numOfIngredients = Object.keys(ingredients)
        .map( ingr => {
         return ingredients[ingr]
        })
        .reduce((accum, ele)=>{
            return accum + ele
        })

        numOfIngredients > 0 ? purchaseable = true : purchaseable = false

        this.setState({
            purchaseable : !purchaseable
        })
    } 

    showOrderHandler = () => {
        this.setState({
            showOrder : true
        })
    }

    quitSummaryHandler = () => {
        this.setState({
            showOrder: false
        })
    }



    render (){

        const ingredientCopy = {...this.state.ingredients}

        for(const ingr in ingredientCopy){
            ingredientCopy[ingr] = ingredientCopy[ingr] <= 0;
        }

        return(
        <Aux>
            <Modal
             show={this.state.showOrder}
             escape={this.quitSummaryHandler} 
            >
                <OrderSummary 
                ingredients = {this.state.ingredients}
                cancel = {this.quitSummaryHandler}
                price = {this.state.totalPrice}
                />
            </Modal>
            <Burger
            ingredients = {this.state.ingredients}
            />
            <div>
                <BurgerControls
                addIngr = {this.addIngredientHandler}
                removeIngr = {this.removeIngredientHandler}
                disabled = {ingredientCopy}
                totalPrice = {this.state.totalPrice}
                disabledOrder = {this.state.purchaseable}
                showOrder = {this.showOrderHandler}
                />
            </div>
        </Aux>
        )}
    
        }

export default BurgerBuilder