import React from "react";
import { MDBox } from "../../../components/mui";

export interface MarkdownInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <MDBox
      sx={{
        height: '100%',
        "& .md-input": {
          width: "100%",
          height: "100%",
          padding: "10px",
          resize: 'none'
        },
      }}
    >
      <textarea
        value={value}
        onChange={onChange}
        className="md-input"
        placeholder="Write your markdown here..."
      />
    </MDBox>
  );
};

export default MarkdownInput;
