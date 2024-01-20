import { Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

const Note = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/notes`)
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => {
        console.log(`error : ${error}`);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`, { method: "DELETE" });
    let remainNotes = notes.filter((note) => note.id !== id);
    setNotes([...remainNotes]);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    // 500: 1
  };

  return (
    // <Container>
    //   <Grid container spacing={3}>
    //     {notes.map((note) => (
    //       <Grid item key={note.id} xs={12} sm={6} md={4}>
    //         <NoteCard note={note} handleDelete={handleDelete} />
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Container>
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Note;
