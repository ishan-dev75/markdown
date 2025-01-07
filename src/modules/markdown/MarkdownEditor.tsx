import React, { useState, useMemo } from "react";
import { parseMarkdown } from "./utils/markdownParser";
import { MarkdownInput, MarkDownPreview } from "./components";
import { MDBox } from "../../components/mui";

type MarkdownEditorProps = {
  initialText: string;
};

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ initialText }) => {
  const [markdownText, setMarkdownText] = useState(initialText);

  //* Memoize the parsed Markdown to optimize performance and avoid re-renders
  const renderedMarkdown = useMemo(
    () => parseMarkdown(markdownText),
    [markdownText],
  );

  //* Handle textarea change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
  };

  return (
    <MDBox sx={{ display: "flex", height: "100%" }}>
      <MDBox sx={{ width: "50%", margin: "10px" }}>
        <MarkdownInput value={markdownText} onChange={handleChange} />
      </MDBox>

      <MDBox
        sx={{
          width: "50%",
          padding: "0 10px",
          margin: '10px 0',
          borderLeft: "1px solid #ddd",
          overflowY: "auto",
        }}
      >
        <MarkDownPreview content={renderedMarkdown} />
      </MDBox>
    </MDBox>
  );
};

export default MarkdownEditor;
