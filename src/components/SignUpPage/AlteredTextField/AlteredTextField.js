import React from "react";
import { TextField } from "@material-ui/core";

export const AlteredTextField = ({
  id, type, label, onChange, value, error
}) => {
  return (
    <TextField
      id={id}
      label={label}
      name={id}
      type={type}
      variant="outlined"
      onChange={onChange}
      value={value}
      error={!!error}
      helperText={error}
      fullWidth
      margin="normal"
    />
  )
}