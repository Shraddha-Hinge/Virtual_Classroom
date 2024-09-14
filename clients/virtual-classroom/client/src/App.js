import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login, register, logout } from './actions/authActions';
import { loadCourses } from './actions/courseActions';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import SessionDetails from './components/SessionDetails';
import DiscussionThread from './components/DiscussionThread';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const courses = useSelector(state => state.courses);

    useEffect(() => {
        if (auth.isAuthenticated) {
            dispatch(loadCourses());
        }
    }, [dispatch, auth.isAuthenticated]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={auth.isAuthenticated ? <CourseList /> : <Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/courses/:courseId" element={<CourseDetails />} />
                <Route path="/courses/:courseId/units/:sessionId" element={<SessionDetails />} />
                <Route path="/courses/:courseId/units/:sessionId/lectures/:lectureId" element={<DiscussionThread />} />
            </Routes>
        </Router>
    );
}

export default App;