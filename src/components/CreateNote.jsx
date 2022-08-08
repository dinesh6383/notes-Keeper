import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateNote(props) {
  const [display, setDisplay] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function alterNote(e) {
    const { name, value } = e.target;
    setNote((previousVal) => {
      return {
        ...previousVal,
        [name]: value,
      };
    });
  }

  function updateNote(e) {
    props.setContent(note, setNote);
    e.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  function expansion() {
    setDisplay(true);
  }

  return (
    <div>
      <form onSubmit={updateNote} className="create-note">
        {display && (
          <input
            value={note.title}
            name="title"
            onChange={alterNote}
            type="text"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expansion}
          value={note.content}
          name="content"
          onChange={alterNote}
          type="text"
          placeholder="Content"
          rows={display ? 3 : 1}
        />
        <Zoom in={display ? true : false}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
