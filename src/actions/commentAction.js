import { SUBMIT_COMMENT } from '../actionTypes';
import { database } from '../firebase';

export function saveComment(comment, noteId) {
    return (dispatch) => {
        //console.log('comment action', comment);
        //console.log('noteId', noteId);
        database.child(noteId).child('comments').push(comment);
    };
}
