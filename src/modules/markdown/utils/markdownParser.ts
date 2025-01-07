import { marked } from "marked";

//* Function to parse Markdown text to HTML
export const parseMarkdown = (markdownText: string) => {
  return marked(markdownText);
};
