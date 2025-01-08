import React from "react";
import MarkdownEditor from "@modules/markdown/MarkdownEditor";
import MasterLayout from "@layout/index";

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
