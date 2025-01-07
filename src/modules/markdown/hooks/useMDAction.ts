import { useMemo, useState } from "react";
import { parseMarkdown } from "../utils/markdownParser";

const useMDAction = (initialText: string) => {
  const [markdownText, setMarkdownText] = useState<string>(initialText);

  //* Memoize the parsed Markdown to optimize performance and avoid re-renders
  const renderedMarkdown = useMemo(
    () => parseMarkdown(markdownText),
    [markdownText],
  );

  //* Handle Editor input change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
  };

  const handleDownload = (markdownText: string) => {
    const blob = new Blob([markdownText], { type: "text/markdown" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "markdown-content.md"; //TODO : Add dynamic name
    link.click();
  };

  return {
    handleDownload,
    renderedMarkdown,
    handleChange,
    markdownText
  };
};

export default useMDAction;
