import React from "react";
import MasterLayout from "../layout";
import MarkdownEditor from "../modules/markdown/MarkdownEditor";

const MarkdownPlayground: React.FC = () => {
  
  const initialText =
    "# Hello Markdown!\nThis is **bold** and this is *italic*.";

  return (
    <MasterLayout>
      <MarkdownEditor initialText={initialText} />
    </MasterLayout>
  );
};

export default MarkdownPlayground;
