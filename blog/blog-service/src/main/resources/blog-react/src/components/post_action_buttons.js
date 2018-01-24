import React from 'react';
import { Link } from 'react-router-dom';
import Confirm from 'react-confirm-bootstrap';

const PostActionButtons = ({postId, onDeleteClick, actionButtonVisibility}) => {
    const html = (
        <div style={{float: 'right'}}>
            <Link to={`/post/modify/${postId}`} className="btn btn-primary">수정</Link>&nbsp;

            <Confirm
                onConfirm={() => {
                    onDeleteClick(postId)
                }}
                body="이 게시물을 삭제하시겠습니까?"
                confirmText="Confirm Delete"
                title="게시물 삭제">
                <button className="btn btn-primary">삭제</button>
            </Confirm>
        </div>
    ) ;

    if (actionButtonVisibility) {
        return html
    } else {
        return (
            <div></div>
        )
    }


};

export default PostActionButtons;
