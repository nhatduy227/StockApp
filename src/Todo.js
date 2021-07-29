import React, { useState } from "react";
import "./Todo.css";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Modal,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginLeft: 500,
    borderRadius: "10px",
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  // const handleOpen = () => {
  //     setOpen(true);
  // };

  const updateTodo = () => {
    // update the todo with the new input text
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={classes.paper}>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></input>
          <Button variant="contained" color="primary" onClick={updateTodo}>
            Update Todo
          </Button>
        </div>
      </Modal>

      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText className="todoList" primary={props.todo.todo} />
          <ListItemSecondaryAction>
            <div className="allButton">
              <Button
                size="small"
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                onClick={() => setOpen(true)}
              >
                EDIT
              </Button>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() =>
                  db.collection("todos").doc(props.todo.id).delete()
                }
              >
                DELETE
              </Button>
            </div>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
