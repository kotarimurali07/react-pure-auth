import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router";
import { useStyles } from "../../../styles/LoginEmail";
import {
  EmailValadation,
  PasswordValadation,
} from "../../../../../shared/valadation";
import LoginFacebook from "../LoginFacebook";
import LoginGoogle from "../LoginGoogle";
// function Copyright() {
//   return (
//     // <Typography variant="body2" color="textSecondary" align="center">
//     //   <div style={{ backgroundColor: "blue" }}>
//     //     <LoginFacebook />
//     //   </div>
//     //   <hr />
//     //   <div style={{ backgroundColor: "blue" }}>
//     //     <LoginGoogle />
//     //   </div>
//     // </Typography>
//   );
// }
const Presentation = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleChange,
    handleSubmit,
    auth,
  } = props;
  const classes = useStyles();
  return (
    <div>
      {auth.uid ? <Redirect to="/" /> : null}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={
                email.length && !EmailValadation(email)
                  ? "Enter valid email"
                  : null
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              helperText={
                password.length && !PasswordValadation(password)
                  ? "password must contain 6 digits"
                  : null
              }
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submit}
              disabled={
                !EmailValadation(email) || !PasswordValadation(password)
              }
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/ForgotPassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>{/* <Copyright /> */}</Box>
      </Container>
    </div>
  );
};

export default Presentation;
