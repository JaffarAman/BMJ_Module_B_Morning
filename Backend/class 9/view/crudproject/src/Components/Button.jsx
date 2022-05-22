import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import styles from "./todo.module.css";

export default function AppButton({ text, onClick }) {
  return (
    <Stack className={styles.buttonBox} spacing={2} direction="row">
      <Button onClick={onClick} variant="contained">
        {text}
      </Button>
    </Stack>
  );
}
