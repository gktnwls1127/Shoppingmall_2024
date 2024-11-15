import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: {
        id : '',
        email : '',
        name : '',
        role : 0,
        image : ''
    }, 
    isAuth : false,
    isLoading : false,
    error : ''
}

// eslint-disable-next-line no-undef
const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {},
    extraReducers: (builder) => { }
})

export default userSlice.reducer;