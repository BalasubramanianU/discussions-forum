import React from "react";
import "../styles/styles.css";

function ListCard(props) {
  const { listItem, style } = props;

  return (
    <div
      style={style ? { ...style, marginTop: "3vh" } : { marginTop: 10 }}
      className="cardContainer"
    >
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
