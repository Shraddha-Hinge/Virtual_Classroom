import axios from 'axios';
import { setCourses } from '../reducers/courseReducer';

export const loadCourses = () => async (dispatch) => {
    try {
        const response = await axios.get('/courses');
        const courses = response.data;

        dispatch(setCourses(courses));
    } catch (error) {
        console.error(error);
    }
};