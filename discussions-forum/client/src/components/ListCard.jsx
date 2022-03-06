import React from "react";
import "../styles/styles.css";

function ListCard(props) {
  const { listItem } = props;

  return (
    <div style={{ marginTop: 10 }} className="cardContainer">
      <div className="cardStyle">
        <div>
          <b>Title: </b>
          {listItem.topic}
        </div>
        <div>
          <br></br>
          <b>Description: </b>
          {listItem.description}
        </div>
      </div>
    </div>
  );
}

export default ListCard;
