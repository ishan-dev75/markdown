import { useMemo, useRef, useState } from "react";
import { parseMarkdown } from "../utils/markdownParser";
import { withConfirmation } from "../../../utils/helper";
import { COMMON_MESSAGES } from "../constant";

const useMDAction = (initialText: string) => {
  const [markdownText, setMarkdownText] = useState<string>(initialText);
  const [isFileuploadModalOpen, setIsFileuploadModalOpen] =
    useState<boolean>(false);
  const isChangeDetectRef = useRef<boolean>(false); //* For ask user confirmation before uploading new file

  //* Memoize the parsed Markdown to optimize performance and avoid re-renders
  const renderedMarkdown = useMemo(
    () => parseMarkdown(markdownText),
    [markdownText],
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
    isChangeDetectRef.current = true; //* Occur change
  };

  const handleDownload = (markdownText: string) => {
    const blob = new Blob([markdownText], { type: "text/markdown" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "markdown-content.md"; //TODO : Add dynamic name
    link.click();
    isChangeDetectRef.current = false; //* Reset change detect
  };

  const onFileUpload = async (file: File) => {
    if (file) {
      const text = await file.text();
      setMarkdownText(text);
      isChangeDetectRef.current = false;
      toggleFileUploadModal();
    } else {
      alert("Please upload a valid file!");
    }
  };

  const handleFileUpload = (files: File[]) => {
    if (files.length === 1) {
      const file = files[0];
      onFileUpload(file);
    } else {
      window.alert(COMMON_MESSAGES.ALLOW_ONE_FILE);
    }
  };

  const toggleFileUploadModal = () => {
    setIsFileuploadModalOpen((prev) => !prev);
  };

  const openModalWithConfirmation = () => {
    isChangeDetectRef.current
      ? withConfirmation(() => toggleFileUploadModal())
      : toggleFileUploadModal();
  };

  return {
    handleDownload,
    renderedMarkdown,
    handleChange,
    markdownText,
    handleFileUpload,
    toggleFileUploadModal,
    isFileuploadModalOpen,
    openModalWithConfirmation,
  };
};

export default useMDAction;
