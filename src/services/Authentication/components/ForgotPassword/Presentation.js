import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { EmailValadation } from "../../../../shared/valadation";
import { Link } from "react-router-dom";
const Presentation = (props) => {
  const { email, setEmail, open } = props;
  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Forgot-password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lost your password? Please enter your email address. You will
            receive a link to create a new password via email.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={
              email.length && !EmailValadation(email)
                ? "Enter valid email"
                : null
            }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            <Link to="/Login">cancel</Link>
          </Button>
          <Button color="primary" disabled={!EmailValadation(email)}>
            <Link to="/Login">Done</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Presentation;
