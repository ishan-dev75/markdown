import React from "react";

interface Props {
  content: string | Promise<string>;
}

const MarkDownPreview: React.FC<Props> = ({ content }) => {
  return (
    <div className="md_preview" dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default MarkDownPreview;
