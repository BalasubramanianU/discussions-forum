import React from "react";
import { useSelector } from "react-redux";

import AddComment from "./AddComment";
import CommentCard from "./CommentCard";
import ListCard from "./ListCard";

function DiscussionCard() {
  const { currentDiscussion, auth } = useSelector((state) => state);
  const [comments, setComments] = React.useState(currentDiscussion.comments);

  React.useEffect(() => {
    setComments(currentDiscussion.comments);
  }, [currentDiscussion]);

  const renderComments = () => {
    return (
      <ul>
        {comments &&
          comments.map((comment, index) => (
            <CommentCard key={index} comment={comment} />
          ))}
      </ul>
    );
  };

  if (Object.keys(currentDiscussion).length === 0)
    return (
      <p>
        Improper data, click any of the discussion from the list to try again.
      </p>
    );
  else
    return (
      <div>
        <ListCard listItem={currentDiscussion} />
        <br></br>
        {auth.userName && auth.password && (
          <AddComment comments={comments} updateComments={setComments} />
        )}
        {comments && comments.length !== 0 && (
          <b className="commentTitle">Comments: </b>
        )}
        {renderComments()}
      </div>
    );
}

export default DiscussionCard;
