import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const discussionSlice = createSlice({
    name: 'discussions',
    initialState,
    reducers: {
        addDiscussion: (state, action) => {
            state.push(action.payload);
        },
        addReply: (state, action) => {
            const discussion = state.find(discussion => discussion._id === action.payload.discussionId);
            if (discussion) {
                discussion.replies.push(action.payload.reply);
            }
        }
    }
});

export const { addDiscussion, addReply } = discussionSlice.actions;
export default discussionSlice.reducer;