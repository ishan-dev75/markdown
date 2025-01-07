import { useMemo, useRef, useState } from "react";
import { parseMarkdown } from "../utils/markdownParser";
import { withConfirmation } from "../../../utils/helper";

const useMDAction = (initialText: string) => {
  const [markdownText, setMarkdownText] = useState<string>(initialText);
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

  const onFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const text = await file.text();
      setMarkdownText(text);
      isChangeDetectRef.current = false;
    } else {
      alert("Please upload a valid file!");
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) =>
    isChangeDetectRef.current
      ? withConfirmation(async () => await onFileUpload(event))
      : onFileUpload(event);

  return {
    handleDownload,
    renderedMarkdown,
    handleChange,
    markdownText,
    handleFileUpload,
  };
};

export default useMDAction;
