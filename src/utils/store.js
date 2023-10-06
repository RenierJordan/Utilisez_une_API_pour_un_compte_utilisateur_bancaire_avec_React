import { configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import profileReducer from '../features/profileSlice';


export default configureStore({
    reducer:{
        user: userReducer,
        profile:profileReducer,
    },
});