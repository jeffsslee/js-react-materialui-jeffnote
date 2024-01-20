import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const classes = {
  field: {
    margin: "16px 0",
    display: "block",
  },
};

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (!title) setTitleError(true);
    if (!details) setDetailsError(true);

    if (title && details) {
      fetch(`http://localhost:8000/notes`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => {
        navigate("/");
      });
      setTitle("");
      setDetails("");
      setCategory("todos");
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Create a New Note
      </Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          sx={classes.field}
          id="title"
          label="Note Title"
          variant="outlined"
          required
          // focused
          fullWidth
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          sx={classes.field}
          id="details"
          label="Details"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <FormControl sx={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            row
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="works" control={<Radio />} label="Works" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
