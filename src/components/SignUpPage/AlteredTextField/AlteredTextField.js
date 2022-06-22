import React from "react";
import { TextField } from "@material-ui/core";

export const AlteredTextField = ({ required, id, name, type, label, onChange, value, error }) => {
  return (
    <TextField
      required={required}
      id={id}
      label={label}
      name={name}
      type={type}
      variant="outlined"
      onChange={onChange}
      value={value}
      error={!!error}
      helperText={error}
      fullWidth
      margin="normal"
      color="primary"
    />
  );
};
