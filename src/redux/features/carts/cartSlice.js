import { createSlice } from '@reduxjs/toolkit'



const cartSlice = createSlice({
    name:"carts",
    initialState: [],
    reducers:{
        // add to cart
   addToCart:(state,action) => {
    // console.log(action.payload)
    const existingProduct = state.find((product) => product.productId === action.payload.id)
    if(existingProduct){
        alert("product alreay added")
    }else{
        state.push({
            ...action.payload,
            id: Date.now(),
            quantity:1,
            productId:action.payload.id
        })
    }
   }


        // increment quantity




        // deccrement quantity



        // remove from cart
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer