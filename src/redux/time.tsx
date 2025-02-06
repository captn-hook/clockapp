import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from './storeTypes'

interface ClockState {
    time: string
}

const initialState: ClockState = {
    time: new Date().toLocaleTimeString(),
}

const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        updateTime(state, action: PayloadAction<string>) {
            state.time = action.payload
        },
    },
})

export const { updateTime } = clockSlice.actions
export const selectClockTime = (state: AppState) => state.clock.time
export default clockSlice.reducer