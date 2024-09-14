import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDiscussion, addReply } from '../actions/discussionActions';
import { useParams } from 'react-router-dom';

function DiscussionThread() {
    const { courseId, sessionId, lectureId } = useParams();
    const discussions = useSelector(state => state.discussions);
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleAddDiscussion = (e) => {
        e.preventDefault();
        dispatch(addDiscussion(courseId, sessionId, lectureId, text));
        setText('');
    };

    const handleAddReply = (discussionId, e) => {
        e.preventDefault();
        dispatch(addReply(discussionId, text));
        setText('');
    };

    return (
        <div>
            <h2>Discussion</h2>
            <form onSubmit={handleAddDiscussion}>
                <input type="text" placeholder="Add a discussion" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {discussions.map(discussion => (
                    <li key={discussion._id}>
                        {discussion.text}
                        <form onSubmit={(e) => handleAddReply(discussion._id, e)}>
                            <input type="text" placeholder="Add a reply" value={text} onChange={(e) => setText(e.target.value)} />
                            <button type="submit">Reply</button>
                        </form>
                        <ul>
                            {discussion.replies.map(reply => (
                                <li key={reply._id}>{reply.text}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DiscussionThread;