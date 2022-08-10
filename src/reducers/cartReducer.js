export const cartReducter = (state=[] , action)=> {
    switch(action.type){
        case 'CART':
     return action.cart
      default:
        return state

      
    }
}