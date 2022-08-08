import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const { title, content } = props.comment;
  function removeNote() {
    props.clearNote(props.id);
  }
  return (
    <>
      <div className="note">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={removeNote}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
}
export default Note;
