import { createSlice , PayloadAction } from '@reduxjs/toolkit'

type IinitialState = {
    value: StarterState;
}

type StarterState = {
   name: string;
   value: string,
}

const initialState = {
    value: {
        name: '',
        value: '',
    }
} as IinitialState

export const starterSlice = createSlice({
    name: "starterSlice",
    initialState,
    reducers: {
        clearAlert: () => {
            return initialState
        },
        //? <string> because we are jsut setting the user name whene login
        updateTheStarterState: (state , action: PayloadAction<StarterState>) => {
            return {
                value: {
                    name: action.payload.name,
                    value: action.payload.value,
                }
            }
        }
    }
})

//? export the functions
export const { updateTheStarterState } = starterSlice.actions;
export default starterSlice.reducer;