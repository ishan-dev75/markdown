import React from "react";
import { MDBox } from "../../../components/mui";
import { useTheme } from "@mui/material";
import useDarkMode from "../../../theme/useDarkMode";

interface Props {
  content: string | Promise<string>;
}

const MarkDownPreview: React.FC<Props> = ({ content }) => {
  const theme = useTheme();
  const { isDarkMode } = useDarkMode();

  return (
    <MDBox
      sx={{
        "& pre:has(code)": {
          backgroundColor: isDarkMode
            ? theme.palette.grey[900]
            : theme.palette.grey[50],
          overflowWrap: "break-word",
          whiteSpace: "break-spaces",
          padding: "20px",
          borderRadius: "10px",
        },
      }}
      className="md_preview"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default MarkDownPreview;
