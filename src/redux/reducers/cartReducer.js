
import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"



export function cartReducer(state=initialState.cart,action){
   switch(action.type)
   {
       case actionTypes.ADD_TO_CART:
           var addedItem = state.find(c=>c.product.ProductCode === action.payload.product.ProductCode)
            if (addedItem)
            {
                var newState = state.map(cartItem=>{
                    if(cartItem.product.ProductCode === action.payload.product.ProductCode)
                    {
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                    }
                    return cartItem
                })
                return newState;
            }
            else{
                return [...state,{...action.payload}]
            }
        case actionTypes.REMOVE_FROM_CART:
            const newState2 = state.filter(cartItem=>cartItem.product.ProductCode !== action.payload.ProductCode)
            return newState2;
        
           
        
        default:
            return state;

   }
}

