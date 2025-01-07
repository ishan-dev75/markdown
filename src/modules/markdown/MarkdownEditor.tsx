import React from "react";
import { MarkdownInput, MarkDownPreview } from "./components";
import { MDBox, MDIconButton } from "../../components/mui";
import { IconComponent } from "../../components/icons";
import { styled } from "@mui/material";
import useMDAction from "./hooks/useMDAction";

type MarkdownEditorProps = {
  initialText: string;
};

const ActionBox = styled(MDBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  gap: theme.spacing(2),
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(1),
  position: "sticky",
  top: 0,
}));

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ initialText }) => {
  const height = `calc(100% - 55px)`; //TODO: Fix height issue
  const { handleChange, handleDownload, renderedMarkdown, markdownText } =
    useMDAction(initialText);

  return (
    <MDBox sx={{ display: "flex", height: "100%" }}>
      <MDBox
        sx={{
          width: "50%",
          margin: "10px",
          position: "relative",
          height: height,
        }}
      >
        <ActionBox>
          <MDIconButton title="Upload File" size="small">
            <IconComponent type="upload" />
          </MDIconButton>
          <MDIconButton
            title="Download File"
            size="small"
            onClick={() => handleDownload(markdownText)}
          >
            <IconComponent type="download" />
          </MDIconButton>
        </ActionBox>
        <MarkdownInput value={markdownText} onChange={handleChange} />
      </MDBox>

      <MDBox
        sx={{
          width: "50%",
          borderLeft: "1px solid #ddd",
          position: "relative",
          overflowY: "auto",
          margin: "10px 0",
          padding: "0 10px",
          height: height,
        }}
      >
        <ActionBox>
          <MDIconButton title="Preview File" size="small">
            <IconComponent type="preview" />
          </MDIconButton>
        </ActionBox>
        <MarkDownPreview content={renderedMarkdown} />
      </MDBox>
    </MDBox>
  );
};

export default MarkdownEditor;
