import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { uniqueNamesGenerator, adjectives, animals } from "unique-names-generator";
import { Paper, Container, Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socket = io("http://localhost:8000");

const userName = uniqueNamesGenerator({ dictionaries: [adjectives, animals], separator: "-" });

const useStyles = makeStyles({
  paper: {
    padding: 35,
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  message: {
    width: "fit-content",
    padding: "8px 30px 5px 15px",
    marginTop: 10,
    marginBottom: 10,
  },
  messageRight: {
    width: "fit-content",
    padding: "8px 30px 5px 15px",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "auto",
  },
  sendButton: {
    marginLeft: "auto !important",
  },
});

function App() {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    socket.on("message", payload => {
      setChat(chat => [payload, ...chat]);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    socket.on("arrive", payload => {
      toast(payload)
    });
    return () => {
      socket.off("arrive");
    };
  }, []);

  useEffect(() => {
    socket.on("exit", payload => {
      toast(payload)
    });
    return () => {
      socket.off("exit");
    };
  }, []);

  const sendMessage = () => {
    if (message) {
      socket.emit("message", { userName, message });
      setMessage("");
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Paper className={classes.paper} elevation={0}>
        <Typography variant="h4" gutterBottom>
          Hello, {userName}!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Let's write something in the chat for others to see
        </Typography>
        <TextField
          type="text"
          multiline
          fullWidth
          rows={4}
          placeholder="Type message"
          error={error}
          value={message}
          inputProps={{ maxLength: 400 }}
          onKeyDown={e => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessage();
            }
          }}
          onChange={e => {
            setError(false);
            setMessage(e.target.value);
          }}
          required
          helperText={error ? `The message must not be empty` : `${message.length}/400`}
        />
        <Button variant="contained" className={classes.sendButton} onClick={() => sendMessage()}>
          Send
        </Button>
      </Paper>
      {chat.map((payload, index) => (
        <Paper
          key={index}
          className={payload.userName === userName ? classes.messageRight : classes.message}
          elevation={2}
        >
          <Typography variant="h5">
            {payload.userName}:
          </Typography>{" "}
          <Typography variant="h6">{payload.message}</Typography>
        </Paper>
      ))}
    </Container>
  );
}

export default App;
