import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CourseList() {
    const courses = useSelector(state => state.courses.courses);

    return (
        <ul>
            {courses.map(course => (
                <li key={course._id}>
                    <Link to={`/courses/${course._id}`}>{course.name}</Link>
                </li>
            ))}
        </ul>
    );
}

export default CourseList;