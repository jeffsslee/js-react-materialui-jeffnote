import { DeleteOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { blue, green, pink, red, yellow } from "@mui/material/colors";
import React from "react";

const NoteCard = ({ note, handleDelete }) => {
  const avatarColor = {
    works: yellow[700],
    money: green[500],
    todos: pink[500],
  };

  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ backgroundColor: avatarColor[note.category] || blue[500] }}
            >
              {/* string[0].toUpperCase()... first letter and upper case*/}
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color={"textSecondary"}>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
