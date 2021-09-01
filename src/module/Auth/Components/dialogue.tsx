import React, { createContext } from "react";
import { Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export type CustomDialogueProps = {
  children?: React.ReactNode;
  onSave?: (data: Object) => Object;
};
const useStyles = makeStyles({
  button: { textAlign: "right", margin: "10px" },
  cardBody: { minHeight: "200px" },
});

const CustomDialog: React.FC<CustomDialogueProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Card>
      {children && <div className={classes.cardBody}>{children}</div>}
      <div className={classes.button}>
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            // if (children) children.props.getData();
          }}
        >
          Save
        </Button>
      </div>
    </Card>
  );
};

export default CustomDialog;
