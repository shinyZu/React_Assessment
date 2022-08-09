import React from "react";
import Grid from "@mui/material/Grid";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

function MyTextValidator(props) {
  const { classes } = props;
  return (
    <>
      <Grid
        item={props.gridType}
        xl={props.xl}
        lg={props.lg}
        md={props.md}
        xs={props.xs}
        sm={props.sm}
        // style={{ border: "2px solid blue" }}
      >
        <TextValidator
          label={props.label}
          type={props.type}
          variant="outlined"
          fullWidth
          multiLine={props.multiline}
          required={true}
          style={props.style}
          multiline={props.multiline}
          minRows={props.minRows}
          validators={props.validators}
          errorMessages={props.errorMessages}
          value={props.value}
          onChange={(e) => {
            props.onChange(e);
          }}
        />
      </Grid>
    </>
  );
}

export default MyTextValidator;
