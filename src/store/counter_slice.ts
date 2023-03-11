import { createSlice } from '@reduxjs/toolkit'


interface ICounterSlice {
    value: number
}

const initialState: ICounterSlice = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {

        increment: (state)=> {
            state.value += 1
        },

        decrement: (state)=> {
            state.value -= 1
        },

        
        // set: (state, action: ActionPayload)=> {
        //     state.value = action.payload
        // },

    }
})


export const { increment, decrement,  } = counterSlice.actions

export default counterSlice.reducer