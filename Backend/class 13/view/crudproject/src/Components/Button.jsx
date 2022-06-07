import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function AppButton({ text, onClick }) {
  return (
    <Stack
      style={{ display: "flex", justifyContent: "center" }}
      spacing={2}
      direction="row"
    >
      <Button onClick={onClick} variant="contained">
        {text}
      </Button>
    </Stack>
  );
}
