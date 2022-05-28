import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputField({
  style,
  placeholder,
  todoValue,
  settodoValue,
}) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={(e) => settodoValue(e.target.value)}
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        value={todoValue}
        style={style}
        size={""}
      />
    </Box>
  );
}
