import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);
  function assignComment(note) {
    setNotes((prevVal) => {
      return [...prevVal, note];
    });
  }

  function pickNote(id) {
    setNotes((prevVal) => {
      return prevVal.filter((name, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote setContent={assignComment} />
      <div className="content-holder">
        {notes.map((description, index) => {
          return (
            <Note
              key={index}
              id={index}
              comment={description}
              clearNote={pickNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
