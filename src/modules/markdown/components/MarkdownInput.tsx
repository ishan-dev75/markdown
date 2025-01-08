import React from "react";
import { Typography, useTheme } from "@mui/material";
import { MDBox } from "@components/mui";
import useDarkMode from "@theme/useDarkMode";

export interface MarkdownInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  const theme = useTheme();
  const { isDarkMode } = useDarkMode();

  return (
    <MDBox
      sx={{
        height: "100%",
        "& .md-input": {
          width: "100%",
          height: "100%",
          padding: "10px",
          resize: "none",
          border: 0,
          outline: 0,
          backgroundColor: isDarkMode
            ? theme.palette.grey[900]
            : theme.palette.grey[100],
          color: theme.palette.text.primary,
        },
      }}
    >
      <Typography
        component="textarea"
        value={value}
        onChange={onChange}
        className="md-input"
        placeholder="Write your markdown here..."
      />
    </MDBox>
  );
};

export default MarkdownInput;
