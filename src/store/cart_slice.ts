import { createSlice } from '@reduxjs/toolkit'


interface IProduct {
    id?: string
    name?: string
    price?: string
    quantity?: string
    description?: string
    image?: string
    shop?: string
}
interface ICart {
    items: IProduct[],
}

const initialState: ICart = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {

        add: (state, { payload })=> {
            // check if product exists
            const productExists = state.items.find((p: IProduct)=> p.id === payload.id )
            
            if( productExists ) return state

            state.items.push(payload)
        },

        remove: (state, { payload })=> {
            // check if product exists
            const productExists = state.items.find((p: IProduct)=> p.id === payload.id )
            
            if( !productExists ) return state

            state.items.filter(p => p.id === payload.id)
        },

        other: (state, { payload })=> {
            // check if product exists
            const productExists = state.items.find((p: IProduct)=> p.id === payload.id )
            
            if( !productExists ) return state

            state.items.filter(p => p.id === payload.id)
        },

        

    }
})


export const { add, remove,  } = cartSlice.actions

export default cartSlice.reducer