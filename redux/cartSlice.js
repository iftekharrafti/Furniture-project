import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProducts:[],
        wishlistProducts:[],
        compareProducts:[],
        quantity:0,
        total:0,
        specificQuantity: 1,
    },
    reducers:{
        addProduct:(state, action) => {
            state.cartProducts.push(action.payload)
            state.quantity += 1
            state.total += action.payload.price * action.payload.quantity
            state.specificQuantity = action.payload.quantity 
        },
        removeProduct:(state, action) => {
            state.cartProducts = state.cartProducts.filter(product => product._id !== action.payload)
            state.quantity -= 1
            state.total -= action.payload.price * action.payload.quantity;
        },
        addProductQuantity:(state, action) => {
            state.specificQuantity += 1
        },
        addWishlistProduct:(state, action) => {
            state.wishlistProducts.push(action.payload)
        },
        removeWishlistProduct:(state, action) => {
            state.wishlistProducts = state.wishlistProducts.filter(product => product._id !== action.payload)
        },
        addCompareProduct:(state, action) => {
            state.compareProducts.push(action.payload)
        },
        reset:(state) => {
            state = initialState
        }
    }
})

export const {addProduct, removeProduct, addWishlistProduct, addCompareProduct, removeWishlistProduct, addProductQuantity, reset} = cartSlice.actions

export default cartSlice.reducer