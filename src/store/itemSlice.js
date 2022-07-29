import { createSlice } from "@reduxjs/toolkit";


const itemSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        sum: 0,
    },
    reducers: {
        addItem(state, action){
            state.items.push({
                id: action.payload.id,
                name: action.payload.title,
                price: action.payload.price,
                avatar: action.payload.thumbnail,
                amount: 1,
            })  
        },
        increment(state, action){  
            state.items.map(el => {
                if(el.id === action.payload.id){
                    el.amount +=1
                    el.priceUpdated = el.price * el.amount
                }
            })
        },
        decrement(state, action){ 
            if(action.payload.amount > 1) {
                state.items.map(el => {
                    if(el.id === action.payload.id){
                        el.amount -=1
                        el.priceUpdated = el.price * el.amount
                    }
                })
            }
        },
        removeItem(state, action){
            const newState = state.items.filter(item => item.id !== action.payload.id)
            state.items = newState
        }     
    }
})

export const {addItem, increment, decrement, removeItem} = itemSlice.actions;

export default itemSlice.reducer;
