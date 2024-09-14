import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function SessionDetails() {
    const { courseId, sessionId } = useParams();
    const courses = useSelector(state => state.courses.courses);
    const course = courses.find(course => course._id === courseId);
    const session = course.units.find(unit => unit._id === sessionId);

    if (!session) {
        return <div>Session not found</div>;
    }

    return (
        <div>
            <h2>{session.name}</h2>
            <ul>
                {session.lectures.map(lecture => (
                    <li key={lecture._id}>
                        <Link to={`/courses/${courseId}/units/${sessionId}/lectures/${lecture._id}`}>{lecture.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SessionDetails;