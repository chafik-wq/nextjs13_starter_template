import { TypedUseSelectorHook , useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import starterReducer from './features/starter-slice'

export const store = configureStore({
    reducer: { //? get state and do some work & update it after that
        starterReducer, //? handle auth states
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector