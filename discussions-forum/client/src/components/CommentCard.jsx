import React from "react";

function CommentCard(props) {
  const { comment } = props;

  return (
    <div className="commentCardContainer">
      <div className="cardStyle">
        <div>{comment}</div>
      </div>
    </div>
  );
}

export default CommentCard;
