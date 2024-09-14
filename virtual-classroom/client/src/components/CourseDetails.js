import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CourseDetails() {
    const { courseId } = useParams();
    const courses = useSelector(state => state.courses.courses);
    const course = courses.find(course => course._id === courseId);

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div>
            <h2>{course.name}</h2>
            <ul>
                {course.units.map(unit => (
                    <li key={unit._id}>
                        <Link to={`/courses/${courseId}/units/${unit._id}`}>{unit.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseDetails;