import axios from 'axios';
import { setAuthToken, setAuthenticated } from '../reducers/authReducer';

export const login = (username, password) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/login', { username, password });
        const token = response.data.token;

        localStorage.setItem('token', token);
        setAuthToken(token);

        dispatch(setAuthenticated(true));
    } catch (error) {
        console.error(error);
    }
};

export const register = (username, password) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/register', { username, password });
        const token = response.data.token;

        localStorage.setItem('token', token);
        setAuthToken(token);

        dispatch(setAuthenticated(true));
    } catch (error) {
        console.error(error);
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    setAuthToken(null);

    dispatch(setAuthenticated(false));
};