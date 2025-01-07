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
  const height = `calc(100% - 55px)`;

  const {
    handleChange,
    handleDownload,
    renderedMarkdown,
    markdownText,
    handleFileUpload,
    isFileuploadModalOpen,
    toggleFileUploadModal,
    openModalWithConfirmation,
    togglePreview,
    isPreviewOpen,
  } = useMDAction(initialText);

  return (
    <MDBox sx={{ display: "flex", height: "100%" }}>
      <MDBox
        sx={{
          width: isPreviewOpen ? "0px" : "50%",
          visibility: isPreviewOpen ? "hidden" : "visible",
          position: "relative",
          height: height,
          p: 2,
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
          width: isPreviewOpen ? "100%" : "50%",
          borderLeft: "1px solid #ddd",
          transition: "all ease 300ms",
          position: "relative",
          overflow: "auto",
          height: "100%",
          p: 2,
        }}
      >
        <ActionBox>
          <MDIconButton
            title="Preview File"
            size="small"
            onClick={togglePreview}
          >
            <IconComponent type={isPreviewOpen ? "closeEye" : "openEye"} />
          </MDIconButton>
        </ActionBox>
        <MDBox sx={{ height: height, overflow: "auto", pr: 1 }}>
          <MarkDownPreview content={renderedMarkdown} />
        </MDBox>
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
