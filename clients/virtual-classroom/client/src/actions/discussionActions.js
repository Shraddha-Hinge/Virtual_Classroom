import axios from 'axios';

export const addDiscussion = (courseId, sessionId, lectureId, text) => async (dispatch) => {
    try {
        await axios.post(`/courses/<span class="math-inline">\{courseId\}/sessions/</span>{sessionId}/lectures/${lectureId}/discussions`, { text });
        // TODO: dispatch action to update discussions
    } catch (error) {
        console.error(error);
    }
};

export const addReply = (discussionId, text) => async (dispatch) => {
    try {
        await axios.post(`/discussions/${discussionId}/replies`, { text });
        // TODO