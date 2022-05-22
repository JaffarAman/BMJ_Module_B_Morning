import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import TodoImg from "../Assets/todo.jpg";

export default function TodoCard({ obj }) {
  const { username, subject, todo } = obj;
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={TodoImg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {username}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {subject}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          EDIT
        </Button>
        <Button color="error" variant="outlined" size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
