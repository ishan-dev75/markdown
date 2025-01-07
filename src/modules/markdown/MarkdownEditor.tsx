import React from "react";
import { MarkdownInput, MarkDownPreview } from "./components";
import { MDBox, MDIconButton } from "../../components/mui";
import { IconComponent } from "../../components/icons";
import useMDAction from "./hooks/useMDAction";
import ActionBox from "./components/ActionBox";
import { FileUploadModal } from "../../components";

type MarkdownEditorProps = {
  initialText: string;
};

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ initialText }) => {
  const height = `calc(100% - 55px)`; //TODO: Fix height issue

  const {
    handleChange,
    handleDownload,
    renderedMarkdown,
    markdownText,
    handleFileUpload,
    isFileuploadModalOpen,
    toggleFileUploadModal,
    openModalWithConfirmation,
  } = useMDAction(initialText);

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
          <MDIconButton
            title="Upload File"
            size="small"
            onClick={openModalWithConfirmation}
          >
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

      <FileUploadModal
        open={isFileuploadModalOpen}
        onClose={toggleFileUploadModal}
        onFileUpload={handleFileUpload}
        accept={{ "text/markdown": [".md"] }}
      />
    </MDBox>
  );
};

export default MarkdownEditor;
