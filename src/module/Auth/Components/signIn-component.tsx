/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button, Grid, TextField, Card, Container } from "@material-ui/core";
import { SubmitHandler, useForm } from "react-hook-form";
import firebase from "firebase/app";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../core/store/currentUserSlice";
import RootState from "../../core/store/store";
import { useEffect } from "react";
import DialogContext from "./dialogue";
require("firebase/auth");

type FormValues = {
  password: string;
  email: string;
};

const useStyles = makeStyles({
  main: {
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
    maxWidth: "100%",
    backgroundColor: "#e5fcfe",
    padding: "0px",
  },
  container: {
    maxWidth: "375px",
  },
  root: {
    minHeight: 275,
  },
});

type LoginProps = {
  getData?: (data: Object) => Object | undefined;
};

const Login: React.FC<LoginProps> = ({ getData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = firebase.auth();
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);
  const user = useSelector((state: any) => state.currentUser.value);
  const dispatch = useDispatch();
  console.log(user.uid);

  useEffect(() => {
    if (getData) {
      getData({ email: email, password: password });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const createUserWithEmailAndPasswordHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    // console.log("email", email, "password", password);
    // if (email && password) {
    //   auth.createUserWithEmailAndPassword(email, password).then((data) => {
    //     console.log(data);
    //   });
    // }
    console.log("user", user);
  };

  const signInWithEmailAndPasswordHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((data) => {
      dispatch(login(data.user));
      console.log(data);
    });
  };

  const onChangeHandler = (event: {
    currentTarget: { name: any; value: any };
  }) => {
    const { name, value } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <Container className={classes.main}>
      <Container className={classes.container}>
        <Card className={classes.root}>
          <CardContent>
            <Grid container direction="column">
              <Grid item>
                <h3>{isSignUp ? "Sign up" : "Sign In"}</h3>
              </Grid>
              <Grid item>
                <TextField
                  name="email"
                  id="email"
                  label=" Email address"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  value={email}
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              <Grid item>
                <TextField
                  name="password"
                  id="password"
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  value={password}
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              {isSignUp && (
                <Grid item>
                  <TextField
                    name="password"
                    id="password"
                    label="confirm Password"
                    margin="normal"
                    variant="outlined"
                    size="small"
                    value={password}
                    onChange={(event) => onChangeHandler(event)}
                  />
                </Grid>
              )}
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Button
                    onClick={(event) => {
                      setIsSignUp(true);
                      if (isSignUp) {
                        createUserWithEmailAndPasswordHandler(
                          event,
                          email,
                          password
                        );
                      }
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Sign Up
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={(event) => {
                      setIsSignUp(false);
                      signInWithEmailAndPasswordHandler(event, email, password);
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
};

export default Login;
