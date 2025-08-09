import { createSlice } from '@reduxjs/toolkit'
import { data } from 'react-router';

const initialState =[
    {
        id:1,
        name:'Casual t-shirt',
        price: 120,
        category: "T-shirt",
        image:"https://www.pexels.com/photo/person-in-black-crew-neck-t-shirt-and-blue-denim-jeans-4066293/",
        data: "2025-08-09",
    },
    {
        id:2,
        name:'Casual t-shirt',
        price: 140,
        category: "T-shirt",
        image:"https://www.pexels.com/photo/man-wearing-white-t-shirt-and-black-pants-1561011/",
        data: "2025-08-09",
    },
    {
        id:3,
        name:'Polo Shirt',
        price: 140,
        category: "T-shirt",
        image:"https://media.istockphoto.com/id/1097626470/photo/white-collared-shirt-design-template.webp?s=2048x2048&w=is&k=20&c=ERwirOsApjNbKltJmmjFpH8vJcs9IkpnMRwGM73OSNY=",
        data: "2025-08-09",
    },

]


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        addProduct:(state , action)=>{
            state.push({
                id: state.length > 0 ? state[state.length - 1].id : 1,
                ...action.payload

            })
        }
    }
})

export const {addProduct} = productSlice.actions;
export default productSlice.reducer
