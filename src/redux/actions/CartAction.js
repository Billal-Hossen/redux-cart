export const AddToCart=(product)=>{
    return{
        type:"ADD_TO_CART",
        payload:product
    }
}

export const RemoveFromCart=(product)=>{
    return {
        type:"REMOVE_FROM_CART",
        payload:product
    }
}