import React from "react";
import { useTheme } from "@mui/material";
import useDarkMode from "@theme/useDarkMode";
import FileUploadModal from "@components/FileUploadModal";
import { MDBox, MDIconButton } from "@components/mui";
import { IconComponent } from "@components/icons";

import ActionBox from "./components/ActionBox";
import useMDAction from "./hooks/useMDAction";
import { MarkdownInput, MarkDownPreview } from "./components";


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

  const theme = useTheme();
  const { isDarkMode } = useDarkMode();

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
        <ActionBox
          sx={{
            backgroundColor: isDarkMode
              ? theme.palette.grey[800]
              : theme.palette.grey[200],
          }}
        >
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
        <ActionBox
          sx={{
            backgroundColor: isDarkMode
              ? theme.palette.grey[800]
              : theme.palette.grey[200],
          }}
        >
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
