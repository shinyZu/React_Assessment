import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style.js";
import Button from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Box } from "@mui/material";

function FileChooser(props) {
  const { classes } = props;

  return (
    <div className={classes.upload__section}>
      <Button
        component="label"
        variant="outlined"
        startIcon={<UploadFileIcon />}
        style={props.style}
        className={classes.upload__btn}
      >
        {props.text}
        <input
          type="file"
          accept="*"
          hidden
          onChange={(e) => {
            props.onUpload(e);
          }}
        />
      </Button>
      {/* {!props.displayFileName ? null : (
        <Box
          style={{ display: props.displayFileName }}
          className={classes.uploaded__file}
        >
          {props.file}
        </Box>
      )} */}
    </div>
  );
}

export default withStyles(styleSheet)(FileChooser);
