import { useState } from "react";

interface Props {
  children: string;
  maxLength?: number;
}
const ExpandableText = ({ children, maxLength = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxLength) return <div>{children}</div>;
  else
    return (
      <div
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? children : children.slice(0, maxLength)}...
        <button>{isExpanded ? "Less" : "More"}</button>
      </div>
    );
};

export default ExpandableText;
