import React, { useCallback } from "react";
import { Modal, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { useDropzone, DropzoneOptions, Accept } from "react-dropzone";
import { Upload as UploadIcon, Close as CloseIcon } from "@mui/icons-material";
import { MDBox, MDTypography } from "./mui";

const UploadBox = styled(MDBox)(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  textAlign: "center",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

interface Props {
  open: boolean;
  onClose: () => void;
  onFileUpload?: (files: File[]) => void;
  accept?: Accept;
}

const FileUploadModal: React.FC<Props> = ({
  onClose,
  open,
  onFileUpload,
  accept,
}) => {
  const onDrop = useCallback<NonNullable<DropzoneOptions["onDrop"]>>(
    (acceptedFiles: File[]) => {
      onFileUpload?.(acceptedFiles);
    },
    [],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  const handleClose = (): void => {
    onClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="upload-modal-title"
        aria-describedby="upload-modal-description"
      >
        <MDBox
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
          }}
        >
          <MDBox
            sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
          >
            <MDTypography variant="h6" component="h2" id="upload-modal-title">
              Upload Files
            </MDTypography>
            <IconButton aria-label="close" onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </MDBox>

          <UploadBox {...getRootProps()} sx={{ mb: 3 }}>
            <input {...getInputProps()} />
            <UploadIcon sx={{ fontSize: 32, mb: 2 }} />
            <MDTypography variant="body1" gutterBottom>
              {isDragActive
                ? "Drop the files here"
                : "Drag and drop files here, or click to select files"}
            </MDTypography>
          </UploadBox>
        </MDBox>
      </Modal>
    </>
  );
};

export default FileUploadModal;
